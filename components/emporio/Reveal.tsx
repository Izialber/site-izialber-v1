'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

// Reveal de bloco disparado por scroll. Com movimento reduzido, só opacidade.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

// Grade ou lista com reveal escalonado. Usar RevealItem nos filhos.
export function RevealGroup({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol';
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li';
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}

// Orquestração única da carga do hero: filhos entram em sequência.
export function HeroSequence({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  );
}

export function HeroLine({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
