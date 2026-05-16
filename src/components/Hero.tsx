import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full glass text-xs font-medium text-accent mb-6 inline-block">
            Disponible pour nouveaux projets
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6">
            LÉO <span className="text-gradient">DROLET</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
            Développeur Web Freelance
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            Je crée des sites web modernes, rapides et professionnels pour aider les entreprises locales à se démarquer et à convertir leurs visiteurs en clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all"
            >
              Voir mes projets <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              Faire une demande <MousePointer2 size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
