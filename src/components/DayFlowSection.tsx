import { motion } from 'motion/react';
import { dayFlow } from '../data/maviData';

export default function DayFlowSection() {
  return (
    <section id="dayflow" className="py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Bir Günü</h2>
          <p className="text-lg text-sky-700/80 font-light">Sabah mavisinden akşamın huzuruna uzanan güzel bir gün akışı.</p>
        </motion.div>

        <div className="relative border-l border-sky-200 ml-4 md:ml-0 md:border-l-0">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sky-200 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {dayFlow.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[calc(-21px)] md:static md:w-3.5 md:h-3.5 flex-shrink-0 bg-sky-500 ring-4 ring-white rounded-full md:mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-3.5 h-3.5 mt-2.5 md:mt-0"></div>
                  
                  {/* Content Box */}
                  <div className={`ml-8 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl shadow-sky-100 border border-white/60 hover:shadow-2xl hover:shadow-sky-200/50 transition-shadow">
                      <span className="block text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-2">
                        {step.time}
                      </span>
                      <h3 className="font-serif text-2xl text-sky-900 mb-2">{step.title}</h3>
                      <p className="text-slate-800 text-sm font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
