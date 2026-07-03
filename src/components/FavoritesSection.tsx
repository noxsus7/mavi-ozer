import { motion } from 'motion/react';
import { favoriteItems } from '../data/maviData';

export default function FavoritesSection() {
  return (
    <section id="favorites" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Sevdiği Şeyler</h2>
          <p className="text-lg text-sky-700/80 font-light">
            Küçük detaylar, bir insanı en güzel anlatan şeylerdir. Onun tebessümüne sebep olan, kalbini ısıtan o güzel ayrıntılar...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-sky-100/30 transition-all duration-300 border border-white/50 group flex items-start space-x-4"
            >
              <div className="flex-shrink-0 text-sky-400 group-hover:text-sky-600 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                  <path d="M12 12L12 2" />
                </svg>
              </div>
              <p className="text-slate-800 font-medium leading-relaxed text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
