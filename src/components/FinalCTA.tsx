import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => (
  <section className="relative overflow-hidden border-t border-white/[0.06]">
    {/* Subtle orange tint */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
    />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

    <div className="container mx-auto px-6 py-32 md:py-40 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[11px] font-mono text-accent/60 uppercase tracking-[0.4em] mb-8">
          Prêt à commencer ?
        </p>

        <h2 className="text-[clamp(2.4rem,7vw,5rem)] font-black tracking-[-0.03em] leading-[0.97] mb-8 max-w-3xl mx-auto">
          Chaque jour sans site web
          <br className="hidden md:block" />
          est un client{' '}
          <span className="text-gradient">chez la concurrence.</span>
        </h2>

        <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Que vous ayez besoin d'une landing page, d'un site vitrine ou d'une refonte complète — passons ensemble à l'étape supérieure.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-xl shadow-orange-500/20 text-base"
        >
          Commencer maintenant
          <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
