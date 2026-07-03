import { motion } from 'motion/react';
import { characterTraits } from '../data/maviData';

export default function CharacterSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Onu Güzel Yapan Şeyler</h2>
          <p className="text-lg text-sky-700/80 font-light">
            Bir insanın kalbi nasıl güzel olursa, etrafına yaydığı ışık da o kadar parlak olur.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {characterTraits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 bg-white/40 backdrop-blur-sm rounded-full border border-white/50 text-sky-900 text-sm font-semibold shadow-xl shadow-sky-100/40 hover:bg-white/60 transition-all cursor-default"
            >
              {trait}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
