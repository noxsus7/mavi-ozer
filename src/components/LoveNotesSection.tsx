import { useState } from 'react';
import { motion } from 'motion/react';
import { initialLoveNotes } from '../data/maviData';

export default function LoveNotesSection() {
  const [notes, setNotes] = useState(initialLoveNotes);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    
    setNotes([{ id: Date.now(), name, text }, ...notes]);
    setName('');
    setText('');
  };

  return (
    <section id="notes" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Sevgi Notları</h2>
          <p className="text-lg text-sky-700/80 font-light max-w-2xl mx-auto">
            Ona söylemek istediğiniz, içinizden geçen güzel sözleri buraya bırakabilirsiniz.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-sky-100/50 border border-white/60 h-fit sticky top-24"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-900 mb-6">Not Bırak</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-500 mb-1">Adınız</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-sky-200 transition-shadow text-slate-800 text-sm font-medium"
                  placeholder="İsminiz..."
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-500 mb-1">Sevgi Notunuz</label>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-sky-200 transition-shadow h-32 resize-none text-slate-800 text-sm font-medium"
                  placeholder="İyi ki varsın..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-sky-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all uppercase tracking-wider"
              >
                Gönder
              </button>
            </form>
          </motion.div>

          {/* Notes Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl shadow-xl shadow-sky-100/30 border border-white/50 relative overflow-hidden group"
                >
                  {/* Decorative quote mark */}
                  <div className="absolute -top-4 -right-2 text-8xl text-white font-serif opacity-70 select-none">"</div>
                  
                  <p className="text-sky-900 leading-relaxed mb-6 relative z-10 font-light italic text-sm">
                    "{note.text}"
                  </p>
                  <p className="text-sky-600 font-bold text-xs text-right relative z-10 uppercase tracking-widest">
                    — {note.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
