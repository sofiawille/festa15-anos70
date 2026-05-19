import React from 'react';
import { MapPin, Clock, Flower, Sun, Shirt, Ticket } from 'lucide-react';

const LogisticsSection: React.FC = () => {
  return (
    <section id="party" className="relative py-20 md:py-28 px-4 overflow-hidden daisy-cream">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header — 3D layered title */}
        <div className="text-center mb-14 relative">
          <h2 className="font-groovy text-6xl md:text-8xl text-3d-yellow uppercase tracking-[0.1em] mb-2 inline-block">
            A Festa
          </h2>
          <p className="font-cursive text-4xl md:text-6xl text-3d-pink transform -rotate-3 mt-2 sticker-sm inline-block">
            Vem celebrar!
          </p>

          {/* Stickers floating around the title */}
          <Flower className="absolute top-0 left-4 md:left-20 text-groovy-pink w-10 h-10 md:w-14 md:h-14 sticker -rotate-12" fill="#E84A8D" strokeWidth={2.5} />
          <Sun className="absolute -top-2 right-4 md:right-20 text-groovy-yellow w-10 h-10 md:w-14 md:h-14 sticker rotate-12" fill="#FFC72C" strokeWidth={2.5} />
        </div>

        {/* The Ticket — sticker style on the cream/daisy background */}
        <div className="relative max-w-4xl mx-auto sticker rotate-[-1deg]">
          <div className="relative bg-groovy-cream border-4 border-groovy-brown rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[8px_8px_0_#3A1F0F]">
            {/* LEFT SIDE: Date stub */}
            <div className="bg-groovy-yellow p-8 md:w-1/3 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-dashed border-groovy-brown relative">
              {/* Decorative corner */}
              <div className="absolute top-3 left-3">
                <Flower className="text-groovy-pink w-6 h-6 sticker-sm" fill="#E84A8D" strokeWidth={2.5} />
              </div>
              <div className="absolute bottom-3 right-3">
                <Sun className="text-groovy-red w-6 h-6 sticker-sm" fill="#D7263D" strokeWidth={2.5} />
              </div>

              <div className="text-center flex flex-col items-center gap-1">
                <div className="font-groovy text-7xl md:text-8xl text-groovy-brown leading-none mb-2">27</div>
                <div className="font-groovy text-2xl md:text-3xl text-groovy-pink uppercase tracking-widest">JUN</div>
                <div className="font-retro text-xl text-groovy-brown tracking-[0.2em] mt-1">2026</div>
                <div className="font-cursive text-3xl text-groovy-brown mt-2 -rotate-3">Sábado</div>
              </div>

              <div className="mt-6 flex items-center gap-2 bg-groovy-brown text-groovy-cream px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-groovy text-base tracking-wide">19:00H</span>
              </div>
            </div>

            {/* RIGHT SIDE: Details */}
            <div className="flex-1 p-8 md:p-10 relative flex flex-col justify-center">
              {/* Decorative daisies behind text */}
              <div className="absolute top-2 right-2 opacity-30 pointer-events-none">
                <Flower className="text-groovy-pink w-16 h-16" fill="#E84A8D" strokeWidth={2} />
              </div>

              <div className="relative z-10 space-y-5">
                <div>
                  <h3 className="font-groovy text-groovy-pink text-xs md:text-sm tracking-[0.4em] uppercase mb-2">
                    LOCALIZAÇÃO
                  </h3>
                  <h4 className="font-retro text-3xl md:text-4xl text-groovy-brown leading-tight">
                    Edifício Rio Volga
                  </h4>
                  <div className="flex gap-1 mt-3">
                    <div className="h-2 w-14 bg-groovy-pink rounded-full"></div>
                    <div className="h-2 w-10 bg-groovy-yellow rounded-full"></div>
                    <div className="h-2 w-7 bg-groovy-turquoise rounded-full"></div>
                    <div className="h-2 w-4 bg-groovy-red rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-groovy-turquoise p-2.5 rounded-full border-2 border-groovy-brown sticker-sm">
                      <MapPin className="text-groovy-brown w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-retro text-lg text-groovy-brown">Salão de Festas</p>
                      <p className="font-sans text-groovy-brown/80 text-base leading-relaxed">Travessa Dr. Flávio Luz, 153</p>
                    </div>
                  </div>

                  {/* Dress code badge */}
                  <div className="flex items-center gap-4 bg-groovy-pink border-4 border-groovy-brown p-4 rounded-2xl sticker-sm -rotate-1">
                    <div className="relative">
                      <Shirt className="text-groovy-cream w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-groovy text-groovy-cream text-[10px] md:text-xs uppercase tracking-[0.3em] leading-none mb-1">
                        Traje obrigatório
                      </p>
                      <p className="font-groovy text-2xl md:text-3xl text-groovy-cream leading-none uppercase">
                        FANTASIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://maps.app.goo.gl/BDFiYnb9H1MTdJAW9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-groovy-yellow text-groovy-brown border-4 border-groovy-brown rounded-full font-groovy uppercase tracking-widest text-sm sticker-sm hover:bg-groovy-turquoise transition-colors"
                  >
                    <MapPin className="w-4 h-4" strokeWidth={2.5} />
                    VER MAPA
                  </a>

                  <div className="flex items-center gap-2 text-groovy-red font-groovy text-xs tracking-widest">
                    <Ticket className="w-4 h-4" strokeWidth={2.5} />
                    CONVITE VIP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 font-cursive text-3xl md:text-4xl text-groovy-brown -rotate-2">
          Solte o cabelo, vista sua roupa mais groovy e venha viver a paz e o amor!
        </p>
      </div>
    </section>
  );
};

export default LogisticsSection;
