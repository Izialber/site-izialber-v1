'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Só anima em navegações internas. No primeiro carregamento o HTML estático
// já chega visível, sem opacity:0 esperando o JS.
let navigatedOnce = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [animate] = useState(() => navigatedOnce);

  useEffect(() => {
    navigatedOnce = true;
  }, []);

  if (!animate || reduce) return <>{children}</>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
      {children}
    </motion.div>
  );
}
