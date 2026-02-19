import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatSidebar from '../components/chat/ChatSidebar';
import ChatMessages from '../components/chat/ChatMessages';
import ChatInput from '../components/chat/ChatInput';
import ApiKeySetup from '../components/chat/ApiKeySetup';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Chat {
  id: number;
  title: string;
  history: Message[];
  lastUpdated: number;
}

const STORAGE_KEY = 'geminiRecentChats';
const API_KEY_STORAGE = 'geminiApiKey';
const MAX_RECENT_CHATS = 8;
const INITIAL_GREETING = "Hello! I'm Gemini, your AI assistant from Google. How can I help you today?";

export default function ChatPage() {
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem(API_KEY_STORAGE) || '');
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const [recentChats, setRecentChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scriptSize, setScriptSize] = useState<'auto' | 'small' | 'large'>('auto');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentChatIdRef = useRef<number | null>(null);
  const conversationHistoryRef = useRef<Message[]>([]);

  useEffect(() => { currentChatIdRef.current = currentChatId; }, [currentChatId]);
  useEffect(() => { conversationHistoryRef.current = conversationHistory; }, [conversationHistory]);

  const getRecentChats = useCallback((): Chat[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }, []);

  const saveRecentChats = useCallback((chats: Chat[]) => {
    const toSave = chats.slice(-MAX_RECENT_CHATS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    setRecentChats([...toSave].sort((a, b) => b.lastUpdated - a.lastUpdated));
  }, []);

  const generateTitle = (history: Message[]): string => {
    const first = history.find(m => m.role === 'user');
    if (first) return first.content.substring(0, 30) + (first.content.length > 30 ? '...' : '');
    return 'New Chat';
  };

  const saveCurrentConversation = useCallback((history: Message[], chatId: number | null) => {
    if (history.length <= 1 || history.every(m => m.role === 'assistant')) return;
    const chats = getRecentChats();
    const title = generateTitle(history);
    let newChatId = chatId;

    if (chatId) {
      const idx = chats.findIndex(c => c.id === chatId);
      if (idx > -1) {
        chats[idx] = { ...chats[idx], history: [...history], title, lastUpdated: Date.now() };
        const updated = chats.splice(idx, 1)[0];
        chats.push(updated);
      } else {
        newChatId = Date.now();
        chats.push({ id: newChatId!, title, history: [...history], lastUpdated: Date.now() });
      }
    } else {
      newChatId = Date.now();
      chats.push({ id: newChatId!, title, history: [...history], lastUpdated: Date.now() });
      setCurrentChatId(newChatId);
    }
    saveRecentChats(chats);
    return newChatId;
  }, [getRecentChats, saveRecentChats]);

  const startNewChat = useCallback(() => {
    saveCurrentConversation(conversationHistoryRef.current, currentChatIdRef.current);
    setCurrentChatId(null);
    const greeting: Message = { role: 'assistant', content: INITIAL_GREETING };
    setMessages([greeting]);
    setConversationHistory([greeting]);
    const chats = getRecentChats();
    setRecentChats([...chats].sort((a, b) => b.lastUpdated - a.lastUpdated));
  }, [saveCurrentConversation, getRecentChats]);

  const loadChat = useCallback((chatId: number) => {
    if (chatId === currentChatIdRef.current) return;
    saveCurrentConversation(conversationHistoryRef.current, currentChatIdRef.current);
    const chats = getRecentChats();
    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chat.id);
      setMessages([...chat.history]);
      setConversationHistory([...chat.history]);
      const updatedChats = getRecentChats();
      setRecentChats([...updatedChats].sort((a, b) => b.lastUpdated - a.lastUpdated));
    }
  }, [saveCurrentConversation, getRecentChats]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading || !apiKey) return;

    const userMsg: Message = { role: 'user', content: text };
    const newHistory = [...conversationHistoryRef.current, userMsg];

    setMessages(prev => [...prev, userMsg]);
    setConversationHistory(newHistory);
    setIsLoading(true);

    const sizeDirective =
      scriptSize === 'small' ? 'Keep the script short and focused with minimal boilerplate.' :
      scriptSize === 'large' ? 'Provide a more comprehensive, larger script with helpful comments.' :
      'Choose an appropriate script length based on the user request.';

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const systemInstruction = `You are Gemini, a helpful AI assistant from Google.
When generating code or scripts, follow this length preference: ${sizeDirective}
Explain your thought process briefly before showing code.
Wrap all code in triple backticks (\`\`\`), do not include language labels.
Use *italics* and **bold** for emphasis. Keep responses clear and friendly.`;

      const chat = model.startChat({
        systemInstruction,
        history: newHistory.slice(0, -1).slice(-10).map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }],
        })),
      });

      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      const aiMsg: Message = { role: 'assistant', content: responseText };
      const updatedHistory = [...newHistory, aiMsg];

      setMessages(prev => [...prev, aiMsg]);
      setConversationHistory(updatedHistory);

      const newId = saveCurrentConversation(updatedHistory, currentChatIdRef.current);
      if (newId && !currentChatIdRef.current) setCurrentChatId(newId as number);
    } catch (err: any) {
      console.error('Gemini error:', err);
      let errorMsg = "Sorry, I encountered an error. Please try again.";
      if (err?.message?.includes('API_KEY_INVALID') || err?.message?.includes('400')) {
        errorMsg = "Invalid API key. Please check your Gemini API key in settings.";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, isLoading, scriptSize, saveCurrentConversation]);

  const handleSaveApiKey = (key: string) => {
    localStorage.setItem(API_KEY_STORAGE, key);
    setApiKey(key);
  };

  const handleClearApiKey = () => {
    localStorage.removeItem(API_KEY_STORAGE);
    setApiKey('');
  };

  // Initialize
  useEffect(() => {
    const chats = getRecentChats();
    setRecentChats([...chats].sort((a, b) => b.lastUpdated - a.lastUpdated));
    if (chats.length > 0) {
      const sorted = [...chats].sort((a, b) => b.lastUpdated - a.lastUpdated);
      const latest = sorted[0];
      setCurrentChatId(latest.id);
      setMessages([...latest.history]);
      setConversationHistory([...latest.history]);
    } else {
      const greeting: Message = { role: 'assistant', content: INITIAL_GREETING };
      setMessages([greeting]);
      setConversationHistory([greeting]);
    }
  }, [getRecentChats]);

  if (!apiKey) {
    return <ApiKeySetup onSave={handleSaveApiKey} />;
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <ChatSidebar
        recentChats={recentChats}
        currentChatId={currentChatId}
        onNewChat={startNewChat}
        onLoadChat={loadChat}
        onClearApiKey={handleClearApiKey}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(o => !o)}
      />
      <div className="flex flex-col flex-1 min-w-0">
        <ChatMessages messages={messages} isLoading={isLoading} onToggleSidebar={() => setSidebarOpen(o => !o)} />
        <ChatInput
          onSend={sendMessage}
          isLoading={isLoading}
          scriptSize={scriptSize}
          onScriptSizeChange={setScriptSize}
        />
      </div>
    </div>
  );
}
