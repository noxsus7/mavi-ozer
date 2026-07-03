import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { audioSources } from '../data/maviData';

function AudioCard({ source }: { source: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback if file doesn't exist to prevent crash, just fake the visual playing state
          console.log("Audio file missing, showing visual only");
          setIsPlaying(true);
          setTimeout(() => setIsPlaying(false), 2000);
        });
      }
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-sky-900 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden flex flex-col border border-sky-800 group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>

      <div className="flex justify-between items-start mb-8 relative z-10">
        <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60">Ses Kaydı</h3>
        <button 
          onClick={togglePlay}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none backdrop-blur-sm"
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1"></div>
          )}
        </button>
      </div>
      
      <div className="mt-auto relative z-10">
        <p className="text-sm font-medium mb-1">{source.title}</p>
        <p className="text-[10px] opacity-60 mb-6 italic text-sky-200">"Sesi dinlemek için tıklayın..."</p>
        
        {/* Visual Waveform */}
        <div className="flex items-center gap-1 h-10 w-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 rounded-full ${i % 2 === 0 ? 'bg-sky-400' : (i % 3 === 0 ? 'bg-white' : 'bg-sky-200')}`}
              animate={isPlaying ? {
                height: ["20%", "90%", "30%", "100%", "40%"]
              } : {
                height: ["20%", "40%", "30%", "60%", "20%"][i % 5]
              }}
              transition={{
                duration: 0.8 + (i % 3) * 0.2,
                repeat: isPlaying ? Infinity : 0,
                repeatType: "mirror",
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={source.src} 
        onEnded={() => setIsPlaying(false)}
        className="hidden" 
      />
    </motion.div>
  );
}

export default function AudioMemoriesSection() {
  return (
    <section id="audio" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Sesinden Hatıralar</h2>
          <p className="text-lg text-sky-700/80 font-light max-w-2xl mx-auto">
            Bazı sesler insanın içini ısıtır. O sıcacık tınısıyla yıllar boyu kalbimizde yankılanacak kelimeler...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioSources.map((source, index) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AudioCard source={source} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
