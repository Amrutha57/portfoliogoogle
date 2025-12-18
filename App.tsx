
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Navigation from './components/Navigation';
import DesignOracle from './components/DesignOracle';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#f5f5f5] text-black'}`}>
      <Navigation scrolled={scrolled} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <div id="home">
          <Hero isDarkMode={isDarkMode} />
        </div>
        
        <section id="work" className={`py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className={`mono text-xs uppercase tracking-[0.3em] mb-2 block ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Technical Projects</span>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter">Code & Systems.</h2>
            </div>
            <div className="max-w-md text-right">
              <p className={`font-light leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Applying computational thinking to solve real-world problems. 
                Focusing on full-stack development and AI integration.
              </p>
            </div>
          </div>
          
          <PortfolioGrid isDarkMode={isDarkMode} />
        </section>

        <section id="about" className={`py-32 px-6 md:px-12 max-w-6xl mx-auto border-t scroll-mt-24 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="md:sticky md:top-32">
              <span className={`mono text-xs uppercase tracking-[0.3em] mb-6 block ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>Background</span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
                Computer Science student, problem solver, and quick learner.
              </h2>
              <div className="mt-12 space-y-8">
                <div>
                  <span className={`mono text-[10px] uppercase tracking-widest block mb-2 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>Education</span>
                  <div className={`border-l pl-4 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                    <h4 className="text-sm">Pragati Engineering College</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>B.S. in Computer Science (2023 - 2026)</p>
                    <p className="mono text-[10px] text-blue-500 mt-1">CGPA: 7.61</p>
                  </div>
                  <div className={`border-l pl-4 mt-4 ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                    <h4 className="text-sm">Andhra Polytechnic College</h4>
                    <p className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Diploma in Computer Engineering (2020 - 2023)</p>
                    <p className="mono text-[10px] text-blue-500 mt-1">PERCENTAGE: 84.9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`space-y-8 font-light leading-relaxed pt-4 md:pt-12 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              <p className="text-lg">
                I am K. Amrutha Lakshmi. I thrive in dynamic environments where technology evolves rapidly. 
                My expertise lies in Python and SQL, with a deep interest in building AI-powered interfaces.
              </p>
              
              <div className={`grid grid-cols-2 gap-8 py-8 border-y ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
                <div>
                  <span className={`mono text-[10px] block mb-2 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>LANGUAGES</span>
                  <p className={`text-xs ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>Python, JS, Java, HTML, CSS</p>
                </div>
                <div>
                  <span className={`mono text-[10px] block mb-2 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>DATABASE</span>
                  <p className={`text-xs ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>SQL, MongoDB</p>
                </div>
                <div>
                  <span className={`mono text-[10px] block mb-2 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>FRAMEWORKS</span>
                  <p className={`text-xs ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>React, Next.js, Git/GitHub</p>
                </div>
                <div>
                  <span className={`mono text-[10px] block mb-2 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>CONCEPTS</span>
                  <p className={`text-xs ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>Data Structures, Networks, OS, OOPS</p>
                </div>
              </div>

              <div className="pt-4">
                <span className={`mono text-[10px] uppercase tracking-widest block mb-4 ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>Certifications</span>
                <ul className={`space-y-3 mono text-[10px] uppercase ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  <li className="flex gap-2"><span>[+]</span> ServiceNow: Certified Application Developer</li>
                  <li className="flex gap-2"><span>[+]</span> ServiceNow: Certified System Administrator</li>
                  <li className="flex gap-2"><span>[+]</span> Coursera: Problem Solving (Computational Thinking)</li>
                  <li className="flex gap-2"><span>[+]</span> Nptel: Cloud Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="oracle" className={`py-32 border-y scroll-mt-24 transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0a0a] border-white/5' : 'bg-white border-black/5'}`}>
          <DesignOracle isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
      <FloatingChatbot isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
