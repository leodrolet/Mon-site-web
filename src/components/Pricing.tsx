import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const hero = {
  name: "Landing Page",
  price: "999",
  features: [
    "Design premium sur mesure",
    "Optimisation mobile complète",
    "Formulaire de contact intégré",
    "Hébergement & mise en ligne",
    "Optimisation de la vitesse",
    "2 révisions incluses",
    "Livraison en 7 jours",
  ],
};

const others = [
  {
    name: "Site Vitrine",
    price: "1 899",
    features: [
      "Tout inclus dans la Landing Page",
      "Jusqu'à 5 pages personnalisées",
      "SEO optimisé par page",
      "Design sur mesure complet",
      "3 révisions incluses",
      "Support 30 jours inclus",
      "Livraison en 2 à 3 semaines",
    ],
  },
  {
    name: "Site Web Complet",
    price: "3 999",
    features: [
      "Tout inclus dans le Site Vitrine",
      "Architecture d'information avancée",
      "Blog ou portfolio intégré",
      "Intégration formulaire, calendrier ou carte",
      "SEO avancé multi-pages",
      "Panel admin pour modifier le contenu",
      "Support prioritaire 60 jours inclus",
      "Livraison en 2 à 3 semaines",
    ],
  },
  {
    name: "Refonte Complète",
    price: "3 699",
    features: [
      "Audit complet de l'existant",
      "Migration de tout le contenu",
      "Redirections 301 incluses",
      "Nouveau design from scratch",
      "Optimisation des performances (Core Web Vitals)",
      "SEO optimisé par page",
      "Formation & documentation incluse",
      "Support 30 jours inclus",
      "Livraison en 2 à 4 semaines",
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-32 border-t border-white/[0.06]">
    <div className="container mx-auto px-6 lg:px-12">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[10px] text-[#444] tracking-[0.3em]">06</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
        <span className="font-mono text-[10px] text-[#444] uppercase tracking-[0.3em]">Tarifs</span>
      </motion.div>

      {/* Header */}
      <div className="grid md:grid-cols-[7fr_5fr] gap-8 mb-16 items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-white"
        >
          Investissement transparent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#666] text-base leading-relaxed"
        >
          Pas de surprise. Un prix clair pour un résultat premium.
        </motion.p>
      </div>

      {/* ── Hero plan — Landing Page ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/[0.06] rounded-lg overflow-hidden mb-3"
      >
        {/* Accent top rule */}
        <div className="h-px bg-accent/40" />

        <div className="grid md:grid-cols-[4fr_8fr]">
          {/* Left — price */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] text-accent/60 uppercase tracking-[0.3em] block mb-4">
                Produit phare
              </span>
              <p className="text-[#555] text-xs uppercase tracking-[0.2em] mb-3">{hero.name}</p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display text-[3.5rem] leading-none text-white">{hero.price}</span>
                <span className="text-accent text-2xl font-medium">$</span>
              </div>
              <p className="text-[#555] text-xs">À partir de · Devis gratuit</p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Démarrer mon projet <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — features */}
          <div className="p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {hero.features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2.5 text-[#999] text-sm"
                >
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ── Other plans ── */}
      <div className="mb-2">
        <p className="font-mono text-[10px] text-[#444] uppercase tracking-[0.3em] py-5">
          Besoin de plus ?
        </p>
      </div>

      <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
        {others.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="grid md:grid-cols-[3fr_6fr_3fr] gap-6 py-8 group hover:bg-white/[0.015] transition-colors px-2 -mx-2 rounded items-start"
          >
            {/* Plan name + price */}
            <div>
              <p className="text-[#555] text-xs uppercase tracking-[0.2em] mb-2">{plan.name}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl text-white">{plan.price}</span>
                <span className="text-accent text-lg">$</span>
              </div>
            </div>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {plan.features.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#666] text-xs leading-relaxed">
                  <CheckCircle2 size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex md:justify-end items-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/[0.1] text-[#aaa] text-sm font-medium rounded-lg hover:border-white/25 hover:text-white transition-all group-hover:border-white/20"
              >
                Démarrer <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Pricing;
