import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const QUESTIONS = [
  {
    q: 'Combien coûte un site web à Gatineau ?',
    a: 'Le prix dépend de votre projet. Une landing page performante commence à partir de 999 $, un site vitrine complet à partir de 1 899 $. Je fournis toujours un devis gratuit et détaillé avant de commencer — aucune surprise.',
  },
  {
    q: "Est-ce qu'un site web aide vraiment à avoir plus de clients locaux ?",
    a: "Oui — à condition que le site soit optimisé pour le SEO local. Un site rapide, bien structuré et mentionnant votre région (Gatineau, Outaouais, Ottawa) permet d'apparaître dans les résultats Google quand vos clients cherchent vos services près de chez eux.",
  },
  {
    q: 'Quelle est la différence entre une landing page et un site vitrine ?',
    a: "Une landing page est une page unique centrée sur un seul objectif : convertir un visiteur en prospect (formulaire de contact, appel téléphonique, achat). Un site vitrine est multi-pages et présente l'ensemble de votre entreprise : services, à propos, portfolio, contact.",
  },
  {
    q: 'Vous servez quelles régions ?',
    a: 'Je travaille principalement avec des entreprises à Gatineau, Hull, Aylmer, Ottawa, Kanata et Orléans. Je peux aussi travailler avec des clients partout au Québec et en Ontario — tout se fait en ligne.',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">06</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">FAQ</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="md:sticky md:top-28">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05]"
            >
              Tout ce que vous voulez{' '}
              <span className="text-gradient">savoir</span>
            </motion.h2>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-white/[0.06]">
            {QUESTIONS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-200 leading-snug">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 text-gray-600 group-hover:text-accent transition-colors">
                    {open === i ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
