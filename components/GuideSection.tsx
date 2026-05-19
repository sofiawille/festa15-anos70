import React from 'react';
import NeonButton from './ui/NeonButton';
import { Flower, Disc, Music, Heart, Sparkles, Sun, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CostumeProps {
  label: string;
  tag: string;
  icon: LucideIcon;
  bg: string;
  iconColor: string;
  rotate: string;
}

const CostumeCard: React.FC<CostumeProps> = ({ label, tag, icon: Icon, bg, iconColor, rotate }) => (
  <div className={`group relative ${rotate} sticker hover:rotate-0 transition-transform duration-500`}>
    <div className={`rounded-2xl overflow-hidden border-4 border-groovy-brown ${bg}`}>
      <div className="aspect-[3/4] relative overflow-hidden flex flex-col items-center justify-center p-5">
        {/* Decorative daisy in corner */}
        <Flower className="absolute top-2 left-2 w-5 h-5 text-groovy-brown/40" strokeWidth={2.5} />
        <Sparkles className="absolute bottom-2 right-2 w-5 h-5 text-groovy-brown/40" strokeWidth={2.5} />

        {/* Center icon — big */}
        <div className="relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-500">
          <Icon className={`w-20 h-20 md:w-24 md:h-24 ${iconColor}`} strokeWidth={2} />
        </div>

        {/* Label */}
        <div className="relative z-10 text-center px-2">
          <h4 className="font-groovy text-base md:text-xl text-groovy-brown uppercase tracking-wide mb-1 leading-tight">
            {label}
          </h4>
          <p className="font-sans text-[10px] md:text-xs text-groovy-brown/80 uppercase tracking-widest font-bold">
            {tag}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const GuideSection: React.FC = () => {
  const girlsCostumes: CostumeProps[] = [
    { label: 'Flower Power', tag: 'Boho & Margaridas', icon: Flower, bg: 'bg-groovy-pink', iconColor: 'text-groovy-cream', rotate: '-rotate-2' },
    { label: 'Disco Diva', tag: 'Brilho & Plataforma', icon: Disc, bg: 'bg-groovy-yellow', iconColor: 'text-groovy-brown', rotate: 'rotate-1' },
    { label: 'Boho Chic', tag: 'Franjas & Boca-de-Sino', icon: Heart, bg: 'bg-groovy-turquoise', iconColor: 'text-groovy-brown', rotate: '-rotate-1' },
    { label: 'Glam Rock', tag: 'Glitter & Atitude', icon: Star, bg: 'bg-groovy-purple', iconColor: 'text-groovy-cream', rotate: 'rotate-2' },
  ];

  const boysCostumes: CostumeProps[] = [
    { label: 'Hippie Cool', tag: 'Camisa estampada & óculos', icon: Sun, bg: 'bg-groovy-mustard', iconColor: 'text-groovy-brown', rotate: '-rotate-2' },
    { label: 'Disco King', tag: 'Gola de pico & Plataforma', icon: Disc, bg: 'bg-groovy-red', iconColor: 'text-groovy-cream', rotate: 'rotate-2' },
    { label: 'Rock Vibes', tag: 'Jeans & Cabelo solto', icon: Music, bg: 'bg-groovy-cream', iconColor: 'text-groovy-brown', rotate: '-rotate-1' },
    { label: 'Saturday Night', tag: 'Terno branco estilo Travolta', icon: Sparkles, bg: 'bg-groovy-turquoise', iconColor: 'text-groovy-brown', rotate: 'rotate-1' },
  ];

  return (
    <section id="costumes" className="relative py-20 md:py-28 px-4 overflow-hidden daisy-cream">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-groovy text-5xl md:text-7xl text-3d-pink uppercase tracking-wider mb-2 inline-block">
            Fantasias
          </h2>
          <p className="font-cursive text-3xl md:text-5xl text-3d-yellow transform -rotate-2 mt-2 sticker-sm inline-block">
            Pega a vibe!
          </p>
        </div>

        {/* Girls */}
        <div className="mb-16">
          <h3 className="font-groovy text-2xl md:text-3xl text-groovy-pink mb-8 flex items-center gap-4">
            <Flower className="w-7 h-7 sticker-sm" fill="#E84A8D" strokeWidth={2.5} />
            <span className="tracking-widest">GIRLS</span>
            <div className="h-1 flex-1 bg-gradient-to-r from-groovy-pink to-transparent rounded-full"></div>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {girlsCostumes.map((costume, idx) => (
              <CostumeCard key={idx} {...costume} />
            ))}
          </div>
        </div>

        {/* Boys */}
        <div className="mb-10">
          <h3 className="font-groovy text-2xl md:text-3xl text-groovy-red mb-8 flex items-center gap-4 justify-end">
            <div className="h-1 flex-1 bg-gradient-to-l from-groovy-red to-transparent rounded-full"></div>
            <span className="tracking-widest">BOYS</span>
            <Sun className="w-7 h-7 sticker-sm" fill="#FFC72C" strokeWidth={2.5} />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {boysCostumes.map((costume, idx) => (
              <CostumeCard key={idx} {...costume} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <NeonButton href="https://br.pinterest.com/sofiawille0191/festa-anos-70/" variant="pink">
            Referências no Pinterest
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
