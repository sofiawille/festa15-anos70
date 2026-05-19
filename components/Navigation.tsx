import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Flower } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'A Festa', href: '#party' },
  { label: 'Década de 70', href: '#context' },
  { label: 'Fantasias', href: '#costumes' },
  { label: 'Música', href: '#playlist' },
  { label: 'Presentes', href: '#wishlist' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    audioRef.current = new Audio('https://www.myinstants.com/media/sounds/stayin-alive.mp3');
    audioRef.current.volume = 0.5;

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        console.log("O áudio requer uma interação prévia do usuário em alguns navegadores.");
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-groovy-bg/90 backdrop-blur-md border-b border-groovy-mustard/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
            <div className="relative">
              <Flower className="w-7 h-7 md:w-9 md:h-9 text-groovy-mustard animate-spin-slower group-hover:text-groovy-orange transition-colors" />
              <div className="absolute inset-0 bg-groovy-mustard opacity-40 blur-lg rounded-full animate-pulse group-hover:bg-groovy-orange"></div>
            </div>
            <span className="font-groovy text-lg md:text-2xl tracking-widest whitespace-nowrap transition-colors">
              <span className="text-groovy-mustard group-hover:text-groovy-cream transition-colors">SOFIA</span>
              <span className="text-groovy-orange group-hover:text-groovy-mustard transition-colors">15</span>
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="flex items-center gap-3 lg:gap-6 flex-nowrap">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-retro text-[10px] lg:text-sm text-groovy-cream hover:text-groovy-mustard transition-colors duration-200 uppercase tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5541999756896"
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-3 lg:px-6 py-2 border-2 border-groovy-orange text-groovy-orange font-retro text-[10px] lg:text-xs rounded-full hover:bg-groovy-orange hover:text-groovy-bg transition-all font-bold whitespace-nowrap shadow-[0_0_10px_rgba(255,107,53,0.3)] hover:shadow-glow-orange"
              >
                CONFIRMAR
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-groovy-cream hover:text-groovy-mustard focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-groovy-bg border-b border-groovy-orange/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-retro text-groovy-cream hover:text-groovy-mustard hover:bg-groovy-orange/10 border-l-4 border-transparent hover:border-groovy-mustard transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5541999756896"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-center mt-4 bg-groovy-orange text-groovy-bg font-bold border border-groovy-orange rounded-full font-retro uppercase"
            >
              CONFIRMAR PRESENÇA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
