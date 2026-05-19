import React from 'react';
import Countdown from './Countdown';
import { Sun, Flower, Heart, Disc, Bus, Camera, Music, Star, Sparkles } from 'lucide-react';

// 70s Custom SVG Stickers — peace, disco ball, smiley, mushroom, rainbow
const PeaceSign: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#FBE9C9' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" className={className}>
    <circle cx="12" cy="12" r="10" fill="#3A1F0F" />
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="12" y1="12" x2="4.93" y2="19.07" />
    <line x1="12" y1="12" x2="19.07" y2="19.07" />
  </svg>
);

const DiscoBall: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <pattern id="db-tiles" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
        <rect width="3" height="3" fill="#5BC2C9" />
        <rect width="1.5" height="1.5" fill="#FBE9C9" opacity="0.6" />
        <rect x="1.5" y="1.5" width="1.5" height="1.5" fill="#1F100A" opacity="0.3" />
      </pattern>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#db-tiles)" stroke="#3A1F0F" strokeWidth={2} />
    <ellipse cx="9" cy="9" rx="2.5" ry="1.5" fill="#FBE9C9" opacity="0.5" />
  </svg>
);

const Smiley: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#FFC72C' }) => (
  <svg viewBox="0 0 24 24" fill={color} stroke="#3A1F0F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="9" cy="9.5" r="1.2" fill="#3A1F0F" stroke="none" />
    <circle cx="15" cy="9.5" r="1.2" fill="#3A1F0F" stroke="none" />
    <path d="M8 14 Q12 18 16 14" fill="none" />
  </svg>
);

const Mushroom: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#3A1F0F" strokeWidth={2} strokeLinejoin="round" className={className}>
    <path d="M2.5 12.5 Q2.5 3 12 3 Q21.5 3 21.5 12.5 L2.5 12.5 Z" fill="#D7263D" />
    <circle cx="7.5" cy="8" r="1.5" fill="#FBE9C9" stroke="none" />
    <circle cx="14" cy="10" r="1.1" fill="#FBE9C9" stroke="none" />
    <circle cx="11" cy="6" r="0.9" fill="#FBE9C9" stroke="none" />
    <rect x="9" y="12.5" width="6" height="8" rx="1.5" fill="#FBE9C9" />
  </svg>
);

const Rainbow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 32 18" fill="none" strokeWidth={2.5} strokeLinecap="round" className={className}>
    <path d="M2 17 A14 14 0 0 1 30 17" stroke="#E84A8D" />
    <path d="M4.5 17 A11.5 11.5 0 0 1 27.5 17" stroke="#D7263D" />
    <path d="M7 17 A9 9 0 0 1 25 17" stroke="#F4A700" />
    <path d="M9.5 17 A6.5 6.5 0 0 1 22.5 17" stroke="#FFC72C" />
    <path d="M12 17 A4 4 0 0 1 20 17" stroke="#5BC2C9" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-groovy-brown">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none noise-overlay"></div>

      {/* HIPPIE STICKERS — top half */}
      <Sun className="absolute top-24 left-3 sm:left-6 md:left-12 text-groovy-yellow w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 sticker -rotate-12" fill="#FFC72C" strokeWidth={2.5} />
      <PeaceSign className="absolute top-28 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 sticker rotate-12" color="#FBE9C9" />
      <Flower className="absolute top-20 right-1/4 text-groovy-pink w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 sticker rotate-12" fill="#E84A8D" strokeWidth={2.5} />
      <DiscoBall className="absolute top-24 right-3 sm:right-6 md:right-12 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 sticker rotate-6" />

      {/* MID rows */}
      <Smiley className="absolute top-1/3 left-2 sm:left-4 md:left-8 w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 sticker rotate-6" />
      <Mushroom className="absolute top-1/3 right-2 sm:right-4 md:right-8 w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 sticker -rotate-6" />
      <Star className="absolute top-[42%] left-8 sm:left-16 md:left-24 text-groovy-pink w-7 h-7 md:w-9 md:h-9 sticker-sm rotate-12" fill="#E84A8D" strokeWidth={2.5} />
      <Star className="absolute top-[42%] right-8 sm:right-16 md:right-24 text-groovy-yellow w-6 h-6 md:w-8 md:h-8 sticker-sm -rotate-12" fill="#FFC72C" strokeWidth={2.5} />

      {/* LOWER rows */}
      <Heart className="absolute bottom-44 left-4 sm:left-8 md:left-16 text-groovy-red w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 sticker -rotate-6" fill="#D7263D" strokeWidth={2.5} />
      <Music className="absolute bottom-44 right-4 sm:right-8 md:right-16 text-groovy-turquoise w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 sticker rotate-12" fill="#5BC2C9" strokeWidth={2.5} />

      {/* BOTTOM row — disco + hippie iconic */}
      <Disc className="absolute bottom-32 left-6 sm:left-10 md:left-20 text-groovy-cream w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 sticker rotate-6" fill="#FBE9C9" strokeWidth={2} />
      <Camera className="absolute bottom-28 left-1/3 text-groovy-yellow w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 sticker -rotate-12" fill="#FFC72C" strokeWidth={2.5} />
      <Rainbow className="absolute bottom-32 right-1/4 w-14 h-8 sm:w-16 sm:h-9 md:w-24 md:h-12 sticker rotate-3" />
      <Bus className="absolute bottom-24 right-4 sm:right-8 md:right-20 text-groovy-turquoise w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 sticker -rotate-3" fill="#5BC2C9" strokeWidth={2} />
      <Sparkles className="absolute bottom-36 left-1/2 -translate-x-1/2 text-groovy-yellow w-5 h-5 md:w-6 md:h-6 sticker-sm" fill="#FFC72C" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Top label pill */}
        <div className="inline-block mb-3 px-5 py-1.5 bg-groovy-cream border-4 border-groovy-brown rounded-full sticker-sm -rotate-2">
          <h2 className="font-lobster text-groovy-brown text-lg md:text-xl tracking-wide">
            Vibrações dos
          </h2>
        </div>

        {/* ANOS 70 — smaller now (label-like) */}
        <h1 className="font-groovy text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-3d-on-brown uppercase tracking-wide mb-2 leading-tight">
          Anos 70
        </h1>

        {/* Sofia 15 anos — HUGE (the star) */}
        <div className="inline-block sticker rotate-[-3deg] my-3 md:my-6 max-w-full">
          <h3 className="font-cursive text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] text-cursive-on-brown leading-[0.95] px-2 break-words">
            Sofia 15 anos
          </h3>
        </div>

        <p className="font-sans text-groovy-cream text-base md:text-lg max-w-xl mx-auto mb-8 font-bold mt-4 bg-groovy-brownDeep/60 backdrop-blur-sm px-5 py-3 rounded-2xl border-2 border-groovy-cream/20">
          Bem-vindo à era da paz, do amor e do groove! Pega sua kombi e vem celebrar uma noite colorida, mágica e cheia de boas vibrações.
        </p>

        <Countdown />

        <div className="mt-10">
          <a
            href="https://wa.me/5541999756896"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-transform"
          >
            <div className="bg-groovy-yellow text-groovy-brown border-4 border-groovy-brown font-groovy py-4 px-8 sm:px-10 rounded-full uppercase tracking-[0.15em] text-sm sm:text-base md:text-lg">
              CONFIRMAR PRESENÇA
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
