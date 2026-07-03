import { motion } from 'motion/react';
import { grandmotherData } from '../data/maviData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      {/* Animated Clouds / Sky effect background (removed, using global ones from App.tsx instead) */}

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
          className="flex-1 text-center lg:text-left flex flex-col justify-center"
        >
          <span className="text-sky-600 font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            {grandmotherData.mainOpeningWord}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] text-sky-900 font-serif leading-none mt-2">
            Mavi <br className="hidden lg:block"/> <span className="lg:ml-12">Özer</span>
          </h1>
          <p className="text-lg md:text-xl text-sky-700/80 max-w-md mx-auto lg:mx-0 font-light leading-relaxed mt-6 mb-8 italic">
            "Bir ömre sığan sevgi, fedakârlık ve umut... Hayata hep umutla bakmak."
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-sky-900 italic">"İyi ki varsın."</span>
              <span className="h-px w-24 bg-sky-400 mt-2 mx-auto lg:mx-0"></span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, delay: 0.4 }} 
          className="flex-[0.8] w-full max-w-md relative"
        >
          <div className="relative w-full aspect-square rounded-full p-4 bg-white/40 backdrop-blur-sm shadow-2xl shadow-sky-100 border border-white/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-sky-100 flex items-center justify-center relative shadow-inner">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sky-300">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <img 
                src="/images/mavi-ozer-hero.jpg" 
                alt="Mavi Özer" 
                className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-1000" 
                onLoad={(e) => e.currentTarget.style.opacity = '1'} 
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
