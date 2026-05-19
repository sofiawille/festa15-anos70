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
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-groovy-brown/95 backdrop-blur-md border-b-4 border-groovy-yellow ${scrolled ? 'shadow-lg shadow-groovy-brownDeep/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
            <div className="relative">
              <Flower className="w-8 h-8 md:w-10 md:h-10 text-groovy-pink animate-spin-slower group-hover:text-groovy-yellow transition-colors sticker-sm" fill="#E84A8D" strokeWidth={2.5} />
            </div>
            <span className="font-groovy text-lg md:text-2xl tracking-widest whitespace-nowrap">
              <span className="text-groovy-cream group-hover:text-groovy-yellow transition-colors">SOFIA</span>
              <span className="text-groovy-yellow group-hover:text-groovy-pink transition-colors">15</span>
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center">
            <div className="flex items-center gap-3 lg:gap-6 flex-nowrap">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-retro text-[10px] lg:text-sm text-groovy-cream hover:text-groovy-yellow transition-colors duration-200 uppercase tracking-wide whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5541999756896"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 lg:px-6 py-2 bg-groovy-yellow text-groovy-brown border-4 border-groovy-brown font-groovy text-[10px] lg:text-xs rounded-full hover:bg-groovy-pink hover:text-groovy-cream transition-all font-bold whitespace-nowrap sticker-sm"
              >
                CONFIRMAR
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-groovy-cream hover:text-groovy-yellow"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-groovy-brown border-b-4 border-groovy-yellow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-retro text-groovy-cream hover:text-groovy-yellow hover:bg-groovy-brownDeep/50 border-l-4 border-transparent hover:border-groovy-yellow transition-all uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5541999756896"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-center mt-4 bg-groovy-yellow text-groovy-brown font-bold border-4 border-groovy-brown rounded-full font-groovy uppercase"
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
