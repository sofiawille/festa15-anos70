import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ContextSection from './components/ContextSection';
import GuideSection from './components/GuideSection';
import LogisticsSection from './components/LogisticsSection';
import MusicSection from './components/MusicSection';
import WishlistSection from './components/WishlistSection';
import Footer from './components/Footer';
import { Heart } from 'lucide-react';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playRsvpSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundjay.com/communication/retro-telephone-dialing-1.mp3');
      audioRef.current.volume = 0.5;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(error => {
      console.log("O áudio não pôde ser reproduzido: ", error);
    });
  };

  return (
    <div className="min-h-screen bg-groovy-bg text-groovy-brown selection:bg-groovy-yellow selection:text-groovy-brown font-sans">
      <Navigation />

      <main>
        <Hero />

        {/* Groovy rainbow stripe divider */}
        <div className="flex w-full h-3">
          <div className="flex-1 bg-groovy-pink"></div>
          <div className="flex-1 bg-groovy-red"></div>
          <div className="flex-1 bg-groovy-mustard"></div>
          <div className="flex-1 bg-groovy-yellow"></div>
          <div className="flex-1 bg-groovy-turquoise"></div>
          <div className="flex-1 bg-groovy-purple"></div>
        </div>

        <LogisticsSection />
        <ContextSection />
        <GuideSection />
        <MusicSection />
        <WishlistSection />

        {/* RSVP Section */}
        <section id="rsvp" className="py-24 text-center px-4 relative overflow-hidden daisy-orange">
          {/* Rainbow stripe top */}
          <div className="absolute top-0 left-0 w-full flex h-2">
            <div className="flex-1 bg-groovy-pink"></div>
            <div className="flex-1 bg-groovy-yellow"></div>
            <div className="flex-1 bg-groovy-turquoise"></div>
            <div className="flex-1 bg-groovy-red"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="mx-auto w-10 h-10 text-groovy-pink mb-4 sticker" fill="#E84A8D" />
            <h2 className="font-groovy text-4xl md:text-6xl text-3d-cream mb-6 leading-tight">
              VAI PERDER<br />A VIBE?
            </h2>
            <p className="font-sans text-xl text-groovy-cream mb-10 font-bold">
              Confirme sua presença e venha viver a era da paz e do amor!
            </p>

            <a
              href="https://wa.me/5541999756896"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playRsvpSound}
              className="group inline-flex items-center justify-center sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-transform"
            >
              <div className="bg-groovy-yellow text-groovy-brown border-4 border-groovy-brown font-groovy py-5 px-12 rounded-full uppercase tracking-[0.15em] text-lg md:text-2xl">
                CONFIRMAR PRESENÇA
              </div>
            </a>

            <p className="mt-12 text-sm text-groovy-cream/70 font-sans tracking-widest uppercase font-bold">
              Ao clicar, você será redirecionado para o WhatsApp.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
