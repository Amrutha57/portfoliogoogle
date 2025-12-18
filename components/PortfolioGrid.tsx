
import React from 'react';
import { PROJECTS } from '../constants';

interface GridProps {
  isDarkMode: boolean;
}

const PortfolioGrid: React.FC<GridProps> = ({ isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      {PROJECTS.map((project, idx) => (
        <div 
          key={project.id} 
          className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
        >
          <div className={`relative aspect-[3/4] overflow-hidden border mb-6 transition-colors duration-700 ${
            isDarkMode ? 'bg-neutral-900 border-white/5' : 'bg-neutral-100 border-black/5'
          }`}>
            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
            </div>
            
            <div className={`absolute inset-0 pointer-events-none transition-opacity ${isDarkMode ? 'opacity-20 group-hover:opacity-40' : 'opacity-10 group-hover:opacity-20'}`}>
                <div className="h-full w-full" style={{ backgroundImage: `linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px), linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className={`mono text-[10px] px-2 py-1 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>VIEW_ANALYSIS</span>
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className={`mono text-[10px] ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>{project.id} /</span>
                <h3 className="text-xl font-light tracking-tight">{project.title}</h3>
              </div>
              <p className={`text-sm font-light ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>{project.category}</p>
            </div>
            <span className={`mono text-xs ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
