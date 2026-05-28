import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Paintbrush, Settings, TrendingUp, Zap } from 'lucide-react';

/* ── Section eyebrow ── */
const Eyebrow = ({ n, label }: { n: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-16"
  >
    <span className="font-mono text-[10px] text-[#444] tracking-[0.3em]">{n}</span>
    <span className="flex-1 h-px bg-white/[0.06]" />
    <span className="font-mono text-[10px] text-[#444] uppercase tracking-[0.3em]">{label}</span>
  </motion.div>
);

/* ── About ── */
export const About = () => (
  <section id="about" className="py-32 border-t border-white/[0.06]">
    <div className="container mx-auto px-6 lg:px-12">
      <Eyebrow n="05" label="À propos" />

      {/* Grille asymétrique 5/7 */}
      <div className="grid md:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/[0.08] bg-secondary">
            <img
              src="/leo.jpg"
              alt="Léo Drolet"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          {/* Accent corner — un seul, discret */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-accent/20 rounded-md -z-10" />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pt-4"
        >
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-white mb-8">
            Qui suis-je ?
          </h2>

          <div className="space-y-5 text-[#777] text-base leading-relaxed">
            <p>
              Basé à <span className="text-[#ccc]">Gatineau, Québec</span>, je travaille avec des entrepreneurs
              et des PME de l'<span className="text-[#ccc]">Outaouais</span> et de la{' '}
              <span className="text-[#ccc]">région d'Ottawa</span> pour bâtir leur présence en ligne.
            </p>
            <p>
              Discipliné, ambitieux et orienté résultat, je ne me contente pas de coder des sites :
              je bâtis des outils de croissance pour les entreprises locales. Mon objectif est de
              transformer votre présence en ligne en un véritable avantage compétitif.
            </p>
            <p>
              Je m'efforce d'optimiser chaque pixel et chaque ligne de code pour garantir une
              expérience utilisateur fluide, rapide et intuitive.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {['Rigueur', 'Ambition', 'Performance'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium border border-white/[0.1] text-[#999] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ── Services ── */
const services = [
  { n: '01', title: 'Sites Web Complets',     desc: 'Des sites multi-pages sur mesure pour une présence en ligne professionnelle et complète.',                               icon: <Laptop size={16} /> },
  { n: '02', title: 'Landing Pages Modernes', desc: 'Des pages haute-conversion conçues pour transformer vos visiteurs en clients fidèles.',                                   icon: <Code size={16} /> },
  { n: '03', title: 'Design Professionnel',   desc: 'Une esthétique premium et minimaliste qui renforce instantanément votre crédibilité.',                                    icon: <Paintbrush size={16} /> },
  { n: '04', title: 'Intégration Formulaires',desc: 'Collecte de leads optimisée avec notifications instantanées et gestion automatisée.',                                     icon: <Settings size={16} /> },
  { n: '05', title: 'SEO Local Gatineau',     desc: 'Optimisation pour apparaître en premier quand vos clients à Gatineau et Ottawa vous cherchent sur Google.',               icon: <TrendingUp size={16} /> },
  { n: '06', title: 'Performance Rapide',     desc: 'Temps de chargement ultra-rapide pour réduire le taux de rebond et booster le SEO.',                                     icon: <Zap size={16} /> },
];

export const Services = () => (
  <section id="services" className="py-32 border-t border-white/[0.06]">
    <div className="container mx-auto px-6 lg:px-12">
      <Eyebrow n="03" label="Services" />

      {/* Header asymétrique 7/5 */}
      <div className="grid md:grid-cols-[7fr_5fr] gap-8 mb-16 items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-white"
        >
          Ce que <em className="not-italic text-gradient">je fais</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#666] text-base leading-relaxed"
        >
          Une approche complète pour transformer votre présence en ligne en machine à leads.
        </motion.p>
      </div>

      {/* Liste numérotée — 2 colonnes desktop */}
      <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="grid md:grid-cols-[7fr_5fr] gap-6 py-7 group hover:bg-white/[0.015] transition-colors px-2 -mx-2 rounded"
          >
            <div className="flex items-start gap-5">
              <span className="font-mono text-[10px] text-[#444] mt-1 w-6 flex-shrink-0">{s.n}</span>
              <div className="flex items-center gap-3">
                <span className="text-[#555] group-hover:text-accent transition-colors flex-shrink-0">{s.icon}</span>
                <h3 className="text-sm font-semibold text-[#ddd] group-hover:text-white transition-colors">{s.title}</h3>
              </div>
            </div>
            <p className="text-[#666] text-sm leading-relaxed md:pl-0 pl-11">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
