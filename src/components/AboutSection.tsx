import { motion } from 'motion/react';
import { grandmotherData } from '../data/maviData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Onu Tanıyalım</h2>
            <p className="text-lg text-sky-700/80 mb-10 leading-relaxed font-light">
              Mavi Özer, hayatını ailesine ve sevdiklerine adamış, her koşulda yüzündeki tebessümü korumayı bilmiş kıymetli bir değerimiz. Onun hikayesi, sabrın ve sevginin en güzel örneğidir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Doğum Yeri", value: grandmotherData.birthPlace },
                { label: "Çocuk", value: grandmotherData.children.toString() },
                { label: "Torun", value: grandmotherData.grandchildren.toString() },
                { label: "Öne Çıkan Özelliği", value: grandmotherData.mainValue },
                { label: "En Sevdiği Kelime", value: grandmotherData.favoriteWord },
                { label: "Torunlarına Sözü", value: grandmotherData.grandchildrenPhrase }
              ].map((item, index) => (
                <div key={index} className="bg-white/40 p-5 rounded-2xl backdrop-blur-sm border border-white/50 shadow-xl shadow-sky-100/50">
                  <span className="block text-[10px] uppercase tracking-wider text-sky-500 font-bold mb-1">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-800">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full relative"
          >
            <div className="absolute inset-0 bg-sky-200 rounded-3xl transform rotate-3 scale-105 opacity-40"></div>
            <div className="relative bg-white/60 backdrop-blur-md p-12 rounded-3xl shadow-xl shadow-sky-100 border border-white/60 flex flex-col items-center justify-center text-center">
              <svg className="w-12 h-12 text-sky-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h3 className="font-serif text-3xl md:text-4xl text-sky-900 leading-snug mb-6 italic">
                "{grandmotherData.motto}"
              </h3>
              <p className="text-[10px] text-sky-500 uppercase tracking-widest font-bold">Hayat Mottosu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
