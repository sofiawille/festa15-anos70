import React from 'react';
import Section from './ui/Section';
import { Music, ExternalLink, Headphones, Volume2 } from 'lucide-react';

const MusicSection: React.FC = () => {
  // Placeholder: usa o ID da playlist do site 80s — Sofia troca pelo ID da playlist anos 70 dela
  const spotifyPlaylistId = "5d8J6I7gYvqkOEffw7K011";
  const spotifyUrl = `https://open.spotify.com/playlist/${spotifyPlaylistId}`;

  return (
    <Section id="playlist" title="Sons da Festa" subtitle="Já entra na vibe...">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-groovy-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Aumente o volume! Conectamos a radiola <strong className="text-groovy-mustard">Sofia Hi-Fi</strong> direto na nossa playlist groovy. Dê o play e comece a viajar no tempo agora mesmo.
          </p>
        </div>

        <div className="relative group/stereo">
          <div className="absolute -inset-4 bg-groovy-mustard/10 blur-3xl rounded-[3rem] opacity-50"></div>

          <div className="relative bg-[#1f1714] rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t-2 border-l-2 border-groovy-cream/10 border-b-8 border-r-8 border-black overflow-hidden">
            <div className="flex justify-between items-center mb-6 px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-groovy-orange shadow-[0_0_10px_#FF6B35]"></div>
                <div className="w-3 h-3 rounded-full bg-groovy-mustard shadow-[0_0_10px_#FFB627]"></div>
                <div className="w-3 h-3 rounded-full bg-groovy-purple shadow-[0_0_10px_#6A4C93]"></div>
              </div>
              <div className="font-retro text-[10px] text-groovy-cream/40 tracking-[0.3em] uppercase">
                Sofia 15 • Vintage Sound System • Hi-Fi Stereo
              </div>
            </div>

            <div className="w-full">
              <div className="relative bg-black rounded-3xl border-4 border-[#3a2f28] p-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,107,53,0.03),rgba(255,182,39,0.01),rgba(106,76,147,0.03))] z-20 bg-[length:100%_3px,3px_100%] opacity-20"></div>

                <iframe
                  src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="450"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="relative z-10 rounded-2xl opacity-95 hover:opacity-100 transition-opacity duration-500"
                ></iframe>

                <div className="absolute bottom-4 right-6 z-30 pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-groovy-cream/10">
                    <Volume2 size={12} className="text-groovy-mustard" />
                    <span className="font-retro text-[9px] text-groovy-cream tracking-widest uppercase">Live Playback</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-groovy-cream/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-groovy-mustard/10 rounded-full border border-groovy-mustard/20">
                  <Headphones className="text-groovy-mustard w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-retro text-sm text-groovy-cream uppercase tracking-wider">Sofia's 70s Groove Selection</h5>
                  <p className="font-sans text-xs text-groovy-cream/50">Curadoria exclusiva para a festa</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-retro text-xs font-bold rounded-full transition-all flex items-center gap-3 shadow-[0_0_15px_rgba(29,185,84,0.3)] hover:shadow-[0_0_25px_rgba(29,185,84,0.6)] hover:scale-105 active:scale-95"
                >
                  <Music size={16} />
                  ABRIR NO SPOTIFY
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-cursive text-4xl text-groovy-mustard drop-shadow-[0_0_8px_rgba(255,182,39,0.4)] animate-pulse">
            Siga a playlist e já prepare seus moves groovy!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MusicSection;
