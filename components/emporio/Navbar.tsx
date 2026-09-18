'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { NAV, company, href } from '@/config/emporio';
import { buttonClass, container } from './ui';

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (path: string) => pathname?.startsWith(href(path));
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? 'bg-ebano-950/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className={`${container} flex h-[72px] items-center justify-between gap-8`}>
        <Link
          href={href('/')}
          className="font-emporio-serif text-[1.375rem] leading-none text-osso-50"
          aria-label={`${company.name}, página inicial`}
        >
          Empório do Couro
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV.filter((i) => i.path !== '/contato').map((item) => (
              <li key={item.path}>
                <Link
                  href={href(item.path)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                  className={`border-b-2 pb-1 text-small transition-colors duration-150 ${
                    isActive(item.path)
                      ? 'border-dourado text-osso-50'
                      : 'border-transparent text-osso-200 hover:text-osso-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href={href('/contato')} className={buttonClass('primary', 'px-6 py-3')}>
            Solicitar orçamento
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-osso-50 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform duration-200 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-6 bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-6 bg-current transition-transform duration-200 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="menu-mobile"
            aria-label="Principal"
            className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ebano-950 lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={`${container} flex flex-col py-6`}>
              {NAV.map((item) => (
                <li key={item.path} className="border-b border-osso-100/10">
                  <Link
                    href={href(item.path)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    className={`block py-4 font-emporio-serif text-h3 ${
                      isActive(item.path) ? 'text-dourado-light' : 'text-osso-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8">
                <Link href={href('/contato')} className={buttonClass('primary', 'w-full')}>
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
