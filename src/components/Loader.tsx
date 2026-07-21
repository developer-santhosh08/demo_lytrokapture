import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Keep loader active for 2.5 seconds to let the bouncing animation loop nicely
    const t = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="bouncing-loader" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
