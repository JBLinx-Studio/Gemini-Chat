import React from 'react';
import { Chat } from '../../pages/Chat';

interface Props {
  recentChats: Chat[];
  currentChatId: number | null;
  onNewChat: () => void;
  onLoadChat: (id: number) => void;
  onClearApiKey: () => void;
}

export default function ChatSidebar({ recentChats, currentChatId, onNewChat, onLoadChat, onClearApiKey }: Props) {
  return (
    <div id="sidebar">
      {/* Header */}
      <div id="header">
        <h2>
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            alt="Gemini"
            style={{ width: 20, height: 20, verticalAlign: 'middle', marginRight: 6 }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          Chat with Gemini
        </h2>
        <button id="new-chat-button" onClick={onNewChat}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          New Chat
        </button>
      </div>

      {/* Recent Chats */}
      <div id="recent-chats-container">
        <h4>Recent</h4>
        <ul id="recent-chats-list">
          {recentChats.map(chat => (
            <li
              key={chat.id}
              title={chat.title || 'Chat'}
              className={chat.id === currentChatId ? 'active' : ''}
              onClick={() => onLoadChat(chat.id)}
            >
              {chat.title || 'Chat'}
            </li>
          ))}
        </ul>
      </div>

      {/* Change API Key */}
      <div style={{ padding: '8px 15px', borderTop: '1px solid #eee' }}>
        <button
          onClick={onClearApiKey}
          style={{
            background: 'transparent',
            color: '#888',
            border: '1px solid #ddd',
            padding: '5px 10px',
            borderRadius: 15,
            cursor: 'pointer',
            fontSize: '0.8em',
            width: '100%',
          }}
        >
          Change API Key
        </button>
      </div>
    </div>
  );
}
