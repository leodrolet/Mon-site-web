import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });
  const height = useTransform(spring, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="fixed left-2 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1.5"
      aria-hidden="true"
    >
      <div
        className="rounded-full"
        style={{ width: '6px', height: '6px', background: 'rgba(249,115,22,0.4)' }}
      />
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          width: '6px',
          height: '60vh',
          background: 'rgba(249,115,22,0.08)',
        }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full"
          style={{
            height,
            background: 'linear-gradient(to bottom, rgba(249,115,22,0.2), rgba(249,115,22,0.9))',
            boxShadow: '0 0 10px rgba(249,115,22,0.4), 0 0 4px rgba(249,115,22,0.7)',
          }}
        />
      </div>
      <div
        className="rounded-full"
        style={{ width: '6px', height: '6px', background: 'rgba(249,115,22,0.4)' }}
      />
    </motion.div>
  );
}
