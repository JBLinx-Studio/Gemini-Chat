const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const newChatButton = document.getElementById('new-chat-button');
const recentChatsList = document.getElementById('recent-chats-list');

let conversationHistory = [];
let currentChatId = null;
const initialGreeting = "Hello! How can I help you today?";
const MAX_RECENT_CHATS = 8;
const STORAGE_KEY = 'geminiRecentChats';
const AI_AVATAR_URL = "https://www.mobiletime.com.br/wp-content/uploads/2024/12/gemini-icon.webp";
const scriptSizeSelect = document.getElementById('script-size');

function addMessage(sender, message, animate = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'ai-message');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    // Check if message contains code blocks
    const hasCodeBlock = message.includes('```');
    if (hasCodeBlock) {
        const parts = message.split('```');
        parts.forEach((part, index) => {
            if (index % 2 === 0) {
                // Regular text
                if (part.trim()) {
                    const p = document.createElement('p');
                    part = part.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    part = part.replace(/\*(.*?)\*/g, '<em>$1</em>');
                    part = part.replace(/\n/g, '<br>');
                    p.innerHTML = part;
                    messageContent.appendChild(p);
                }
            } else {
                // Code block
                const pre = document.createElement('pre');
                const code = document.createElement('code');
                let trimmed = part.trim();
                const firstLine = trimmed.split('\n')[0];
                if (/^[a-zA-Z][\w#+.\-]*$/.test(firstLine)) {
                    trimmed = trimmed.slice(firstLine.length).trimStart();
                }
                code.textContent = trimmed;
                pre.appendChild(code);

                // Add copy button
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button';
                copyButton.textContent = 'Copy';
                copyButton.onclick = () => {
                    navigator.clipboard.writeText(code.textContent);
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                };
                pre.appendChild(copyButton);
                messageContent.appendChild(pre);
            }
        });
    } else {
        const p = document.createElement('p');
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        message = message.replace(/\*(.*?)\*/g, '<em>$1</em>');
        message = message.replace(/\n/g, '<br>');
        p.innerHTML = message;
        messageContent.appendChild(p);
    }

    if (sender === 'ai' && !messageElement.classList.contains('thinking')) {
        const avatarImg = document.createElement('img');
        avatarImg.src = AI_AVATAR_URL;
        avatarImg.alt = "AI Avatar";
        avatarImg.classList.add('ai-avatar');
        messageElement.appendChild(avatarImg);
    }

    messageElement.appendChild(messageContent);

    if (animate) {
        messageElement.style.animation = 'fadeInScaleUp 0.3s ease-out forwards';
    }

    chatBox.appendChild(messageElement);
    requestAnimationFrame(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function getRecentChats() {
    const storedChats = localStorage.getItem(STORAGE_KEY);
    return storedChats ? JSON.parse(storedChats) : [];
}

function saveRecentChats(chats) {
    const chatsToSave = chats.slice(-MAX_RECENT_CHATS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatsToSave));
}

function generateChatTitle(history) {
    const firstUserMessage = history.find(msg => msg.role === 'user');
    if (firstUserMessage && firstUserMessage.content) {
        return firstUserMessage.content.substring(0, 30) + (firstUserMessage.content.length > 30 ? '...' : '');
    }
    return "New Chat";
}

function saveCurrentConversation() {
    if (conversationHistory.length <= 1 || conversationHistory.every(m => m.role === 'assistant')) return;

    const recentChats = getRecentChats();
    const title = generateChatTitle(conversationHistory);

    if (currentChatId) {
        const existingChatIndex = recentChats.findIndex(chat => chat.id === currentChatId);
        if (existingChatIndex > -1) {
            recentChats[existingChatIndex].history = [...conversationHistory];
            recentChats[existingChatIndex].title = title;
            recentChats[existingChatIndex].lastUpdated = Date.now();
            const updatedChat = recentChats.splice(existingChatIndex, 1)[0];
            recentChats.push(updatedChat);
        } else {
            currentChatId = Date.now();
            recentChats.push({
                id: currentChatId,
                title: title,
                history: [...conversationHistory],
                lastUpdated: Date.now()
            });
        }
    } else {
        currentChatId = Date.now();
        recentChats.push({
            id: currentChatId,
            title: title,
            history: [...conversationHistory],
            lastUpdated: Date.now()
        });
    }

    saveRecentChats(recentChats);
    displayRecentChats();
}

function displayRecentChats() {
    const recentChats = getRecentChats();
    recentChats.sort((a, b) => b.lastUpdated - a.lastUpdated);
    recentChatsList.innerHTML = '';

    recentChats.forEach(chat => {
        const li = document.createElement('li');
        li.textContent = chat.title || 'Chat';
        li.title = chat.title || 'Chat';
        li.dataset.chatId = chat.id;
        if (chat.id === currentChatId) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => loadSpecificChat(chat.id));
        recentChatsList.appendChild(li);
    });

    const activeLi = recentChatsList.querySelector('.active');
    if (activeLi) {
        activeLi.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
}

function loadSpecificChat(chatId) {
    if (chatId === currentChatId) return;

    saveCurrentConversation();

    const recentChats = getRecentChats();
    const chatToLoad = recentChats.find(chat => chat.id === chatId);

    if (chatToLoad) {
        currentChatId = chatToLoad.id;
        conversationHistory = [...chatToLoad.history];
        chatBox.innerHTML = '';

        conversationHistory.forEach(message => {
            addMessage(message.role === 'user' ? 'user' : 'ai', message.content, false);
        });

        userInput.value = '';
        userInput.style.height = 'auto';
        userInput.focus();
        displayRecentChats();
    } else {
        console.error("Chat with ID", chatId, "not found.");
        startNewChat();
    }
}

async function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    addMessage('user', messageText);
    userInput.value = '';
    userInput.style.height = 'auto';

    const userMessage = {
        role: "user",
        content: messageText,
    };
    conversationHistory.push(userMessage);

    const thinkingElement = document.createElement('div');
    thinkingElement.classList.add('message', 'ai-message', 'thinking');
    thinkingElement.innerHTML = `
        <img src="${AI_AVATAR_URL}" alt="AI Avatar" class="ai-avatar">
        <div class="message-content"><p class="generating">Generating code...</p></div>
    `;
    chatBox.appendChild(thinkingElement);
    
    try {
        // Read script size preference
        const sizePref = (scriptSizeSelect?.value || 'auto').toLowerCase();
        const sizeDirective = sizePref === 'small'
            ? "Keep the script short and focused with minimal boilerplate."
            : sizePref === 'large'
            ? "Provide a more comprehensive, larger script with helpful comments."
            : "Choose an appropriate script length based on the user's request.";

        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are Gemini, a helpful AI assistant from Google.
When generating game-help code or scripts, follow this length preference: ${sizeDirective}
Explain your thought process briefly before showing the code.
Wrap all code in triple backticks (\`\`\`), and do not include any language labels.
Use *italics* and **bold** for emphasis. Keep responses clear and friendly.`,
                },
                ...conversationHistory.slice(-10),
            ],
        });

        chatBox.removeChild(thinkingElement);
        addMessage('ai', completion.content);
        conversationHistory.push(completion);
        saveCurrentConversation();

    } catch (error) {
        console.error("Error calling AI:", error);
        const thinkingIndicator = chatBox.querySelector('.thinking');
        if(thinkingIndicator) {
            chatBox.removeChild(thinkingIndicator);
        }
        addMessage('ai', "Sorry, I encountered an error. Please try again.");
    }
}

function startNewChat() {
    saveCurrentConversation();

    currentChatId = null;
    chatBox.innerHTML = '';
    conversationHistory = [];
    userInput.value = '';
    userInput.style.height = 'auto';

    addMessage('ai', initialGreeting, false);
    conversationHistory.push({ role: "assistant", content: initialGreeting });

    displayRecentChats();
    userInput.focus();
}

function initializeChat() {
    displayRecentChats();

    const recentChats = getRecentChats();
    if (recentChats.length > 0) {
        recentChats.sort((a, b) => b.lastUpdated - a.lastUpdated);
        loadSpecificChat(recentChats[0].id);
    } else {
        startNewChat();
    }
}

initializeChat();

sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

newChatButton.addEventListener('click', startNewChat);

userInput.addEventListener('input', () => {
    userInput.style.height = 'auto';
    userInput.style.height = (userInput.scrollHeight) + 'px';
});
