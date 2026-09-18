'use client';

import { useEffect } from 'react';
import { GA4_ID, META_PIXEL_ID } from '@/config/emporio';
import { CONSENT_EVENT, readConsent } from './consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string };
    _fbq?: unknown;
  }
}

let loaded = false;

function loadScripts() {
  if (loaded) return;
  loaded = true;

  if (GA4_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, { anonymize_ip: true });
  }

  if (META_PIXEL_ID) {
    const q: unknown[] = [];
    const fbq = function fbq(...args: unknown[]) {
      q.push(args);
    } as NonNullable<Window['fbq']>;
    fbq.queue = q;
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
    window._fbq = fbq;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}

// Carrega GA4 e Meta Pixel só depois do consentimento e só se houver ID.
export default function Analytics() {
  useEffect(() => {
    if (!GA4_ID && !META_PIXEL_ID) return;
    const check = () => {
      if (readConsent() === 'granted') loadScripts();
    };
    check();
    window.addEventListener(CONSENT_EVENT, check);
    return () => window.removeEventListener(CONSENT_EVENT, check);
  }, []);
  return null;
}
