import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: <Target size={16} className="text-accent/70" />,
    title: 'Plus de clients',
    description: "Une structure optimisée pour capturer l'attention et transformer chaque visiteur en prospect qualifié.",
  },
  {
    icon: <Zap size={16} className="text-accent/70" />,
    title: 'Image de marque premium',
    description: "Un design haut de gamme qui inspire confiance instantanément et positionne votre entreprise comme leader.",
  },
  {
    icon: <TrendingUp size={16} className="text-accent/70" />,
    title: 'Plus de rendez-vous',
    description: "Réduisez la friction : un chemin clair et direct vers la prise de contact ou la réservation.",
  },
  {
    icon: <Rocket size={16} className="text-accent/70" />,
    title: 'Marketing efficace',
    description: "Maximisez vos campagnes pubs (Facebook, Google Ads) avec une page dédiée dont le seul but est la conversion.",
  },
];

const WhyLandingPage = () => (
  <section id="why" className="py-32 border-t border-white/[0.06]">
    <div className="container mx-auto px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">01</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Pourquoi</span>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left — sticky title */}
        <div className="md:sticky md:top-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05] mb-6"
          >
            Pourquoi une{' '}
            <span className="text-gradient">Landing Page ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-base leading-relaxed max-w-sm"
          >
            Contrairement à un site web classique qui peut perdre le visiteur dans un labyrinthe de pages, une landing page est un instrument de précision.
            Elle est conçue pour une seule chose : <span className="text-gray-300">la conversion</span>.
          </motion.p>
        </div>

        {/* Right — numbered reasons */}
        <div className="divide-y divide-white/[0.06]">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="py-7 flex items-start gap-5 group"
            >
              <span className="text-[11px] font-mono text-gray-700 mt-0.5 w-5 flex-shrink-0">
                0{i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  {r.icon}
                  <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors duration-200">
                    {r.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-20 pt-16 border-t border-white/[0.06]"
      >
        <div className="flex gap-6 max-w-3xl">
          <div className="w-0.5 flex-shrink-0 bg-accent/40 rounded-full" />
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            En éliminant les distractions et en guidant l'utilisateur vers un appel à l'action unique et puissant,
            nous augmentons drastiquement les chances qu'un visiteur devienne client. C'est la différence
            entre "avoir un site" et "avoir un business qui génère des revenus".
          </p>
        </div>
      </motion.div>

    </div>
  </section>
);

export default WhyLandingPage;
