import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const Hero = () => {
  const bgRef      = useRef<HTMLDivElement>(null);
  const h1Ref      = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctasRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const section = document.getElementById('home');
    if (!section) return;

    const layers = [
      { ref: bgRef,   xF:  0.018, yF:  0.012 },
      { ref: h1Ref,   xF: -0.012, yF: -0.008 },
      { ref: subRef,  xF: -0.007, yF: -0.005 },
      { ref: ctasRef, xF: -0.005, yF: -0.003 },
    ];

    let rafId: number;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - window.innerWidth / 2;
      const dy = e.clientY - window.innerHeight / 2;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        layers.forEach(({ ref, xF, yF }) => {
          if (!ref.current) return;
          ref.current.style.transition = 'transform 0.12s linear';
          ref.current.style.transform = `translate(${dx * xF}px,${dy * yF}px)`;
        });
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(rafId);
      layers.forEach(({ ref }) => {
        if (!ref.current) return;
        ref.current.style.transition = 'transform 0.5s ease';
        ref.current.style.transform = 'translate(0,0)';
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    section.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div id="home">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">

        {/* Background — one radial gradient, no blobs */}
        <div ref={bgRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div
            className="absolute inset-0 opacity-100"
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 65%)' }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="w-4 h-px bg-accent/60" />
            <span className="text-[11px] font-medium text-accent/80 uppercase tracking-[0.35em]">
              Développeur Web · Gatineau, Québec
            </span>
            <span className="w-4 h-px bg-accent/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            ref={h1Ref}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-[clamp(2.6rem,7vw,5.25rem)] font-black leading-[0.96] tracking-[-0.03em] mb-8 text-white"
          >
            Votre prochain client à Gatineau
            <br />
            vous cherche en ligne —{' '}
            <span className="text-gradient">trouvez-le en premier.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            ref={subRef}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed mb-12"
          >
            Développeur web freelance basé à Gatineau, je crée des sites rapides et optimisés pour les PME de l'Outaouais et d'Ottawa — livrés en&nbsp;14&nbsp;jours, garantis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            ref={ctasRef}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Obtenir mon devis gratuit
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Voir les réalisations
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-white/[0.06]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] max-w-2xl mx-auto">
            {[
              { icon: <TrendingUp size={14} />, value: '14 jours', label: 'Délai de livraison', sub: 'Garanti par contrat' },
              { icon: <ShieldCheck size={14} />, value: 'Illimitées', label: 'Révisions', sub: "Jusqu'à votre satisfaction" },
              { icon: <Users size={14} />, value: '30 jours', label: 'Support inclus', sub: 'Après la mise en ligne' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="py-8 px-6 text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-2 text-accent/60">
                  {s.icon}
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-600">{s.label}</span>
                </div>
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-700 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
