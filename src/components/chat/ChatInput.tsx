import React, { useRef } from 'react';

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
      el.style.height = el.scrollHeight + 'px';
    }
  };

  return (
    <div id="input-area">
      <select
        id="script-size"
        value={scriptSize}
        onChange={e => onScriptSizeChange(e.target.value as 'auto' | 'small' | 'large')}
      >
        <option value="auto">Auto</option>
        <option value="small">Small</option>
        <option value="large">Large</option>
      </select>

      <textarea
        id="user-input"
        ref={textareaRef}
        value={value}
        onChange={e => { setValue(e.target.value); handleInput(); }}
        onKeyDown={handleKeyDown}
        placeholder="Message Gemini..."
        rows={1}
        disabled={isLoading}
      />

      <button id="send-button" onClick={handleSend} disabled={isLoading || !value.trim()}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>
  );
}
