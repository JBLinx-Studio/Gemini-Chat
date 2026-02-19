import React from 'react';
import { Plus, MessageSquare, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { Chat } from '../../pages/Chat';

interface Props {
  recentChats: Chat[];
  currentChatId: number | null;
  onNewChat: () => void;
  onLoadChat: (id: number) => void;
  onClearApiKey: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ChatSidebar({ recentChats, currentChatId, onNewChat, onLoadChat, onClearApiKey, isOpen, onToggle }: Props) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-card border-r border-border transition-all duration-300 flex-shrink-0 ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            alt="Gemini"
            className="w-6 h-6"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span className="font-bold text-foreground text-sm">Chat with Gemini</span>
        </div>

        {/* New Chat */}
        <div className="p-3">
          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Recent Chats */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          {recentChats.length > 0 && (
            <>
              <p className="text-xs font-semibold text-muted uppercase tracking-wider px-2 py-1">Recent</p>
              {recentChats.map(chat => (
                <button
                  key={chat.id}
                  onClick={() => onLoadChat(chat.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-colors truncate ${
                    chat.id === currentChatId
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-foreground hover:bg-muted/30'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                  <span className="truncate">{chat.title || 'Chat'}</span>
                </button>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border">
          <button
            onClick={onClearApiKey}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Change API Key
          </button>
        </div>
      </aside>

      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-r-lg p-1 text-muted-foreground hover:text-foreground transition-colors shadow-sm"
        style={{ left: isOpen ? '256px' : '0px', transition: 'left 0.3s' }}
      >
        {isOpen ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
      </button>
    </>
  );
}
