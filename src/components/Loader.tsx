import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND = ['L', 'Y', 'T', 'R', 'O'];
const BRAND2 = ['K', 'A', 'P', 'T', 'U', 'R', 'E'];

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    // Fast at start, slows near end for drama
    const tick = () => {
      const increment = current < 60 ? 3 : current < 85 ? 1.5 : 0.8;
      current = Math.min(current + increment, 100);
      setProgress(Math.floor(current));
      if (current < 100) {
        setTimeout(tick, current < 60 ? 30 : current < 85 ? 45 : 60);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 400);
      }
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
            />
          </div>

          {/* Aperture / Shutter SVG Animation */}
          <div className="relative mb-10">
            {/* Outer ring pulse */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-[#F59E0B]/30"
              style={{ margin: '-16px' }}
            />

            {/* Rotating aperture */}
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            >
              {/* Aperture blades — 6 blades */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.path
                  key={i}
                  d="M40 40 L40 10 A30 30 0 0 1 66 25 Z"
                  fill="#F59E0B"
                  opacity={0.15 + (i % 2) * 0.1}
                  transform={`rotate(${angle} 40 40)`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 + (i % 2) * 0.1 }}
                  transition={{ delay: i * 0.08 }}
                />
              ))}

              {/* Inner circle (lens) */}
              <circle cx="40" cy="40" r="14" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="5" fill="#F59E0B" />

              {/* Outer ring */}
              <circle cx="40" cy="40" r="36" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" />
            </motion.svg>

            {/* Slow counter-rotating inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle
                  cx="40" cy="40" r="30"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="0.5"
                  strokeDasharray="2 8"
                  opacity="0.4"
                />
              </svg>
            </motion.div>
          </div>

          {/* Brand name — staggered letter reveal */}
          <div className="flex items-center gap-3 mb-3">
            {/* LYTRO */}
            <div className="flex">
              {BRAND.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display font-bold text-3xl text-white tracking-wider"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Separator dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"
            />

            {/* KAPTURE */}
            <div className="flex">
              {BRAND2.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="font-display font-bold text-3xl text-[#F59E0B] tracking-wider"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-[#94A3B8] text-[10px] tracking-[0.45em] uppercase mb-10"
          >
            Fotography   Studio
          </motion.p>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-52 h-[2px] bg-[#1E293B] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #D97706, #F59E0B, #FCD34D)',
                  boxShadow: '0 0 8px rgba(245,158,11,0.6)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.span
              className="text-[#F59E0B] text-xs font-mono tracking-widest"
            >
              {String(progress).padStart(3, '0')}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
