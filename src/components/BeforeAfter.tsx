import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const before = [
  "Trop d'informations dispersées",
  'Navigation confuse',
  "Appels à l'action invisibles",
  'Design daté et générique',
];

const after = [
  'Message clair et percutant',
  'Parcours utilisateur linéaire',
  'CTA stratégiques et visibles',
  'Design premium et moderne',
];

const BeforeAfter = () => (
  <section id="comparison" className="py-32 bg-black border-t border-white/[0.06]">
    <div className="container mx-auto px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">02</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Comparaison</span>
      </motion.div>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05]"
        >
          L'impact d'une{' '}
          <span className="text-gradient">Optimisation</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 leading-relaxed self-end"
        >
          Ne laissez pas vos visiteurs partir faute de clarté. Comparez la différence.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 border border-white/[0.06] rounded-2xl overflow-hidden">

        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.06]"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center">
              <X size={12} className="text-red-500/60" />
            </div>
            <span className="text-xs font-mono text-gray-600 uppercase tracking-[0.25em]">Sans landing page</span>
          </div>

          <div className="space-y-3 mb-10">
            {before.map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                <X size={14} className="text-red-500/40 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.05]">
            <p className="text-sm text-gray-600 italic">"Je ne sais pas vraiment ce que propose cette entreprise..."</p>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-accent/[0.02]"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 rounded-full border border-accent/40 flex items-center justify-center">
              <Check size={12} className="text-accent/80" />
            </div>
            <span className="text-xs font-mono text-accent/60 uppercase tracking-[0.25em]">Avec optimisation</span>
          </div>

          <div className="space-y-3 mb-10">
            {after.map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={14} className="text-accent/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-accent/10">
            <p className="text-sm text-accent/70 italic">"C'est exactement ce qu'il me faut, je commande maintenant !"</p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default BeforeAfter;
