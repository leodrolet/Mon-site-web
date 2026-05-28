import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: <Search size={20} className="text-accent/70" />,
    title: 'Analyse du besoin',
    desc: "On discute de vos objectifs, de votre cible et de vos concurrents pour définir la meilleure stratégie de conversion.",
  },
  {
    n: '02',
    icon: <PenTool size={20} className="text-accent/70" />,
    title: 'Création du design',
    desc: "Je conçois une interface premium et minimaliste, optimisée pour l'expérience utilisateur et l'impact visuel.",
  },
  {
    n: '03',
    icon: <Rocket size={20} className="text-accent/70" />,
    title: 'Mise en ligne',
    desc: "Développement rapide, tests de performance et déploiement. Votre machine à leads est prête à capturer des clients.",
  },
];

const Process = () => (
  <section id="process" className="py-32 bg-black border-t border-white/[0.06]">
    <div className="container mx-auto px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">04</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Processus</span>
      </motion.div>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05]"
        >
          Comment ça{' '}
          <span className="text-gradient">fonctionne ?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 leading-relaxed self-end"
        >
          Un processus simple, transparent et efficace pour passer de l'idée au résultat.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-0 border border-white/[0.06] rounded-2xl overflow-hidden">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative p-8 md:p-10 bg-primary border-b md:border-b-0 md:border-r border-white/[0.06] last:border-0 group hover:bg-white/[0.02] transition-colors"
          >
            {/* Watermark number */}
            <div
              aria-hidden
              className="absolute bottom-4 right-6 text-[5rem] font-black leading-none text-white/[0.03] select-none pointer-events-none"
            >
              {s.n}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center bg-white/[0.02]">
                  {s.icon}
                </div>
                <span className="text-[11px] font-mono text-gray-700 tracking-wider">{s.n}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Process;
