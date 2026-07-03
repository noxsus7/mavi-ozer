import { motion } from 'motion/react';
import { familyItems } from '../data/maviData';

export default function FamilySection() {
  return (
    <section id="family" className="py-24 bg-sky-900 text-sky-50 relative overflow-hidden z-10">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-700 via-sky-800 to-sky-950 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Aile Sıcaklığı</h2>
          <p className="text-lg text-sky-200/80 font-light max-w-2xl mx-auto italic">
            Bir sofrada, bir bayram sabahında, bir "canlarım benim" sözünde gizli olan o eşsiz bağ...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all"
            >
              <p className="text-[10px] text-sky-300 uppercase tracking-widest font-bold mb-2">{item.label}</p>
              <p className="text-2xl text-white font-serif">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
