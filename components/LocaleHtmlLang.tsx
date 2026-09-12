'use client';

import { useEffect } from 'react';
import type { Locale } from '@/content/dictionaries';

/** Mantém o atributo lang do <html> sincronizado com o idioma da rota atual. */
export default function LocaleHtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
