
import React from 'react';
import { LogoIcon } from '../constants';

interface NavProps {
  scrolled: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavProps> = ({ scrolled, isDarkMode, toggleTheme }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = scrolled ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? (isDarkMode ? 'py-4 bg-black/90 border-white/5' : 'py-4 bg-white/90 border-black/5 shadow-sm') 
        : 'py-8 bg-transparent border-transparent'
    } backdrop-blur-xl border-b`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={scrollToTop}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <LogoIcon isDarkMode={isDarkMode} />
          <div className="overflow-hidden relative h-4 flex flex-col">
            <span className="mono text-[10px] tracking-widest block transition-transform duration-500 group-hover:-translate-y-full whitespace-nowrap uppercase">Amrutha Lakshmi</span>
            <span className="mono text-[10px] tracking-widest block absolute transition-transform duration-500 translate-y-full group-hover:translate-y-0 top-0 left-0 whitespace-nowrap uppercase">Portfolio</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-12">
          {['WORK', 'ABOUT', 'ORACLE', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className={`mono text-[10px] tracking-[0.3em] transition-colors relative group ${
                isDarkMode ? 'text-neutral-500 hover:text-white' : 'text-neutral-400 hover:text-black'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all group-hover:w-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}></span>
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className={`mono text-[10px] p-2 transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>
              ) : (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06a.752.752 0 0 1 .876.218z"/></svg>
              )}
            </button>
            <button 
              onClick={() => alert("Initializing CV data stream...")}
              className={`mono text-[10px] border px-4 py-2 transition-all active:scale-95 ${
                isDarkMode 
                  ? 'border-white/10 hover:bg-white hover:text-black' 
                  : 'border-black/10 hover:bg-black hover:text-white'
              }`}
            >
                RESUME.PDF
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
