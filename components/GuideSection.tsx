import React from 'react';
import NeonButton from './ui/NeonButton';
import { Flower, Sun, Sparkles } from 'lucide-react';

// Female costume photos
import rfPolkaDot from '../assets/roupas-femininas/rf-02-polka-dot.jpg';
import rfBohoChic from '../assets/roupas-femininas/rf-03-boho-chic.jpg';
import rfFlowerPower from '../assets/roupas-femininas/rf-03-flower-power.jpg';
import rfDisco from '../assets/roupas-femininas/rf-04-disco.jpg';

// Male costume photos
import rm70sNerds from '../assets/roupas-masculinas/rm-01-70s-nerds.jpg';
import rmHippieCool from '../assets/roupas-masculinas/rm-01-hippie-cool.jpg';
import rmBlackPower from '../assets/roupas-masculinas/rm-03-black-power.jpg';
import rmDisco from '../assets/roupas-masculinas/rm-04-disco.jpg';

interface CostumeProps {
  label: string;
  tag: string;
  image: string;
  border: string;
  rotate: string;
}

const CostumeCard: React.FC<CostumeProps> = ({ label, tag, image, border, rotate }) => (
  <div className={`group relative ${rotate} sticker hover:rotate-0 transition-transform duration-500`}>
    <div className={`rounded-2xl overflow-hidden border-4 ${border} bg-groovy-cream`}>
      <div className="aspect-[3/4] relative overflow-hidden">
        {/* Real photo */}
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Corner sticker decoration */}
        <div className="absolute top-2 left-2 z-10">
          <Flower className="w-5 h-5 md:w-6 md:h-6 text-groovy-pink sticker-sm" fill="#E84A8D" strokeWidth={2.5} />
        </div>
        <div className="absolute top-2 right-2 z-10">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-groovy-yellow sticker-sm" fill="#FFC72C" strokeWidth={2.5} />
        </div>

        {/* Bottom label band */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-groovy-brown via-groovy-brown/85 to-transparent px-3 pt-10 pb-3 z-10">
          <h4 className="font-groovy text-sm md:text-lg text-groovy-cream uppercase tracking-wide mb-0.5 leading-tight drop-shadow-[2px_2px_0_#1F100A]">
            {label}
          </h4>
          <p className="font-sans text-[10px] md:text-xs text-groovy-yellow uppercase tracking-widest font-bold">
            {tag}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const GuideSection: React.FC = () => {
  const girlsCostumes: CostumeProps[] = [
    { label: 'Flower Power', tag: 'Boho & Margaridas', image: rfFlowerPower, border: 'border-groovy-pink', rotate: '-rotate-2' },
    { label: 'Disco Diva', tag: 'Brilho & Plataforma', image: rfDisco, border: 'border-groovy-yellow', rotate: 'rotate-1' },
    { label: 'Boho Chic', tag: 'Franjas & Boca-de-Sino', image: rfBohoChic, border: 'border-groovy-turquoise', rotate: '-rotate-1' },
    { label: 'Polka Dot', tag: 'Bolinhas & Charme Retrô', image: rfPolkaDot, border: 'border-groovy-purple', rotate: 'rotate-2' },
  ];

  const boysCostumes: CostumeProps[] = [
    { label: 'Hippie Cool', tag: 'Camisa estampada & óculos', image: rmHippieCool, border: 'border-groovy-mustard', rotate: '-rotate-2' },
    { label: 'Disco King', tag: 'Gola de pico & Plataforma', image: rmDisco, border: 'border-groovy-red', rotate: 'rotate-2' },
    { label: '70s Nerds', tag: 'Suspensórios & Geek Chic', image: rm70sNerds, border: 'border-groovy-cream', rotate: '-rotate-1' },
    { label: 'Black Power', tag: 'Afro & Atitude', image: rmBlackPower, border: 'border-groovy-turquoise', rotate: 'rotate-1' },
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
