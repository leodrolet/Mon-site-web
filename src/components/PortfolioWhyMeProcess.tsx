import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, Shield, Timer, TrendingUp } from 'lucide-react';

export const Portfolio = () => {
  const projects = [
    {
      title: "Le Gourmet Local",
      category: "Restaurant",
      desc: "Site vitrine avec menu interactif et réservation en ligne.",
      image: "https://images.unsplash.com/photo-1517248385312-53f02177d72e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Iron Gym Studio",
      category: "Fitness",
      desc: "Plateforme de gestion d'abonnements et planning d'entraînements.",
      image: "https://images.unsplash.com/photo-1534438327276-14dd45a12819?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Clinique Dentaire",
      category: "Santé",
      desc: "Interface épurée et professionnelle avec prise de RDV optimisée.",
      image: "https://images.unsplash.com/photo-1629909613654-28f1504cf456?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Luxe Boutique",
      category: "E-commerce",
      desc: "Boutique haut de gamme avec expérience d'achat immersive.",
      image: "https://images.unsplash.com/photo-1441986300917-6bcr-5d89e7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Portfolio Executive",
      category: "Professionnel",
      desc: "Site personnel pour consultant senior en stratégie.",
      image: "https://images.unsplash.com/photo-1460925895917-cfm8a256029a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Eco-Garden",
      category: "Services",
      desc: "Site optimisé pour le SEO local d'une entreprise de paysagisme.",
      image: "https://images.unsplash.com/photo-1585320806297-53559ae5977a?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Portfolio</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une sélection de projets conçus pour maximiser l'impact visuel et l'efficacité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{proj.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{proj.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{proj.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                  Voir le projet <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyMe = () => {
  const benefits = [
    { title: "Communication Rapide", desc: "Réponses réactives et suivi transparent tout au long du projet.", icon: <Timer size={24} /> },
    { title: "Design Moderne", desc: "Une esthétique haut de gamme qui inspire confiance et professionnalisme.", icon: <TrendingUp size={24} /> },
    { title: "Vitesse Optimisée", desc: "Sites ultra-rapides pour un meilleur référencement et une UX fluide.", icon: <Zap size={24} /> },
    { title: "Approche Pro", desc: "Une méthodologie rigoureuse basée sur vos objectifs business.", icon: <Shield size={24} /> },
  ];

  const stats = [
    { label: "Projets Réalisés", value: "50+", icon: <TrendingUp size={20} /> },
    { label: "Satisfaction Client", value: "100%", icon: <CheckCircle size={20} /> },
    { label: "Temps de Réponse", value: "< 24h", icon: <Timer size={20} /> },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Pourquoi travailler avec moi ?</h2>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="text-accent">{b.icon}</div>
                  <div>
                    <h4 className="font-bold">{b.title}</h4>
                    <p className="text-gray-400 text-sm">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl glass text-center group hover:border-accent/50 transition-all"
              >
                <div className="inline-block p-3 bg-accent/10 rounded-full text-accent mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div className="text-4xl font-black mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    { step: "01", title: "Discussion", desc: "On analyse vos besoins et vos objectifs business." },
    { step: "02", title: "Planification", desc: "Je crée l'arborescence et la stratégie de contenu." },
    { step: "03", title: "Design", desc: "Création d'une maquette visuelle moderne et élégante." },
    { step: "04", title: "Développement", desc: "Codage optimisé avec les dernières technologies." },
    { step: "05", title: "Livraison", desc: "Mise en ligne, tests finaux et formation rapide." },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Mon Processus</h2>
        <div className="relative flex flex-col md:flex-row justify-between gap-8">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary border-2 border-accent flex items-center justify-center font-bold mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {step.step}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function CheckCircle({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="9 11 12 13 22 4"></polyline></svg>;
}
