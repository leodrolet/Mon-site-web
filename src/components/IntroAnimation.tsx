import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(false), 2600);
    const t2 = setTimeout(onComplete, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Horizontal sweep line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            className="absolute w-full h-px bg-accent/20 origin-left"
          />

          {/* Brand */}
          <div className="relative z-10 text-center px-6">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-baseline justify-center gap-[0.15em]"
              >
                <span className="text-[clamp(2.8rem,9vw,5.5rem)] font-black tracking-[-0.04em] text-white leading-none">
                  NOVIO
                </span>
                <span className="text-[clamp(2.8rem,9vw,5.5rem)] font-black tracking-[-0.04em] text-accent leading-none">
                  STUDIO
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.05 }}
              className="text-[11px] text-gray-600 uppercase tracking-[0.45em] mt-5"
            >
              Développeur Web · Gatineau, Québec
            </motion.p>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.45, delay: 0.1, ease: 'linear' }}
            className="absolute bottom-0 left-0 h-px w-full bg-accent/35 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
