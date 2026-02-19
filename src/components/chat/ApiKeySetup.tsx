import React, { useState } from 'react';
import { Key, ExternalLink, Eye, EyeOff } from 'lucide-react';

interface Props {
  onSave: (key: string) => void;
}

export default function ApiKeySetup({ onSave }: Props) {
  const [key, setKey] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) { setError('Please enter your API key.'); return; }
    if (!key.startsWith('AIza')) { setError('Gemini API keys typically start with "AIza". Double-check your key.'); return; }
    onSave(key.trim());
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="Gemini"
              className="w-10 h-10"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground text-center mb-1">Chat with Gemini</h1>
        <p className="text-muted-foreground text-sm text-center mb-6">
          Enter your free Google Gemini API key to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Gemini API Key
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type={show ? 'text' : 'password'}
                value={key}
                onChange={e => { setKey(e.target.value); setError(''); }}
                placeholder="AIza..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="button"
                onClick={() => setShow(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && <p className="text-destructive text-xs mt-1.5">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start Chatting
          </button>
        </form>

        <div className="mt-6 p-4 bg-muted/20 rounded-xl border border-border">
          <p className="text-xs font-semibold text-foreground mb-2">How to get a free API key:</p>
          <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Visit Google AI Studio</li>
            <li>Sign in with your Google account</li>
            <li>Click "Get API Key" → "Create API key"</li>
            <li>Copy and paste it above</li>
          </ol>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
          >
            Open Google AI Studio <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Your key is stored locally on your device only.
        </p>
      </div>
    </div>
  );
}
