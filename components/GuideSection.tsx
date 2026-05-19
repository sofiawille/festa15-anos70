import React from 'react';
import Section from './ui/Section';
import NeonButton from './ui/NeonButton';
import { Flower, Disc, Music, Heart, Sparkles, Sun, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CostumeProps {
  label: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
}

const CostumeCard: React.FC<CostumeProps> = ({ label, tag, icon: Icon, gradient, iconColor }) => (
  <div className={`group relative rounded-2xl overflow-hidden border-2 border-groovy-cream/20 transition-all duration-500 hover:scale-105 hover:z-10 hover:border-groovy-mustard shadow-lg bg-gradient-to-br ${gradient}`}>
    <div className="aspect-[3/4] relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1.5px)',
             backgroundSize: '14px 14px'
           }}>
      </div>

      {/* Sunburst rays behind icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sunburst-bg opacity-15 rounded-full blur-sm group-hover:animate-spin-slower"></div>

      {/* Center icon */}
      <div className="relative z-10 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        <Icon className={`w-20 h-20 md:w-24 md:h-24 ${iconColor} drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]`} strokeWidth={1.5} />
      </div>

      {/* Label */}
      <div className="relative z-10 text-center px-2">
        <h4 className="font-groovy text-base md:text-xl text-groovy-cream uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mb-1 leading-tight">
          {label}
        </h4>
        <p className="font-retro text-[10px] md:text-xs text-groovy-cream/90 uppercase tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {tag}
        </p>
      </div>

      <Flower className="absolute bottom-3 left-3 w-4 h-4 text-groovy-cream/40 group-hover:text-groovy-cream/80 transition-colors animate-spin-slower" />
      <Sparkles className="absolute top-3 right-3 w-4 h-4 text-groovy-cream/40 group-hover:text-groovy-cream/80 transition-colors animate-pulse" />
    </div>
  </div>
);

const GuideSection: React.FC = () => {
  const girlsCostumes: CostumeProps[] = [
    {
      label: 'Flower Power',
      tag: 'Boho & Margaridas',
      icon: Flower,
      gradient: 'from-groovy-orange via-groovy-red to-groovy-purple',
      iconColor: 'text-groovy-cream',
    },
    {
      label: 'Disco Diva',
      tag: 'Brilho & Plataforma',
      icon: Disc,
      gradient: 'from-groovy-mustard via-groovy-orange to-groovy-red',
      iconColor: 'text-groovy-bg',
    },
    {
      label: 'Boho Chic',
      tag: 'Franjas & Boca-de-Sino',
      icon: Heart,
      gradient: 'from-groovy-brown via-groovy-orange to-groovy-mustard',
      iconColor: 'text-groovy-cream',
    },
    {
      label: 'Glam Rock',
      tag: 'Glitter & Atitude',
      icon: Star,
      gradient: 'from-groovy-purple via-groovy-red to-groovy-orange',
      iconColor: 'text-groovy-mustard',
    },
  ];

  const boysCostumes: CostumeProps[] = [
    {
      label: 'Hippie Cool',
      tag: 'Camisa estampada & óculos',
      icon: Sun,
      gradient: 'from-groovy-mustard via-groovy-orange to-groovy-red',
      iconColor: 'text-groovy-bg',
    },
    {
      label: 'Disco King',
      tag: 'Gola de pico & Plataforma',
      icon: Disc,
      gradient: 'from-groovy-purple via-groovy-red to-groovy-orange',
      iconColor: 'text-groovy-mustard',
    },
    {
      label: 'Rock Vibes',
      tag: 'Jeans & Cabelo solto',
      icon: Music,
      gradient: 'from-groovy-red via-groovy-purple to-groovy-brown',
      iconColor: 'text-groovy-cream',
    },
    {
      label: 'Saturday Night',
      tag: 'Terno branco estilo Travolta',
      icon: Sparkles,
      gradient: 'from-groovy-brown via-groovy-purple to-groovy-red',
      iconColor: 'text-groovy-cream',
    },
  ];

  return (
    <Section id="costumes" title="Sugestões de Fantasia" subtitle="Pega a vibe!">
      <div className="mb-20">
        <h3 className="font-retro text-2xl md:text-3xl text-groovy-orange mb-8 flex items-center gap-4">
          <Flower className="w-6 h-6 animate-spin-slower" />
          <span className="tracking-widest">GIRLS</span>
          <div className="h-px flex-1 bg-gradient-to-r from-groovy-orange to-transparent"></div>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {girlsCostumes.map((costume, idx) => (
            <CostumeCard key={idx} {...costume} />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-retro text-2xl md:text-3xl text-groovy-mustard mb-8 flex items-center gap-4 justify-end">
          <div className="h-px flex-1 bg-gradient-to-l from-groovy-mustard to-transparent"></div>
          <span className="tracking-widest">BOYS</span>
          <Sun className="w-6 h-6 animate-spin-slow" />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {boysCostumes.map((costume, idx) => (
            <CostumeCard key={idx} {...costume} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <NeonButton href="https://br.pinterest.com/sofiawille0191/festa-anos-70/" className="text-sm px-8 py-4">
          Referências no Pinterest
        </NeonButton>
      </div>
    </Section>
  );
};

export default GuideSection;
