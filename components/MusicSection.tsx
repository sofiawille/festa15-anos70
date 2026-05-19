import React from 'react';
import { Music, ExternalLink, Headphones, Volume2, Disc, Flower } from 'lucide-react';

const MusicSection: React.FC = () => {
  const spotifyPlaylistId = "4kNe17BXIoBZbZ3JqqQaAn";
  const spotifyUrl = `https://open.spotify.com/playlist/${spotifyPlaylistId}`;

  return (
    <section id="playlist" className="relative py-20 md:py-28 px-4 overflow-hidden daisy-orange">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-groovy text-5xl md:text-7xl text-3d-cream uppercase tracking-wider mb-2 inline-block">
            Sons da Festa
          </h2>
          <p className="font-cursive text-3xl md:text-5xl text-3d-pink transform -rotate-2 mt-2 sticker-sm inline-block">
            Já entra na vibe...
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="font-sans text-groovy-cream text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold bg-groovy-brown/40 backdrop-blur-sm px-6 py-3 rounded-2xl">
            Aumente o volume! Conectamos a radiola <strong className="text-groovy-yellow">Sofia Hi-Fi</strong> direto na playlist groovy. Dê o play e comece a viajar no tempo.
          </p>
        </div>

        {/* Vintage Radiola */}
        <div className="relative sticker -rotate-1">
          <div className="relative bg-groovy-brown rounded-3xl p-4 md:p-6 border-4 border-groovy-brownDeep overflow-hidden">
            {/* Top label */}
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex gap-2">
                <Disc className="w-5 h-5 text-groovy-pink" fill="#E84A8D" strokeWidth={2} />
                <Disc className="w-5 h-5 text-groovy-yellow" fill="#FFC72C" strokeWidth={2} />
                <Disc className="w-5 h-5 text-groovy-turquoise" fill="#5BC2C9" strokeWidth={2} />
              </div>
              <div className="font-groovy text-[10px] text-groovy-cream/70 tracking-[0.3em] uppercase">
                Sofia 15 • Hi-Fi Stereo
              </div>
            </div>

            {/* Screen with Spotify embed */}
            <div className="relative bg-black rounded-2xl border-4 border-groovy-cream p-2 overflow-hidden">
              <iframe
                title="Spotify Playlist"
                src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
                width="100%"
                height="430"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>

              <div className="absolute bottom-4 right-6 z-30 pointer-events-none">
                <div className="flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full border border-groovy-cream/30">
                  <Volume2 size={12} className="text-groovy-yellow" />
                  <span className="font-groovy text-[9px] text-groovy-cream tracking-widest uppercase">Playing</span>
                </div>
              </div>
            </div>

            {/* Bottom controls */}
            <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-groovy-yellow rounded-full border-2 border-groovy-cream">
                  <Headphones className="text-groovy-brown w-5 h-5" strokeWidth={2.5} />
                </div>
                <div>
                  <h5 className="font-groovy text-sm text-groovy-cream uppercase tracking-wider">Sofia's 70s Groove</h5>
                  <p className="font-sans text-xs text-groovy-cream/70">Curadoria exclusiva</p>
                </div>
              </div>

              <a
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-groovy text-xs font-bold rounded-full transition-all flex items-center gap-2 border-2 border-groovy-cream sticker-sm"
              >
                <Music size={14} />
                ABRIR NO SPOTIFY
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Decorative flowers */}
          <Flower className="absolute -top-4 -left-4 text-groovy-pink w-12 h-12 sticker rotate-12" fill="#E84A8D" strokeWidth={2.5} />
          <Flower className="absolute -bottom-4 -right-4 text-groovy-yellow w-12 h-12 sticker -rotate-12" fill="#FFC72C" strokeWidth={2.5} />
        </div>

        <div className="mt-10 text-center">
          <p className="font-cursive text-3xl md:text-4xl text-3d-yellow rotate-2 sticker-sm inline-block">
            Já prepara teus moves groovy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
