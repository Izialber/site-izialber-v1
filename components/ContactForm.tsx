'use client';

import { useState, type FormEvent } from 'react';
import type { Dictionary } from '@/content/dictionaries';
import { siteConfig } from '@/content/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>('idle');
  const isConfigured = Boolean(siteConfig.contactFormEndpoint);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isConfigured) return;

    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="name" className="text-sm text-graphite-300">
          {dict.contact.formName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-sm border border-graphite-600 bg-navy-900 px-3 py-2 text-sm text-graphite-100 outline-none focus:border-accent-light"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-graphite-300">
          {dict.contact.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-sm border border-graphite-600 bg-navy-900 px-3 py-2 text-sm text-graphite-100 outline-none focus:border-accent-light"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm text-graphite-300">
          {dict.contact.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-sm border border-graphite-600 bg-navy-900 px-3 py-2 text-sm text-graphite-100 outline-none focus:border-accent-light"
        />
      </div>

      <button
        type="submit"
        disabled={!isConfigured || status === 'sending'}
        className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === 'sending' ? '...' : dict.contact.formSubmit}
      </button>

      {!isConfigured && (
        <p className="text-xs text-graphite-500">{dict.contact.formNote}</p>
      )}
      {status === 'success' && (
        <p className="text-sm text-accent-light">
          {dict.contact.formSubmit} ✓
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400">
          {dict.contact.formNote}
        </p>
      )}
    </form>
  );
}
