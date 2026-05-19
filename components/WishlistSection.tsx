import React, { useState } from 'react';
import { Gift, Copy, Check, ShoppingBag, Gem, Shirt, Flower, Sun } from 'lucide-react';

const clothingColors = [
  { name: 'Azul', hex: '#2E86AB' },
  { name: 'Verde', hex: '#6B8E23' },
  { name: 'Turquesa', hex: '#5BC2C9' },
  { name: 'Magenta', hex: '#E84A8D' },
  { name: 'Mostarda', hex: '#F4A700' },
];

const jewelryColors = [
  { name: 'Dourado', hex: '#FFD700' },
];

const ColorItem: React.FC<{ name: string; hex: string }> = ({ name, hex }) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className="w-9 h-9 rounded-full border-4 border-groovy-brown sticker-sm transition-transform hover:scale-110"
      style={{ backgroundColor: hex }}
    ></div>
    <span className="text-[9px] font-groovy text-groovy-brown uppercase tracking-tighter">{name}</span>
  </div>
);

const StoreBadge: React.FC<{ name: string; href?: string; type: 'jewelry' | 'clothing' }> = ({ name, href, type }) => {
  const bg = type === 'jewelry' ? 'bg-groovy-pink text-groovy-cream' : 'bg-groovy-yellow text-groovy-brown';
  const content = (
    <span className={`flex items-center justify-center w-full h-full py-3 px-4 ${bg} border-4 border-groovy-brown rounded-xl font-groovy text-xs md:text-sm uppercase tracking-widest text-center cursor-pointer sticker-sm hover:translate-y-[-2px] transition-transform`}>
      {name}
    </span>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] block">{content}</a>;
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
    <section id="wishlist" className="relative py-20 md:py-28 px-4 overflow-hidden daisy-cream">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-groovy text-5xl md:text-7xl text-3d-yellow uppercase tracking-wider mb-2 inline-block">
            Lista de Desejos
          </h2>
          <p className="font-cursive text-3xl md:text-5xl text-3d-pink transform -rotate-2 mt-2 sticker-sm inline-block">
            Presentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT: Preferences */}
          <div className="space-y-6">
            {/* Sizes */}
            <div className="bg-groovy-yellow border-4 border-groovy-brown rounded-2xl p-6 sticker -rotate-1">
              <h3 className="font-groovy text-xl text-groovy-brown mb-5 flex items-center gap-2 uppercase tracking-widest">
                <ShoppingBag className="text-groovy-brown" strokeWidth={2.5} /> Meus Tamanhos
              </h3>

              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                {[{ l: 'Blusa', v: 'P' }, { l: 'Calça', v: '36' }].map((i) => (
                  <div key={i.l} className="flex flex-col items-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-groovy-cream border-4 border-groovy-brown rounded-full sticker-sm">
                      <span className="font-groovy text-3xl text-groovy-brown">{i.v}</span>
                    </div>
                    <span className="mt-2 text-xs font-groovy uppercase tracking-widest text-groovy-brown">{i.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jewelry */}
            <div className="bg-groovy-pink border-4 border-groovy-brown rounded-2xl p-6 sticker rotate-1">
              <div className="flex flex-col gap-3 mb-5">
                <h4 className="font-groovy text-lg text-groovy-cream flex items-center gap-2 uppercase tracking-widest">
                  <Gem size={18} strokeWidth={2.5} /> Joias
                </h4>
                <div className="flex gap-4 overflow-x-auto pb-1">
                  {jewelryColors.map(c => <ColorItem key={c.name} name={c.name} hex={c.hex} />)}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <StoreBadge name="Atelier Poesia" href="https://atelierpoesia.com.br/" type="jewelry" />
                <StoreBadge name="Prata e Arte" type="jewelry" />
                <StoreBadge name="Vivara Life" type="jewelry" />
              </div>
            </div>

            {/* Clothing */}
            <div className="bg-groovy-turquoise border-4 border-groovy-brown rounded-2xl p-6 sticker -rotate-1">
              <div className="flex flex-col gap-3 mb-5">
                <h4 className="font-groovy text-lg text-groovy-brown flex items-center gap-2 uppercase tracking-widest">
                  <Shirt size={18} strokeWidth={2.5} /> Roupas
                </h4>
                <div className="flex flex-wrap gap-4 pb-1">
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

          {/* RIGHT: PIX */}
          <div className="flex flex-col justify-start">
            <div className="bg-groovy-cream border-4 border-groovy-brown rounded-2xl p-8 text-center relative sticker rotate-1 overflow-hidden">
              {/* Decorations */}
              <Flower className="absolute top-3 left-3 text-groovy-pink w-8 h-8 sticker-sm -rotate-12" fill="#E84A8D" strokeWidth={2.5} />
              <Sun className="absolute top-3 right-3 text-groovy-yellow w-8 h-8 sticker-sm rotate-12" fill="#FFC72C" strokeWidth={2.5} />

              <div className="relative z-10 bg-groovy-yellow p-4 rounded-full border-4 border-groovy-brown sticker-sm mb-5 inline-block">
                <Gift className="w-10 h-10 text-groovy-brown" strokeWidth={2.5} />
              </div>

              <h3 className="font-groovy text-3xl text-3d-pink mb-3 tracking-wide">PIX</h3>
              <p className="text-groovy-brown text-sm mb-6 max-w-xs mx-auto font-sans leading-relaxed font-bold">
                Sua presença é o maior presente! <br />Mas se quiser contribuir com meus sonhos:
              </p>

              <div className="w-full">
                <div className="flex items-center gap-2 bg-groovy-brown rounded-xl p-3 w-full border-4 border-groovy-brown">
                  <code className="flex-1 text-groovy-yellow font-mono text-sm md:text-base break-all selection:bg-groovy-yellow selection:text-groovy-brown">
                    {pixKey}
                  </code>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 hover:bg-groovy-brownDeep rounded-lg transition-colors text-groovy-cream flex-shrink-0 active:scale-95"
                    title="Copiar Chave"
                  >
                    {copied ? <Check className="w-6 h-6 text-green-400" /> : <Copy className="w-6 h-6" />}
                  </button>
                </div>
                {copied && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm text-groovy-pink font-groovy tracking-wider animate-bounce">Copiado!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishlistSection;
