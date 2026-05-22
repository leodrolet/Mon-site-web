import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

import studioOneHtml     from '../../public/previews/studio-one.html?raw';
import salonGatineauHtml from '../../public/previews/salon-gatineau/index.html?raw';
import garageGatineauHtml from '../../public/previews/garage-gatineau/standalone.html?raw';

interface Project {
  num: string;
  title: string;
  type: string;
  desc: string;
  srcdoc: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Studio One',
    type: 'Studio musical',
    desc: "Site vitrine premium pour un studio d'enregistrement professionnel.",
    srcdoc: studioOneHtml,
    accentColor: '#a8a6c8',
  },
  {
    num: '02',
    title: 'Salon Gatineau',
    type: 'Salon esthétique',
    desc: "Expérience luxueuse pour un salon d'esthétique haut de gamme.",
    srcdoc: salonGatineauHtml,
    accentColor: '#c4956a',
  },
  {
    num: '03',
    title: 'Garage Gatineau',
    type: 'Garage automobile',
    desc: 'Site moderne pour un garage avec présentation des services.',
    srcdoc: garageGatineauHtml,
    accentColor: '#f97316',
  },
];

/* ── Miniature live preview of a site ─────────────────────── */
const SitePreview = ({ srcdoc, title }: { srcdoc: string; title: string }) => {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(0.25);

  // Lazy-load: only render iframe once card enters viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Compute scale from wrapper width
  const measureScale = useCallback(() => {
    if (wrapperRef.current) {
      setScale(wrapperRef.current.offsetWidth / 1280);
    }
  }, []);

  useEffect(() => {
    measureScale();
    window.addEventListener('resize', measureScale);
    return () => window.removeEventListener('resize', measureScale);
  }, [measureScale]);

  const iframeH = Math.round(220 / scale); // enough to see top of site

  return (
    <div ref={wrapperRef} className="w-full h-full overflow-hidden relative bg-zinc-950">
      {show && (
        <iframe
          srcdoc={srcdoc}
          title={title}
          sandbox="allow-scripts"
          style={{
            width: '1280px',
            height: `${iframeH}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            pointerEvents: 'none',
            border: 'none',
            display: 'block',
          }}
        />
      )}
    </div>
  );
};

/* ── Main Portfolio component ──────────────────────────────── */
export const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => { if (e.data === 'closePortfolio') close(); };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function open(proj: Project) {
    setIframeReady(false);
    setActive(proj);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    setActive(null);
    document.body.style.overflow = '';
  }

  return (
    <>
      {/* ── SECTION ─────────────────────────────────────────── */}
      <section id="portfolio" className="py-32 bg-primary relative overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[0.65rem] font-semibold text-accent uppercase tracking-[0.5em] mb-5 block">
              Réalisations
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Entrez dans{' '}
              <span className="text-gradient">l'expérience</span>
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
              Trois projets réels. Cliquez pour naviguer dans le site complet.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                onClick={() => open(proj)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ '--accent': proj.accentColor } as React.CSSProperties}
              >
                {/* ── Live preview area ── */}
                <div className="h-52 relative overflow-hidden">
                  <SitePreview srcdoc={proj.srcdoc} title={proj.title} />

                  {/* Subtle dark gradient fade at bottom of preview */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 backdrop-blur-[3px]">
                    <div
                      className="flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.3em] uppercase px-6 py-3 rounded-full border backdrop-blur-md transition-transform duration-200 group-hover:scale-105"
                      style={{
                        borderColor: `${proj.accentColor}70`,
                        color: proj.accentColor,
                        background: `${proj.accentColor}15`,
                        boxShadow: `0 0 24px ${proj.accentColor}25`,
                      }}
                    >
                      <span>Entrer dans le site</span>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>

                {/* ── Info ── */}
                <div className="p-5 bg-zinc-950/90 border-t border-white/[0.05]">
                  <span
                    className="text-[0.56rem] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: proj.accentColor }}
                  >
                    {proj.type}
                  </span>
                  <h3 className="text-base font-bold mt-1.5 mb-1.5 text-white">{proj.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULLSCREEN IFRAME MODAL ───────────────────────────── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9000] flex flex-col"
            style={{ background: '#000' }}
          >
            {/* Top bar */}
            <div className="h-11 flex items-center justify-between px-5 bg-zinc-950 border-b border-white/[0.08] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: active.accentColor }}
                />
                <span className="text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-gray-300">
                  {active.title}
                </span>
              </div>
              <button
                onClick={close}
                className="flex items-center gap-2 text-[0.58rem] tracking-[0.25em] uppercase text-gray-600 hover:text-white transition-colors duration-200 group"
              >
                <span>Fermer</span>
                <X size={13} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Loading bar */}
            {!iframeReady && (
              <div className="h-[2px] bg-zinc-900 flex-shrink-0 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ background: active.accentColor }}
                  initial={{ width: '0%' }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            )}

            {/* Fullscreen iframe */}
            <iframe
              key={active.title}
              srcdoc={active.srcdoc}
              title={active.title}
              className="flex-1 w-full border-none"
              onLoad={() => setIframeReady(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
