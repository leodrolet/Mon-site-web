import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Paintbrush, Settings, TrendingUp, Zap, Check } from 'lucide-react';

export const About = () => (
  <section id="about" className="py-32 border-t border-white/[0.06]">
    <div className="container mx-auto px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">05</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">À propos</span>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-secondary">
            <img
              src="/leo.jpg"
              alt="Léo Drolet"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          {/* Subtle accent corner */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl border border-accent/20 -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05] mb-8">
            Qui suis-je ?
          </h2>

          <div className="space-y-5 text-gray-500 text-base leading-relaxed">
            <p>
              Basé à <span className="text-gray-200">Gatineau, Québec</span>, je travaille avec des entrepreneurs et des PME de l'<span className="text-gray-200">Outaouais</span> et de la <span className="text-gray-200">région d'Ottawa</span> pour bâtir leur présence en ligne.
            </p>
            <p>
              Discipliné, ambitieux et orienté résultat, je ne me contente pas de coder des sites : je bâtis des outils de croissance pour les entreprises locales. Mon objectif est de transformer votre présence en ligne en un véritable avantage compétitif.
            </p>
            <p>
              Je m'efforce d'optimiser chaque pixel et chaque ligne de code pour garantir une expérience utilisateur fluide, rapide et intuitive.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {['Rigueur', 'Ambition', 'Performance'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02]">
                <Check size={13} className="text-accent/70" />
                <span className="text-sm font-semibold text-gray-300">{tag}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

const services = [
  { title: 'Sites Web Complets', desc: 'Des sites multi-pages sur mesure pour une présence en ligne professionnelle et complète.', icon: <Laptop size={18} /> },
  { title: 'Landing Pages Modernes', desc: 'Des pages haute-conversion conçues pour transformer vos visiteurs en clients fidèles.', icon: <Code size={18} /> },
  { title: 'Design Professionnel', desc: 'Une esthétique premium et minimaliste qui renforce instantanément votre crédibilité.', icon: <Paintbrush size={18} /> },
  { title: 'Intégration Formulaires', desc: 'Collecte de leads optimisée avec notifications instantanées et gestion automatisée.', icon: <Settings size={18} /> },
  { title: 'SEO Local Gatineau', desc: 'Optimisation pour apparaître en premier quand vos clients à Gatineau et Ottawa vous cherchent sur Google.', icon: <TrendingUp size={18} /> },
  { title: 'Performance Rapide', desc: 'Temps de chargement ultra-rapide pour réduire le taux de rebond et booster le SEO.', icon: <Zap size={18} /> },
];

export const Services = () => (
  <section id="services" className="py-32 bg-black border-t border-white/[0.06]">
    <div className="container mx-auto px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">03</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">Services</span>
      </motion.div>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[1.05]"
        >
          Ce que <span className="text-gradient">je fais</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 leading-relaxed self-end"
        >
          Une approche complète pour transformer votre présence en ligne en machine à leads.
        </motion.p>
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-2 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex items-start gap-4 p-7 md:p-8 bg-black hover:bg-white/[0.02] transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5 text-accent/60 group-hover:text-accent group-hover:border-accent/30 transition-all">
              {s.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
