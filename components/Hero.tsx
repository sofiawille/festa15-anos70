import React from 'react';
import Countdown from './Countdown';
import { Sun, Flower, Heart, Disc, Bus, Camera } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden daisy-orange">
      {/* Decorative stickers — static, scattered like a scrapbook */}
      <Sun className="absolute top-24 left-6 md:left-16 text-groovy-yellow w-12 h-12 md:w-20 md:h-20 sticker -rotate-12" fill="#FFC72C" strokeWidth={2.5} />
      <Flower className="absolute top-28 right-8 md:right-20 text-groovy-pink w-10 h-10 md:w-16 md:h-16 sticker rotate-12" fill="#E84A8D" strokeWidth={2.5} />
      <Heart className="absolute top-1/2 left-4 md:left-12 text-groovy-red w-8 h-8 md:w-12 md:h-12 sticker -rotate-6" fill="#D7263D" strokeWidth={2.5} />
      <Disc className="absolute bottom-32 right-6 md:right-16 text-groovy-brown w-10 h-10 md:w-16 md:h-16 sticker rotate-6" fill="#3A1F0F" strokeWidth={2} />
      <Bus className="absolute bottom-24 left-8 md:left-24 text-groovy-turquoise w-12 h-12 md:w-20 md:h-20 sticker -rotate-3" fill="#5BC2C9" strokeWidth={2} />
      <Camera className="absolute top-1/3 right-4 md:right-10 text-groovy-cream w-9 h-9 md:w-14 md:h-14 sticker rotate-12" fill="#FBE9C9" strokeWidth={2.5} />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Top label "made in the..." style */}
        <div className="inline-block mb-6 px-6 py-2 bg-groovy-cream border-4 border-groovy-brown rounded-full sticker-sm -rotate-2">
          <h2 className="font-lobster text-groovy-brown text-xl md:text-2xl tracking-wide">
            Vibrações dos
          </h2>
        </div>

        {/* Main 3D layered title — like "Made in the 70's" */}
        <h1 className="font-groovy text-6xl md:text-9xl lg:text-[10rem] text-3d-cream leading-none uppercase mb-2">
          Anos 70
        </h1>

        {/* "Sofia 15 anos" cursive — rotated sticker */}
        <div className="inline-block mt-4 mb-8 sticker -rotate-3">
          <h3 className="font-cursive text-5xl md:text-7xl text-3d-pink leading-none">
            Sofia 15 anos
          </h3>
        </div>

        <p className="font-sans text-groovy-cream text-lg md:text-xl max-w-xl mx-auto mb-10 font-bold bg-groovy-brown/40 backdrop-blur-sm px-6 py-3 rounded-2xl">
          Bem-vindo à era da paz, do amor e do groove! Pega sua kombi e vem celebrar uma noite colorida, mágica e cheia de boas vibrações.
        </p>

        <Countdown />

        <div className="mt-12">
          <a
            href="https://wa.me/5541999756896"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-transform"
          >
            <div className="bg-groovy-yellow text-groovy-brown border-4 border-groovy-brown font-groovy py-4 px-10 rounded-full uppercase tracking-[0.15em] text-base md:text-lg">
              CONFIRMAR PRESENÇA
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
