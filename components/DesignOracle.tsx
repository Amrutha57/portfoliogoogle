
import React, { useState, useRef, useEffect } from 'react';
import { askOracle } from '../services/geminiService';
import { OracleMessage } from '../types';

interface OracleProps {
  isDarkMode: boolean;
}

const DesignOracle: React.FC<OracleProps> = ({ isDarkMode }) => {
  const [messages, setMessages] = useState<OracleMessage[]>([
    { role: 'assistant', content: 'Neural Proxy Active. Querying Amrutha Lakshmi\'s technical repository... How can I assist your inquiry?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

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
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12 text-center">
        <span className={`mono text-[10px] uppercase tracking-[0.4em] mb-2 block ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>System Interrogator</span>
        <h2 className="text-4xl font-extralight tracking-tight">Technical Proxy.</h2>
      </div>

      <div className={`border rounded-sm overflow-hidden flex flex-col h-[500px] shadow-2xl transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] border-white/5' : 'bg-white border-black/10'}`}>
        <div className={`p-3 border-b flex justify-between items-center ${isDarkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-neutral-100 border-black/5'}`}>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <span className={`mono text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>amrutha_v1.0.2</span>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`mono text-[9px] uppercase tracking-widest mb-2 block ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
                  {msg.role === 'user' ? 'GUEST@TERMINAL' : 'AMRUTHA_PROXY'}
                </span>
                <p className={`text-sm font-light leading-relaxed px-4 py-2 rounded-sm ${
                  msg.role === 'user' 
                    ? (isDarkMode ? 'bg-white/5 text-neutral-300' : 'bg-black/5 text-neutral-700') 
                    : (isDarkMode ? 'text-white border-l border-blue-500/50' : 'text-black border-l border-blue-600/50')
                }`}>
                  {msg.content}
                </p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 items-center px-4">
                <span className={`mono text-[10px] ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>PROCESSING</span>
                <div className={`w-1 h-1 animate-bounce ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-1 h-1 animate-bounce [animation-delay:0.2s] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-1 h-1 animate-bounce [animation-delay:0.4s] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
              </div>
            </div>
          )}
        </div>

        <div className={`p-4 border-t ${isDarkMode ? 'border-white/5 bg-[#080808]' : 'border-black/5 bg-neutral-50'}`}>
          <div className="flex gap-4">
            <span className={`mono text-xs py-2 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`}>&gt;</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my tech stack, projects, or education..."
              className="flex-1 bg-transparent border-b border-transparent mono text-xs py-2 focus:outline-none transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className={`mono text-[10px] tracking-widest px-6 py-2 border transition-all disabled:opacity-50 ${
                isDarkMode 
                  ? 'border-white/10 hover:bg-white hover:text-black' 
                  : 'border-black/10 hover:bg-black hover:text-white'
              }`}
            >
              EXEC
            </button>
          </div>
        </div>
      </div>
      
      <div className={`mt-8 flex justify-between mono text-[10px] uppercase tracking-widest ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
        <span>Port: 443</span>
        <span>Protocol: HTTPS/2</span>
        <span>Status: <span className="text-green-500">READY</span></span>
      </div>
    </div>
  );
};

export default DesignOracle;
