import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { photoGallery } from '../data/maviData';

export default function PhotoGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-sky-900 mb-6">Fotoğraflarla Mavi Özer</h2>
          <p className="text-lg text-sky-700/80 font-light max-w-2xl mx-auto">
            Yıllara meydan okuyan gülümsemeler, sevgi dolu bakışlar ve bir ailenin en kıymetli anları.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photoGallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div 
                className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-2 overflow-hidden cursor-pointer group shadow-xl shadow-sky-100/30 transition-all duration-500 border border-white/50"
                onClick={() => setSelectedImage(photo.src)}
              >
                <div className="rounded-2xl overflow-hidden relative w-full h-full aspect-square sm:aspect-auto sm:min-h-[250px] bg-sky-200">
                  {/* Placeholder visual when image is missing */}
                  <div className="absolute inset-0 flex items-center justify-center text-sky-400">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover relative z-10 opacity-0 group-hover:scale-105 transition-all duration-700"
                    onLoad={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/10 z-20 transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Büyütülmüş fotoğraf" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
