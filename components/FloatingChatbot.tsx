
import React, { useState, useRef, useEffect } from 'react';
import { askOracle } from '../services/geminiService';
import { OracleMessage } from '../types';

interface ChatbotProps {
  isDarkMode: boolean;
}

const FloatingChatbot: React.FC<ChatbotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<OracleMessage[]>([
    { role: 'assistant', content: 'System initialized. I am the Amrutha Proxy. How can I assist your technical inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: OracleMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await askOracle(messages, input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className={`mb-4 w-[350px] md:w-[400px] h-[500px] border rounded-sm flex flex-col shadow-2xl transition-all duration-500 transform origin-bottom-right scale-100 opacity-100 ${
          isDarkMode ? 'bg-[#0a0a0a] border-white/10 text-white' : 'bg-white border-black/10 text-black'
        }`}>
          {/* Header */}
          <div className={`p-3 border-b flex justify-between items-center ${isDarkMode ? 'bg-[#111] border-white/5' : 'bg-neutral-100 border-black/5'}`}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest opacity-60">Proxy_Terminal_v1</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:opacity-50 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-sm mono text-[11px] leading-relaxed ${
                  msg.role === 'user' 
                    ? (isDarkMode ? 'bg-white/5 text-blue-400 border border-white/5' : 'bg-black/5 text-blue-600 border border-black/5') 
                    : (isDarkMode ? 'bg-blue-500/10 text-neutral-300 border-l-2 border-blue-500/50' : 'bg-blue-50 text-neutral-700 border-l-2 border-blue-600/50')
                }`}>
                  <span className="block text-[9px] uppercase opacity-40 mb-1">
                    {msg.role === 'user' ? 'Guest' : 'Amrutha_Proxy'}
                  </span>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-1 items-center px-4 animate-pulse">
                  <span className="mono text-[10px] opacity-50">COMPUTING</span>
                  <span className="w-1 h-1 bg-current rounded-full"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-white/5 bg-[#080808]' : 'border-black/5 bg-neutral-50'}`}>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask proxy..."
                className="flex-1 bg-transparent border-b border-transparent mono text-xs py-1 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className={`mono text-[10px] px-3 py-1 border transition-all disabled:opacity-30 ${
                  isDarkMode 
                    ? 'border-white/20 hover:bg-white hover:text-black' 
                    : 'border-black/20 hover:bg-black hover:text-white'
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border ${
          isDarkMode 
            ? 'bg-white text-black border-white/20' 
            : 'bg-black text-white border-black/20'
        } ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? (
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
