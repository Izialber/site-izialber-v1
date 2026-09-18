'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { href } from '@/config/emporio';
import { privacidade } from '@/content/emporio/privacidade';
import { readConsent, writeConsent } from './consent';
import { buttonClass } from './ui';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const t = privacidade.cookieBanner;

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  const choose = (value: 'granted' | 'denied') => {
    writeConsent(value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="region"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-4 bottom-4 z-30 mx-auto max-w-[44rem] rounded-sm border border-osso-100/10 bg-ebano-950 p-5 text-osso-100 shadow-[0_12px_32px_rgba(13,11,10,0.35)] sm:inset-x-6 sm:bottom-6 sm:p-6"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 16 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-small text-osso-200">
            {t.text}{' '}
            <Link href={href('/privacidade')} className="underline underline-offset-2 hover:text-osso-50">
              {t.more}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose('granted')} className={buttonClass('primary', 'px-6 py-3')}>
              {t.accept}
            </button>
            <button
              type="button"
              onClick={() => choose('denied')}
              className={buttonClass('outline-dark', 'px-6 py-3')}
            >
              {t.reject}
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
