import React, { useState } from 'react';
import { Disc, Music, Bus, Heart, Flower, Sun } from 'lucide-react';

interface VibeBadgeProps {
  icon: React.ElementType;
  label: string;
  description: string;
  bg: string;
  rotate: string;
}

const VibeBadge: React.FC<VibeBadgeProps> = ({ icon: Icon, label, description, bg, rotate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-help ${rotate} sticker-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${bg} flex items-center gap-2 px-4 py-2 rounded-full border-4 border-groovy-brown transition-transform duration-300 hover:scale-105`}>
        <Icon className="w-5 h-5 text-groovy-brown" strokeWidth={2.5} />
        <span className="font-groovy uppercase tracking-widest text-sm md:text-base text-groovy-brown">
          {label}
        </span>
      </div>

      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 md:w-56 p-3 bg-groovy-cream border-4 border-groovy-brown rounded-xl shadow-[3px_3px_0_#3A1F0F] z-20 transition-all duration-300 pointer-events-none ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <p className="font-groovy text-[10px] text-groovy-pink uppercase tracking-tighter mb-1">Dicionário Groovy</p>
        <p className="font-sans text-xs text-groovy-brown leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

const ContextSection: React.FC = () => {
  return (
    <section id="context" className="relative py-20 md:py-28 px-4 overflow-hidden daisy-orange">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-groovy text-5xl md:text-7xl text-3d-cream uppercase tracking-wider mb-2 inline-block">
            A Era Groovy
          </h2>
          <p className="font-cursive text-3xl md:text-5xl text-3d-yellow transform -rotate-2 mt-2 sticker-sm inline-block">
            Flower Power
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-5">
            <div className="bg-groovy-cream border-4 border-groovy-brown rounded-2xl p-6 md:p-8 sticker -rotate-1">
              <p className="font-sans text-lg text-groovy-brown leading-relaxed mb-4">
                Vamos voltar para uma época onde os <span className="font-bold text-groovy-pink">LPs giravam nas radiolas</span>, as cores eram quentes e as flores cresciam até nas roupas. Os anos 70 foram a era do <span className="font-bold text-groovy-red">Woodstock</span>, dos Beatles, dos Rolling Stones, das kombis pintadas e do espírito de paz e amor que mudou o mundo.
              </p>
              <p className="font-sans text-lg text-groovy-brown leading-relaxed">
                Então, prepare seus melhores looks groovy, solte os cabelos e venha viver uma noite cheia de boas vibrações, danças coloridas e muita liberdade.
              </p>
            </div>

            <div className="flex gap-3 gap-y-4 pt-2 flex-wrap justify-center md:justify-start">
              <VibeBadge icon={Disc} label="Vinil" bg="bg-groovy-yellow" rotate="-rotate-2"
                description="Os LPs giravam nas radiolas tocando álbuns inteiros — o som mais quente que já existiu." />
              <VibeBadge icon={Music} label="Woodstock" bg="bg-groovy-pink" rotate="rotate-2"
                description="O festival de 1969 que reuniu meio milhão de pessoas e marcou a geração da paz e do amor." />
              <VibeBadge icon={Bus} label="Kombi" bg="bg-groovy-turquoise" rotate="-rotate-1"
                description="A perua VW pintada com flores e arco-íris virou símbolo da liberdade hippie pelas estradas." />
              <VibeBadge icon={Heart} label="Paz & Amor" bg="bg-groovy-cream" rotate="rotate-1"
                description="Peace and Love: o lema de uma geração que acreditou que música e união podiam mudar tudo." />
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center sticker">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-4 border-dashed border-groovy-brown opacity-30 animate-spin-slower"></div>

              {/* Vinyl Record */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full vinyl-grooves border-4 border-groovy-brown animate-spin-slow">
                {/* Center label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-groovy-red border-4 border-groovy-brown flex items-center justify-center">
                  <Flower className="text-groovy-cream w-8 h-8 md:w-10 md:h-10" fill="#FBE9C9" strokeWidth={2.5} />
                </div>
                {/* Center hole */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-groovy-brown"></div>
              </div>

              {/* Floating sticker decorations */}
              <Sun className="absolute -top-4 -right-2 text-groovy-yellow w-14 h-14 sticker rotate-12" fill="#FFC72C" strokeWidth={2.5} />
              <Heart className="absolute bottom-2 -left-4 text-groovy-pink w-10 h-10 sticker -rotate-12" fill="#E84A8D" strokeWidth={2.5} />
              <Flower className="absolute top-2 -left-8 text-groovy-cream w-9 h-9 sticker rotate-6" fill="#FBE9C9" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
