import React, { useState } from 'react';
import Section from './ui/Section';
import { Disc, Music, Bus, Heart, Flower, Sparkles } from 'lucide-react';

interface VibeBadgeProps {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
  glowColor: string;
}

const VibeBadge: React.FC<VibeBadgeProps> = ({ icon: Icon, label, description, color, glowColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center gap-2 cursor-help group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${color} flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110`}>
        <Icon className={`w-6 h-6 ${isHovered ? 'animate-bounce' : 'animate-pulse'}`} />
        <span className="font-retro uppercase tracking-widest text-sm md:text-base">
          {label}
        </span>
      </div>

      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 md:w-56 p-3 bg-groovy-bg/95 border-2 ${glowColor} rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 transition-all duration-300 pointer-events-none ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <p className="font-retro text-[10px] text-groovy-cream/50 uppercase tracking-tighter mb-1">Dicionário Groovy</p>
        <p className="font-sans text-xs text-groovy-cream leading-snug">
          {description}
        </p>
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-groovy-bg border-r-2 border-b-2 ${glowColor} rotate-45 -mt-[7px]`}></div>
      </div>
    </div>
  );
};

const ContextSection: React.FC = () => {
  return (
    <Section id="context" title="A Era Groovy" subtitle="Flower Power">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <p className="font-sans text-lg md:text-xl text-groovy-cream leading-relaxed">
            Vamos voltar para uma época onde os <span className="text-groovy-mustard border-b border-groovy-mustard/40 cursor-help hover:text-groovy-orange transition-colors" title="LPs e radiolas: discos de vinil que tocavam álbuns inteiros sem interrupção.">LPs giravam nas radiolas</span>, as cores eram quentes e as flores cresciam até nas roupas. Os anos 70 foram a era do <span className="text-groovy-orange border-b border-groovy-orange/40 cursor-help hover:text-groovy-mustard transition-colors" title="Woodstock: o festival que definiu uma geração.">Woodstock</span>, dos Beatles, dos Rolling Stones, das kombis pintadas e do espírito de paz e amor que mudou o mundo.
          </p>
          <p className="font-sans text-lg md:text-xl text-groovy-cream leading-relaxed">
            Então, prepare seus melhores looks groovy, solte os cabelos e venha viver uma noite cheia de boas vibrações, danças coloridas e muita liberdade.
          </p>

          <div className="flex gap-x-8 gap-y-6 pt-6 flex-wrap">
            <VibeBadge
              icon={Disc}
              label="Vinil"
              color="text-groovy-orange"
              glowColor="border-groovy-orange"
              description="Os LPs giravam nas radiolas tocando álbuns inteiros — o som mais quente que já existiu."
            />
            <VibeBadge
              icon={Music}
              label="Woodstock"
              color="text-groovy-mustard"
              glowColor="border-groovy-mustard"
              description="O festival de 1969 que reuniu meio milhão de pessoas e marcou a geração da paz e do amor."
            />
            <VibeBadge
              icon={Bus}
              label="Kombi"
              color="text-groovy-purple"
              glowColor="border-groovy-purple"
              description="A perua VW pintada com flores e arco-íris virou símbolo da liberdade hippie pelas estradas."
            />
            <VibeBadge
              icon={Heart}
              label="Paz & Amor"
              color="text-groovy-red"
              glowColor="border-groovy-red"
              description="Peace and Love: o lema de uma geração que acreditou que música e união podiam mudar tudo."
            />
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 border-4 border-groovy-mustard rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-8 border-4 border-groovy-orange rounded-full animate-ping opacity-15" style={{ animationDelay: '500ms' }}></div>

            {/* Sunburst behind */}
            <div className="absolute -inset-8 sunburst-bg rounded-full blur-md opacity-30 animate-spin-slower"></div>

            {/* Vinyl Record */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full vinyl-grooves shadow-[0_0_50px_rgba(255,107,53,0.3)] animate-spin-slow">
              {/* Center label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-groovy-mustard via-groovy-orange to-groovy-red flex items-center justify-center shadow-inner">
                <Flower className="text-groovy-bg w-8 h-8 md:w-10 md:h-10" />
              </div>
              {/* Center hole */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-groovy-bg"></div>
            </div>

            {/* Decorations */}
            <Sparkles className="absolute top-0 right-0 text-groovy-cream animate-pulse w-8 h-8" />
            <Flower className="absolute bottom-10 left-0 text-groovy-mustard animate-sway w-7 h-7" style={{ animationDelay: '700ms' }} />
            <Heart className="absolute -top-2 left-4 text-groovy-red animate-pulse w-6 h-6" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContextSection;
