import React, { useEffect, useRef } from 'react';
import { Message } from '../../pages/Chat';

const AI_AVATAR_URL = "https://www.mobiletime.com.br/wp-content/uploads/2024/12/gemini-icon.webp";

interface Props {
  messages: Message[];
  isLoading: boolean;
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <pre style={{ backgroundColor: '#1e1e1e', borderRadius: 8, padding: 15, margin: '10px 0', position: 'relative', overflowX: 'auto' }}>
      <code style={{ color: '#ffffff', fontFamily: "'Space Mono', monospace", fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
        {code}
      </code>
      <button
        className="copy-button"
        onClick={copy}
        style={{
          position: 'absolute', top: 8, right: 8,
          backgroundColor: '#333', color: '#fff', border: 'none',
          borderRadius: 4, padding: '4px 8px', fontSize: 12,
          cursor: 'pointer', opacity: 0.7,
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </pre>
  );
}

function parseMessage(text: string): React.ReactNode[] {
  const parts = text.split('```');
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      let code = part.trim();
      const firstLine = code.split('\n')[0];
      if (/^[a-zA-Z][\w#+.\-]*$/.test(firstLine)) {
        code = code.slice(firstLine.length).trimStart();
      }
      return <CodeBlock key={i} code={code} />;
    }
    if (!part.trim()) return null;
    const formatted = part
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
    return (
      <p key={i} style={{ margin: 0, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  }).filter(Boolean) as React.ReactNode[];
}

export default function ChatMessages({ messages, isLoading }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div id="chat-box">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
          style={{ animation: 'fadeInScaleUp 0.3s ease-out forwards' }}
        >
          {msg.role === 'assistant' && (
            <img
              src={AI_AVATAR_URL}
              alt="AI Avatar"
              className="ai-avatar"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="message-content">
            {parseMessage(msg.content)}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="message ai-message thinking">
          <img
            src={AI_AVATAR_URL}
            alt="AI Avatar"
            className="ai-avatar"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="message-content">
            <p className="generating">Generating code...</p>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
