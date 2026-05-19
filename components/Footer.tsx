import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-groovy-bg pt-20 pb-12 text-center relative z-10 overflow-hidden border-t border-groovy-mustard/10">
      {/* Top Stripes — Groovy 70s edition */}
      <div className="absolute top-0 left-0 w-full flex flex-col">
        <div className="h-2 w-full bg-groovy-orange shadow-[0_0_15px_rgba(255,107,53,0.5)]"></div>
        <div className="h-2 w-full bg-groovy-mustard shadow-[0_0_15px_rgba(255,182,39,0.5)]"></div>
        <div className="h-2 w-full bg-groovy-red shadow-[0_0_15px_rgba(215,38,61,0.5)]"></div>
        <div className="h-2 w-full bg-groovy-purple shadow-[0_0_15px_rgba(106,76,147,0.5)]"></div>
      </div>

      {/* Background sunburst rays */}
      <div className="absolute inset-0 opacity-5 pointer-events-none sunburst-bg animate-spin-slower"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-8">
            <h2 className="font-groovy text-6xl md:text-8xl text-groovy-cream drop-shadow-[0_0_20px_rgba(244,228,193,0.3)] tracking-tighter">
              SOFIA
            </h2>

            <div className="hidden md:block h-20 w-1 bg-gradient-to-b from-groovy-orange via-groovy-mustard to-groovy-purple rounded-full opacity-60"></div>

            <div className="flex flex-col items-center md:items-start">
              <span className="font-retro text-4xl md:text-5xl text-groovy-mustard tracking-[0.2em] drop-shadow-[0_0_10px_#FFB627]">
                2026
              </span>
              <span className="font-retro text-[10px] text-groovy-orange uppercase tracking-[0.5em] mt-1">
                The Flower Power Era
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-10 w-full max-w-xs">
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-groovy-orange to-transparent"></div>
            <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-groovy-purple to-transparent"></div>
          </div>

          <h3 className="font-groovy text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-groovy-orange via-groovy-mustard to-groovy-red opacity-70 mb-8 uppercase tracking-widest">
            70's Groovy Party
          </h3>

          <div className="space-y-3">
            <p className="font-sans text-xs text-groovy-cream/40 uppercase tracking-[0.3em] font-bold">
              © 2026 Sofia Wille • 15 Anos
            </p>
            <div className="flex items-center justify-center gap-2 opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-groovy-orange"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-groovy-mustard"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-groovy-red"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-groovy-purple"></div>
            </div>
            <p className="font-sans text-[10px] text-groovy-cream/20 uppercase tracking-widest">
              Design Groovy • Curitiba - PR
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-groovy-orange/10 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 border-4 border-groovy-purple/10 rounded-full animate-spin-slow"></div>
    </footer>
  );
};

export default Footer;
