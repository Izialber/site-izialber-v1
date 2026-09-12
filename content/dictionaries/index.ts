import type { Dictionary, Locale } from './types';
import pt from './pt';
import en from './en';

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.pt;
}

export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';

export type { Dictionary, Locale };
