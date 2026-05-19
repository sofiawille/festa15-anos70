import React from 'react';
import Countdown from './Countdown';
import { Sun, Flower, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Sunburst rays behind the title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-25 pointer-events-none">
        <div className="absolute inset-0 sunburst-bg rounded-full blur-sm animate-spin-slower"></div>
      </div>

      {/* Decorative flowers */}
      <Flower className="absolute top-24 left-8 md:left-20 text-groovy-mustard w-10 h-10 md:w-16 md:h-16 opacity-70 animate-sway" />
      <Flower className="absolute top-32 right-10 md:right-24 text-groovy-purple w-8 h-8 md:w-12 md:h-12 opacity-60 animate-sway" style={{ animationDelay: '1s' }} />
      <Heart className="absolute bottom-32 left-12 md:left-32 text-groovy-red w-7 h-7 md:w-10 md:h-10 opacity-50 animate-pulse" />
      <Sun className="absolute bottom-40 right-8 md:right-28 text-groovy-mustard w-9 h-9 md:w-14 md:h-14 opacity-60 animate-spin-slow" />

      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-groovy-orange/20 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-retro text-groovy-mustard text-sm md:text-xl mb-6 tracking-[0.3em] uppercase animate-pulse">
          Vibrações dos
        </h2>

        <div className="relative inline-block">
          <h1 className="font-groovy text-5xl md:text-8xl lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-b from-groovy-mustard via-groovy-orange to-groovy-red drop-shadow-[0_0_25px_rgba(255,107,53,0.6)] leading-none uppercase">
            Anos 70
          </h1>
        </div>

        <h3 className="font-cursive text-5xl md:text-7xl text-groovy-purple -mt-2 md:-mt-4 mb-8 transform -rotate-3 drop-shadow-[0_0_8px_rgba(106,76,147,0.6)]">
          Sofia 15 anos
        </h3>

        <p className="font-sans text-groovy-cream text-lg md:text-xl max-w-lg mx-auto mb-8">
          Bem-vindo à era da paz, do amor e do groove! Pega sua kombi e vem celebrar uma noite colorida, mágica e cheia de boas vibrações.
        </p>

        <Countdown />

        <div className="mt-12 mb-6 md:mb-10">
          <a
            href="https://wa.me/5541999756896"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-groovy-orange blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-full animate-pulse"></div>

            <div className="relative bg-groovy-bg text-groovy-orange border-2 border-groovy-orange font-retro font-bold py-4 px-10 rounded-full
              group-hover:bg-groovy-orange group-hover:text-groovy-bg transition-all duration-500 uppercase tracking-[0.2em] text-sm md:text-base
              shadow-glow-orange transform group-hover:scale-105 active:scale-95">
              CONFIRMAR PRESENÇA
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
