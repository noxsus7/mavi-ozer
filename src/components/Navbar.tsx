import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Onu Tanıyalım", href: "#about" },
    { name: "Sevdikleri", href: "#favorites" },
    { name: "Bir Günü", href: "#dayflow" },
    { name: "Aile", href: "#family" },
    { name: "Çocukluk", href: "#childhood" },
    { name: "Sesinden Hatıralar", href: "#audio" },
    { name: "Fotoğraflar", href: "#gallery" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/30 backdrop-blur-md border-b border-white/40 py-4' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">M</div>
          <a href="#" className="font-serif text-xl tracking-widest uppercase font-light text-sky-900">Mavi Özer</a>
        </div>
        
        <nav className="hidden xl:flex space-x-8 items-center text-xs font-semibold uppercase tracking-wider text-sky-800">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-sky-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#notes" className="px-6 py-2 bg-sky-600 text-white rounded-full text-xs font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all">
            Sevgi Notu Bırak
          </a>
        </nav>

        <button className="xl:hidden text-slate-600 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d={mobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-md border-t border-sky-50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-sky-600 font-medium">
                  {link.name}
                </a>
              ))}
              <a href="#notes" onClick={() => setMobileMenuOpen(false)} className="text-center px-5 py-3 rounded-full bg-sky-100 text-sky-800 font-medium">
                Sevgi Notu Bırak
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
