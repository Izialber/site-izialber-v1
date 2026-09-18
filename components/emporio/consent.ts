export const CONSENT_KEY = 'emporio_cookie_consent';
export const CONSENT_EVENT = 'emporio-consent';

export type Consent = 'granted' | 'denied' | null;

export function readConsent(): Consent {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Sem storage disponível: o banner volta na próxima visita.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
