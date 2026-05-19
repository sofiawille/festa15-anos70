import React, { useState } from 'react';
import Section from './ui/Section';
import { Gift, Copy, Check, ShoppingBag, Gem, Shirt } from 'lucide-react';

const clothingColors = [
  { name: 'Azul', hex: '#2E86AB' },
  { name: 'Verde', hex: '#6B8E23' },
  { name: 'Turquesa', hex: '#40E0D0' },
  { name: 'Magenta', hex: '#D7263D' },
  { name: 'Mostarda', hex: '#FFB627' },
];

const jewelryColors = [
  { name: 'Dourado', hex: '#FFD700' },
];

const ColorItem: React.FC<{ name: string; hex: string }> = ({ name, hex }) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className="w-8 h-8 rounded-full border-2 border-groovy-cream/30 shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: hex }}
    ></div>
    <span className="text-[9px] font-retro text-groovy-cream/60 uppercase tracking-tighter">{name}</span>
  </div>
);

const StoreBadge: React.FC<{ name: string; href?: string; type: 'jewelry' | 'clothing' }> = ({ name, href, type }) => {
  const isJewelry = type === 'jewelry';
  const baseColor = isJewelry
    ? 'border-groovy-red text-groovy-red shadow-[0_0_5px_#D7263D]'
    : 'border-groovy-mustard text-groovy-mustard shadow-[0_0_5px_#FFB627]';
  const hoverColor = isJewelry
    ? 'hover:bg-groovy-red hover:text-groovy-bg hover:shadow-[0_0_20px_#D7263D]'
    : 'hover:bg-groovy-mustard hover:text-groovy-bg hover:shadow-glow-mustard';

  const content = (
    <span className={`flex items-center justify-center w-full h-full py-3 px-4 border-2 ${baseColor} ${hoverColor} bg-black/40 rounded-lg transition-all duration-300 font-retro text-xs md:text-sm uppercase tracking-widest text-center cursor-pointer`}>
      {name}
    </span>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className="flex-1 min-w-[140px] block">{content}</a>;
  }
  return <div className="flex-1 min-w-[140px]">{content}</div>;
};

const WishlistSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "sofiawille@hotmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="wishlist" title="Lista de Desejos" subtitle="Presentes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-8">
          <div className="bg-groovy-bg/40 border border-groovy-cream/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="font-retro text-xl text-groovy-cream mb-6 flex items-center gap-2">
              <ShoppingBag className="text-groovy-mustard" /> Meus Tamanhos
            </h3>

            <div className="flex flex-wrap gap-10 justify-center md:justify-start">
              {[{ l: 'Blusa', v: 'P' }, { l: 'Calça', v: '36' }].map((i) => (
                <div key={i.l} className="flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center bg-groovy-bg border-2 border-groovy-mustard rounded-full shadow-[0_0_15px_rgba(255,182,39,0.4)] group hover:scale-105 transition-transform">
                    <span className="font-retro text-3xl text-groovy-cream group-hover:text-groovy-mustard transition-colors">{i.v}</span>
                  </div>
                  <span className="mt-2 text-xs font-sans uppercase tracking-widest text-groovy-cream/60 font-bold">{i.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-black/40 p-6 rounded-2xl border border-groovy-cream/5">
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="font-retro text-groovy-red text-lg flex items-center gap-2 uppercase tracking-widest pl-2 border-l-4 border-groovy-red leading-none">
                  <Gem size={20} /> Joias
                </h4>
                <div className="flex gap-4 pl-2 overflow-x-auto pb-2">
                  {jewelryColors.map(c => <ColorItem key={c.name} name={c.name} hex={c.hex} />)}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <StoreBadge name="Atelier Poesia" href="https://atelierpoesia.com.br/" type="jewelry" />
                <StoreBadge name="Prata e Arte" type="jewelry" />
                <StoreBadge name="Vivara Life" type="jewelry" />
              </div>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-groovy-cream/5">
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="font-retro text-groovy-mustard text-lg flex items-center gap-2 uppercase tracking-widest pl-2 border-l-4 border-groovy-mustard leading-none">
                  <Shirt size={20} /> Roupas
                </h4>
                <div className="flex flex-wrap gap-4 pl-2 overflow-x-auto pb-2">
                  {clothingColors.map(c => <ColorItem key={c.name} name={c.name} hex={c.hex} />)}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Zara', 'Hering', 'CottonOn', 'C&A', 'Decathlon'].map(store => (
                  <StoreBadge key={store} name={store} type="clothing" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <div className="h-full bg-gradient-to-b from-groovy-bg via-black to-groovy-bg border-2 border-groovy-cream/30 rounded-2xl p-8 text-center relative shadow-[0_0_30px_rgba(244,228,193,0.1)] group hover:border-groovy-mustard transition-all duration-500 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-groovy-mustard/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 bg-black/50 p-4 rounded-full border-2 border-groovy-cream group-hover:border-groovy-mustard group-hover:shadow-glow-mustard transition-all duration-300 mb-6">
              <Gift className="w-12 h-12 text-groovy-cream group-hover:text-groovy-mustard transition-colors" />
            </div>

            <h3 className="relative z-10 font-retro text-3xl text-groovy-cream mb-2 tracking-wide">Presente via PIX</h3>
            <p className="relative z-10 text-groovy-cream/60 text-sm mb-8 max-w-xs mx-auto font-sans leading-relaxed">
              Sua presença é o maior presente! <br />Mas se quiser contribuir com meus sonhos:
            </p>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-2 bg-black border border-groovy-cream/20 rounded-xl p-4 w-full group-hover:border-groovy-mustard/50 transition-colors shadow-inner">
                <code className="flex-1 text-groovy-mustard font-mono text-sm md:text-base break-all selection:bg-groovy-mustard selection:text-groovy-bg">
                  {pixKey}
                </code>
                <button
                  onClick={handleCopy}
                  className="p-3 hover:bg-groovy-cream/10 rounded-lg transition-colors text-groovy-cream flex-shrink-0 active:scale-95"
                  title="Copiar Chave"
                >
                  {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                </button>
              </div>
              {copied && <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-green-400 font-retro tracking-wider animate-bounce">Copiado com sucesso!</span>}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WishlistSection;
