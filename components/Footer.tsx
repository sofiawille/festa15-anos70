import React from 'react';
import { Heart, Flower, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-groovy-brown pt-16 pb-10 text-center relative z-10 overflow-hidden">
      {/* Top rainbow stripes */}
      <div className="absolute top-0 left-0 w-full flex flex-col">
        <div className="h-2 w-full bg-groovy-pink"></div>
        <div className="h-2 w-full bg-groovy-red"></div>
        <div className="h-2 w-full bg-groovy-mustard"></div>
        <div className="h-2 w-full bg-groovy-yellow"></div>
        <div className="h-2 w-full bg-groovy-turquoise"></div>
        <div className="h-2 w-full bg-groovy-purple"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8">
        <div className="flex flex-col items-center gap-6">
          {/* Decorative stickers around the name */}
          <div className="flex items-center justify-center gap-6 mb-2">
            <Sun className="text-groovy-yellow w-10 h-10 sticker -rotate-12" fill="#FFC72C" strokeWidth={2.5} />
            <Flower className="text-groovy-pink w-10 h-10 sticker rotate-6" fill="#E84A8D" strokeWidth={2.5} />
            <Heart className="text-groovy-red w-10 h-10 sticker -rotate-6" fill="#D7263D" strokeWidth={2.5} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <h2 className="font-groovy text-5xl md:text-7xl text-3d-cream tracking-tighter">
              SOFIA
            </h2>

            <div className="hidden md:block w-1 h-16 rainbow-swoosh"></div>

            <div className="flex flex-col items-center md:items-start">
              <span className="font-groovy text-3xl md:text-5xl text-3d-yellow">
                2026
              </span>
              <span className="font-retro text-[10px] text-groovy-cream uppercase tracking-[0.5em] mt-2">
                The Flower Power Era
              </span>
            </div>
          </div>

          <h3 className="font-lobster text-2xl md:text-3xl text-groovy-yellow mt-4">
            Peace, Love & Music
          </h3>

          <div className="space-y-2 mt-6">
            <p className="font-sans text-xs text-groovy-cream/60 uppercase tracking-[0.3em] font-bold">
              © 2026 Sofia Wille • 15 Anos
            </p>
            <div className="flex items-center justify-center gap-2 opacity-50">
              <div className="w-2 h-2 rounded-full bg-groovy-pink"></div>
              <div className="w-2 h-2 rounded-full bg-groovy-yellow"></div>
              <div className="w-2 h-2 rounded-full bg-groovy-turquoise"></div>
              <div className="w-2 h-2 rounded-full bg-groovy-purple"></div>
            </div>
            <p className="font-sans text-[10px] text-groovy-cream/40 uppercase tracking-widest">
              Design Groovy • Curitiba - PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
