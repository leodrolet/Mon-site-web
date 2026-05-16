import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Smartphone, RefreshCw, Paintbrush, Settings, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
              <div className="w-full h-full bg-secondary rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/leo.jpg"
                  alt="Léo Drolet"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Qui suis-je ?
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Passionné par la programmation et le design numérique, je me spécialise dans la création d'expériences web qui allient <span className="text-white">performance technique</span> et <span className="text-white">esthétique moderne</span>.
              </p>
              <p>
                Discipliné, ambitieux et orienté résultat, je ne me contente pas de coder des sites : je bâtis des outils de croissance pour les entreprises locales. Mon objectif est de transformer votre présence en ligne en un véritable avantage compétitif.
              </p>
              <p>
                Je m'efforce d'optimiser chaque pixel et chaque ligne de code pour garantir une expérience utilisateur fluide, rapide et intuitive.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <CheckCircle size={20} />
                <span>Rigueur</span>
              </div>
              <div className="flex items-center gap-2 text-accent font-semibold">
                <CheckCircle size={20} />
                <span>Ambition</span>
              </div>
              <div className="flex items-center gap-2 text-accent font-semibold">
                <CheckCircle size={20} />
                <span>Performance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    {
      title: "Création de site web",
      desc: "Développement de sites vitrines modernes et performants sur mesure.",
      icon: <Code size={32} />,
    },
    {
      title: "Refonte de site web",
      desc: "Modernisation de votre image numérique pour augmenter vos conversions.",
      icon: <RefreshCw size={32} />,
    },
    {
      title: "Site Entreprise Locale",
      desc: "Solutions optimisées pour le SEO local et l'acquisition de clients.",
      icon: <Laptop size={32} />,
    },
    {
      title: "Optimisation Mobile",
      desc: "Une expérience utilisateur parfaite sur tous les types d'écrans.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "Design Moderne",
      desc: "UI/UX haut de gamme inspirée des standards Apple et Vercel.",
      icon: <Paintbrush size={32} />,
    },
    {
      title: "Maintenance",
      desc: "Mises à jour régulières et support technique pour une tranquillité totale.",
      icon: <Settings size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Mes Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des solutions digitales haut de gamme pour propulser votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl glass group cursor-pointer transition-all duration-300 hover:border-accent/50"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
