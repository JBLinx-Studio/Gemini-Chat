import React, { useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { Message } from '../../pages/Chat';

const AI_AVATAR = "https://www.mobiletime.com.br/wp-content/uploads/2024/12/gemini-icon.webp";

interface Props {
  messages: Message[];
  isLoading: boolean;
  onToggleSidebar: () => void;
}

function parseMessage(text: string): React.ReactNode[] {
  const parts = text.split('```');
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      // Code block
      let code = part.trim();
      const firstLine = code.split('\n')[0];
      if (/^[a-zA-Z][\w#+.\-]*$/.test(firstLine)) code = code.slice(firstLine.length).trimStart();
      return <CodeBlock key={i} code={code} />;
    }
    if (!part.trim()) return null;
    // Format inline markdown
    const formatted = part
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
    return <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
  }).filter(Boolean);
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative my-2 rounded-xl overflow-hidden bg-secondary border border-border">
      <button
        onClick={copy}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/30 transition-colors"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-secondary-foreground font-mono whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  );
}

export default function ChatMessages({ messages, isLoading, onToggleSidebar }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card flex-shrink-0">
        <button onClick={onToggleSidebar} className="text-muted-foreground hover:text-foreground transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <img
          src={AI_AVATAR}
          alt="Gemini"
          className="w-7 h-7 rounded-full object-cover"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div>
          <p className="text-sm font-semibold text-foreground leading-none">Gemini</p>
          <p className="text-xs text-muted-foreground">AI Assistant · Powered by Google</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2.5 items-end animate-fade-in ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {msg.role === 'assistant' && (
              <img
                src={AI_AVATAR}
                alt="Gemini"
                className="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-0.5"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm space-y-1 ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-sm'
                  : 'bg-muted/40 text-foreground rounded-bl-sm border border-border'
              }`}
            >
              {parseMessage(msg.content)}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-2.5 items-end">
            <img
              src={AI_AVATAR}
              alt="Gemini"
              className="w-7 h-7 rounded-full object-cover flex-shrink-0"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="bg-muted/40 border border-border rounded-2xl rounded-bl-sm px-4 py-3">
              <p className="text-primary text-sm italic animate-pulse">Generating...</p>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
