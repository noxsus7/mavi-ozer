export default function Footer() {
  return (
    <footer className="relative z-50 px-12 py-10 bg-white/20 backdrop-blur-sm border-t border-white/40 flex flex-col items-center mt-12">
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-[10px] uppercase font-bold tracking-widest text-sky-800 opacity-60">En Sevdikleri</div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-4 py-1.5 bg-white/40 rounded-full text-[10px] font-bold text-sky-900 border border-white/50">Mantı</span>
            <span className="px-4 py-1.5 bg-white/40 rounded-full text-[10px] font-bold text-sky-900 border border-white/50">Orkide</span>
            <span className="px-4 py-1.5 bg-white/40 rounded-full text-[10px] font-bold text-sky-900 border border-white/50">Limonlu Çay</span>
          </div>
        </div>
        <div className="text-xs font-light text-sky-900 italic text-center md:text-right">
          Mavi Özer için sevgiyle hazırlandı.
        </div>
      </div>
    </footer>
  );
}
