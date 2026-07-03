import { motion } from 'motion/react';
import { childhoodItems } from '../data/maviData';

export default function ChildhoodSection() {
  return (
    <section id="childhood" className="py-24 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Çocukluğundan İzler</h2>
          <p className="text-lg text-sky-700/80 font-light italic">
            Eski bir defterin sayfaları gibi, en saf hatıralarla dolu bir geçmiş.
          </p>
        </motion.div>

        {/* Nostalgic notebook paper style with immersive adjustments */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl shadow-sky-100 border border-white/60 overflow-hidden relative max-w-3xl mx-auto transform -rotate-1">
          {/* Notebook lines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_39px,_#e0f2fe_40px)] bg-[length:100%_40px] opacity-60 pointer-events-none mt-16"></div>
          {/* Red margin line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-red-400/40 pointer-events-none z-10"></div>
          
          <div className="p-8 sm:p-12 pl-16 sm:pl-20 relative z-10">
            <h3 className="font-serif text-2xl text-sky-900 mb-8 pb-2 border-b border-sky-100 inline-block">Eleşkirt Günleri...</h3>
            
            <ul className="space-y-6">
              {childhoodItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-lg flex flex-col sm:flex-row items-baseline gap-2"
                >
                  <span className="text-[10px] text-sky-500 uppercase tracking-wider font-bold whitespace-nowrap">{item.label}:</span>
                  <span className="font-serif text-slate-800 italic text-xl font-medium">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
