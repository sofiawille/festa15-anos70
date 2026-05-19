import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ContextSection from './components/ContextSection';
import GuideSection from './components/GuideSection';
import LogisticsSection from './components/LogisticsSection';
import MusicSection from './components/MusicSection';
import WishlistSection from './components/WishlistSection';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-groovy-bg text-groovy-cream selection:bg-groovy-orange selection:text-groovy-bg font-sans">
      <Navigation />

      <main>
        <Hero />

        {/* Divider: Groovy 4-color stripe */}
        <div className="flex w-full h-2 mt-4 md:mt-6">
          <div className="flex-1 bg-groovy-orange"></div>
          <div className="flex-1 bg-groovy-mustard"></div>
          <div className="flex-1 bg-groovy-red"></div>
          <div className="flex-1 bg-groovy-purple"></div>
        </div>

        <LogisticsSection />
        <ContextSection />
        <GuideSection />
        <MusicSection />
        <WishlistSection />

        {/* RSVP Section */}
        <section id="rsvp" className="py-24 text-center px-4 relative overflow-hidden bg-groovy-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-groovy-mustard/15 via-transparent to-transparent opacity-50"></div>
          <div className="absolute inset-0 sunburst-bg opacity-5 animate-spin-slower"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-groovy text-4xl md:text-6xl text-groovy-cream mb-4 drop-shadow-[0_0_10px_rgba(255,182,39,0.4)]">
              VAI PERDER A VIBE?
            </h2>
            <p className="font-sans text-xl text-groovy-cream/70 mb-10">
              Confirme sua presença e venha viver a era da paz e do amor!
            </p>

            <a
              href="https://wa.me/5541999756896"
              target="_blank"
              rel="noreferrer"
              onClick={playRsvpSound}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-groovy-mustard blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-full animate-pulse"></div>

              <div className="relative bg-groovy-bg text-groovy-mustard border-2 border-groovy-mustard font-retro font-bold py-5 px-16 rounded-full
                group-hover:bg-groovy-mustard group-hover:text-groovy-bg transition-all duration-500 uppercase tracking-[0.2em] text-lg md:text-2xl
                shadow-glow-mustard
                transform group-hover:scale-110 active:scale-95">
                CONFIRMAR PRESENÇA
              </div>
            </a>

            <p className="mt-12 text-sm text-groovy-cream/30 font-sans tracking-widest uppercase">
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
