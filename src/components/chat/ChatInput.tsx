import React, { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSend: (text: string) => void;
  isLoading: boolean;
  scriptSize: 'auto' | 'small' | 'large';
  onScriptSizeChange: (size: 'auto' | 'small' | 'large') => void;
}

export default function ChatInput({ onSend, isLoading, scriptSize, onScriptSizeChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState('');

  const handleSend = () => {
    if (!value.trim() || isLoading) return;
    onSend(value.trim());
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
  };

  return (
    <div className="flex-shrink-0 border-t border-border bg-card px-4 py-3">
      <div className="flex items-end gap-2 max-w-3xl mx-auto">
        {/* Script size selector */}
        <select
          value={scriptSize}
          onChange={e => onScriptSizeChange(e.target.value as 'auto' | 'small' | 'large')}
          className="flex-shrink-0 text-xs border border-input rounded-xl px-2.5 py-2 bg-background text-foreground h-9 focus:outline-none focus:ring-2 focus:ring-ring"
          title="Response length preference"
        >
          <option value="auto">Auto</option>
          <option value="small">Short</option>
          <option value="large">Detailed</option>
        </select>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={e => { setValue(e.target.value); handleInput(); }}
          onKeyDown={handleKeyDown}
          placeholder="Message Gemini..."
          rows={1}
          className="flex-1 resize-none border border-input rounded-xl px-4 py-2 text-sm bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring min-h-[36px] max-h-[120px] leading-relaxed"
          disabled={isLoading}
        />

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={isLoading || !value.trim()}
          className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-center text-xs text-muted mt-2">
        Powered by Gemini 1.5 Flash · Free tier
      </p>
    </div>
  );
}
