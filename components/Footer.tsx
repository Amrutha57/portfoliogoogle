
import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer id="contact" className={`py-24 px-6 md:px-12 border-t transition-colors duration-700 ${isDarkMode ? 'border-white/5 bg-[#050505]' : 'border-black/5 bg-[#fafafa]'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-md">
          <h2 className="text-5xl font-extralight tracking-tighter mb-8">Initiate collaboration.</h2>
          <p className={`font-light leading-relaxed mb-8 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-600'}`}>
            Available for software engineering roles, full-stack development, and AI research opportunities. 
            Open for remote and on-site collaborations.
          </p>
          <a 
            href="mailto:amruthalaxmikola@gmail.com" 
            className={`text-xl font-light underline underline-offset-8 transition-colors ${isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-800'}`}
          >
            amruthalaxmikola@gmail.com
          </a>
          <p className={`mono text-xs mt-4 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>+91 8374522878</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <span className={`mono text-[10px] block mb-6 tracking-widest uppercase ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>Nodes</span>
            <ul className="space-y-4 mono text-xs">
              <li><a href="https://linkedin.com" target="_blank" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>GitHub</a></li>
              <li><a href="https://leetcode.com" target="_blank" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>LeetCode</a></li>
            </ul>
          </div>
          
          <div>
            <span className={`mono text-[10px] block mb-6 tracking-widest uppercase ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>Archive</span>
            <ul className="space-y-4 mono text-xs">
              <li><a href="#work" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Projects</a></li>
              <li><a href="#oracle" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Technical Proxy</a></li>
              <li><a href="#about" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Education</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
             <span className={`mono text-[10px] block mb-6 tracking-widest uppercase ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>Base</span>
             <p className={`mono text-[10px] leading-loose ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                KAKINADA, ANDHRA PRADESH<br/>
                INDIA, IN<br/>
                UTC+5:30
             </p>
          </div>
        </div>
      </div>
      
      <div className={`max-w-7xl mx-auto mt-24 pt-8 border-t flex justify-between items-center ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
        <span className={`mono text-[9px] ${isDarkMode ? 'text-neutral-700' : 'text-neutral-500'}`}>© 2024 AMRUTHA LAKSHMI. ENCODED IN REACT.</span>
        <div className="flex gap-4">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <span className={`mono text-[9px] ${isDarkMode ? 'text-neutral-700' : 'text-neutral-500'}`}>LATENT_STABLE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
