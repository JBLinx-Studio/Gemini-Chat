import React, { useState } from 'react';

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
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      padding: 16,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
        padding: 32,
      }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            alt="Gemini"
            style={{ width: 48, height: 48, marginBottom: 12 }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <h2 style={{ margin: 0, color: '#333', fontSize: '1.4em' }}>Chat with Gemini</h2>
          <p style={{ color: '#666', fontSize: '0.9em', marginTop: 6 }}>
            Enter your free Google Gemini API key to start chatting
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#333', fontSize: '0.9em' }}>
            Gemini API Key
          </label>
          <div style={{ display: 'flex', marginBottom: 12 }}>
            <input
              type={show ? 'text' : 'password'}
              value={key}
              onChange={e => { setKey(e.target.value); setError(''); }}
              placeholder="AIza..."
              style={{
                flex: 1,
                padding: '10px 12px',
                border: '1px solid #ccc',
                borderRadius: '8px 0 0 8px',
                fontSize: '0.95em',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              style={{
                padding: '0 12px',
                border: '1px solid #ccc',
                borderLeft: 'none',
                borderRadius: '0 8px 8px 0',
                background: '#f9f9f9',
                cursor: 'pointer',
                color: '#555',
                fontSize: '0.85em',
              }}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
          {error && <p style={{ color: '#d32f2f', fontSize: '0.82em', marginBottom: 8 }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '11px',
              backgroundColor: '#4285F4',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '1em',
              cursor: 'pointer',
            }}
          >
            Start Chatting
          </button>
        </form>

        <div style={{ marginTop: 20, padding: 14, backgroundColor: '#f9f9f9', borderRadius: 8, border: '1px solid #eee' }}>
          <p style={{ fontWeight: 600, fontSize: '0.85em', color: '#333', marginBottom: 6 }}>How to get a free API key:</p>
          <ol style={{ paddingLeft: 18, margin: 0, fontSize: '0.82em', color: '#555', lineHeight: 1.7 }}>
            <li>Visit Google AI Studio</li>
            <li>Sign in with your Google account</li>
            <li>Click "Get API Key" → "Create API key"</li>
            <li>Copy and paste it above</li>
          </ol>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: 8, color: '#4285F4', fontSize: '0.85em', fontWeight: 600 }}
          >
            Open Google AI Studio →
          </a>
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78em', color: '#999', marginTop: 14 }}>
          Your key is stored locally on your device only — never sent to any server.
        </p>
      </div>
    </div>
  );
}
