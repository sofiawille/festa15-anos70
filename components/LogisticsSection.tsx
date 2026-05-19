import React from 'react';
import Section from './ui/Section';
import { MapPin, Clock, Ticket, Flower, Sun, Shirt } from 'lucide-react';

const LogisticsSection: React.FC = () => {
  return (
    <Section id="party">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 blur-3xl w-64 h-64 bg-groovy-mustard rounded-full"></div>

          <h2 className="font-groovy text-6xl md:text-8xl text-groovy-orange uppercase tracking-[0.15em] mb-4 drop-shadow-[0_0_15px_rgba(255,107,53,0.8)]">
            A Festa
          </h2>
          <p className="font-cursive text-4xl md:text-6xl text-groovy-mustard animate-pulse transform -rotate-2">
            Vem celebrar!
          </p>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-groovy-orange via-groovy-mustard via-groovy-red to-groovy-purple rounded-[2rem] blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-[#15100E] border-2 border-groovy-cream/30 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            {/* LEFT SIDE: Date & Time */}
            <div className="bg-gradient-to-br from-[#0F0A08] to-[#0a0606] p-8 md:w-1/3 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-groovy-cream/30 relative">
              <div className="hidden md:block absolute -top-4 -right-4 w-8 h-8 bg-groovy-bg rounded-full border-2 border-groovy-cream/30"></div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-8 h-8 bg-groovy-bg rounded-full border-2 border-groovy-cream/30"></div>

              <div className="absolute top-4 left-4">
                <Flower className="text-groovy-mustard w-5 h-5 animate-spin-slower" />
              </div>

              <div className="text-center flex flex-col items-center gap-1">
                <div className="font-retro text-7xl text-groovy-orange leading-none mb-1 drop-shadow-[0_0_10px_#FF6B35]">27</div>
                <div className="font-groovy text-3xl text-groovy-mustard mb-1 uppercase tracking-widest">JUN</div>
                <div className="font-retro text-2xl text-groovy-red tracking-[0.2em] mb-1">2026</div>
                <div className="font-cursive text-3xl text-groovy-purple mt-2">Sábado</div>
              </div>

              <div className="mt-8 flex items-center gap-2 bg-groovy-cream/5 px-4 py-2 rounded-full border border-groovy-cream/20 shadow-[0_0_10px_rgba(244,228,193,0.1)]">
                <Clock className="w-4 h-4 text-groovy-cream" />
                <span className="font-retro text-lg text-groovy-cream">19:00H</span>
              </div>
            </div>

            {/* RIGHT SIDE: Details */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-groovy-mustard/8 via-transparent to-transparent">
              {/* Daisy Pattern Background */}
              <div className="absolute top-0 right-0 p-4 opacity-25 pointer-events-none">
                <svg width="160" height="160" viewBox="0 0 100 100">
                  <g transform="translate(20,20)">
                    <circle cx="0" cy="0" r="3" fill="#FFB627" />
                    {[0, 60, 120, 180, 240, 300].map(angle => (
                      <ellipse key={angle} cx="0" cy="-6" rx="2" ry="4" fill="#F4E4C1" transform={`rotate(${angle})`} />
                    ))}
                  </g>
                  <g transform="translate(75,30)">
                    <circle cx="0" cy="0" r="2" fill="#D7263D" />
                    {[0, 72, 144, 216, 288].map(angle => (
                      <ellipse key={angle} cx="0" cy="-4" rx="1.5" ry="3" fill="#FFB627" transform={`rotate(${angle})`} />
                    ))}
                  </g>
                  <g transform="translate(80,80)">
                    <circle cx="0" cy="0" r="2.5" fill="#FF6B35" />
                    {[0, 60, 120, 180, 240, 300].map(angle => (
                      <ellipse key={angle} cx="0" cy="-5" rx="1.5" ry="3.5" fill="#6A4C93" transform={`rotate(${angle})`} />
                    ))}
                  </g>
                  <g transform="translate(15,75)" stroke="#FFB627" strokeWidth="1.2" fill="none">
                    <circle cx="0" cy="0" r="6" />
                    <line x1="0" y1="-6" x2="0" y2="6" />
                    <line x1="0" y1="0" x2="-4.2" y2="4.2" />
                    <line x1="0" y1="0" x2="4.2" y2="4.2" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="font-retro text-groovy-mustard text-sm tracking-[0.5em] uppercase mb-3 drop-shadow-[0_0_5px_rgba(255,182,39,0.5)]">Localização</h3>
                  <h4 className="font-retro text-4xl md:text-5xl text-groovy-cream tracking-wide mb-2 group-hover:text-groovy-mustard transition-colors duration-500">
                    Edifício Rio Volga
                  </h4>
                  <div className="flex gap-1 mt-4">
                    <div className="h-1.5 w-16 bg-groovy-orange rounded-full"></div>
                    <div className="h-1.5 w-12 bg-groovy-mustard rounded-full"></div>
                    <div className="h-1.5 w-8 bg-groovy-red rounded-full"></div>
                    <div className="h-1.5 w-4 bg-groovy-purple rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-groovy-mustard/20 p-3 rounded-xl mt-1 border border-groovy-mustard/30">
                      <MapPin className="text-groovy-mustard w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-sans text-xl text-groovy-cream font-bold tracking-wide">Salão de Festas</p>
                      <p className="font-sans text-groovy-cream/90 text-lg leading-relaxed">Travessa Dr. Flávio Luz, 153</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 bg-groovy-orange/10 border border-groovy-orange/30 p-5 rounded-2xl shadow-[0_0_20px_rgba(255,107,53,0.15)] group-hover:bg-groovy-orange/20 transition-all duration-500">
                    <div className="relative">
                      <div className="absolute inset-0 bg-groovy-orange blur-lg opacity-30 animate-pulse"></div>
                      <Shirt className="text-groovy-orange w-8 h-8 relative z-10" />
                      <Sun className="absolute -top-3 -right-3 text-groovy-mustard w-5 h-5 animate-spin-slow" />
                    </div>
                    <div>
                      <p className="font-retro text-groovy-orange text-[10px] md:text-xs uppercase tracking-[0.3em] leading-none mb-2">
                        Traje obrigatório
                      </p>
                      <p className="font-retro text-2xl md:text-3xl text-groovy-cream leading-none uppercase tracking-[0.05em] drop-shadow-[0_0_8px_rgba(244,228,193,0.4)]">
                        FANTASIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-6 items-center">
                  <a
                    href="https://maps.app.goo.gl/BDFiYnb9H1MTdJAW9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/btn overflow-hidden px-10 py-4 bg-transparent border-2 border-groovy-mustard text-groovy-mustard rounded-xl font-retro font-bold uppercase tracking-widest transition-all hover:text-groovy-bg shadow-[0_0_15px_rgba(255,182,39,0.2)] hover:shadow-glow-mustard"
                  >
                    <div className="absolute inset-0 bg-groovy-mustard translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">VER MAPA</span>
                  </a>

                  <div className="flex items-center gap-2 text-groovy-red font-retro text-xs tracking-widest animate-pulse border-b border-groovy-red/30 pb-1">
                    <Ticket className="w-4 h-4" />
                    CONVITE INDIVIDUAL VIP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 font-cursive text-3xl text-groovy-cream/70">
          Solte o cabelo, vista sua roupa mais groovy e venha viver a paz e o amor!
        </p>
      </div>
    </Section>
  );
};

export default LogisticsSection;
