'use client';

import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { FORM_ENDPOINT, FORM_MODE, FORM_TEST_EMAIL, href, whatsappUrl } from '@/config/emporio';
import { contato } from '@/content/emporio/contato';
import { buttonClass } from './ui';

const t = contato.form;

type Values = {
  nome: string;
  empresa: string;
  cnpj: string;
  email: string;
  telefone: string;
  categoria: string;
  volume: string;
  prazo: string;
  mensagem: string;
  consentimento: boolean;
};

const initial: Values = {
  nome: '',
  empresa: '',
  cnpj: '',
  email: '',
  telefone: '',
  categoria: '',
  volume: '',
  prazo: '',
  mensagem: '',
  consentimento: false,
};

type Errors = Partial<Record<keyof Values, string>>;

function maskCnpj(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 14);
  return d
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
  }
  return d.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.nome.trim()) e.nome = t.errors.required;
  if (!v.empresa.trim()) e.empresa = t.errors.required;
  if (v.cnpj.replace(/\D/g, '').length !== 14) e.cnpj = t.errors.cnpj;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = t.errors.email;
  if (v.telefone.replace(/\D/g, '').length < 10) e.telefone = t.errors.phone;
  if (!v.categoria) e.categoria = t.errors.required;
  if (!v.volume) e.volume = t.errors.required;
  if (!v.prazo) e.prazo = t.errors.required;
  if (!v.mensagem.trim()) e.mensagem = t.errors.required;
  if (!v.consentimento) e.consentimento = t.errors.consent;
  return e;
}

const fieldClass =
  'mt-2 block w-full rounded-sm border bg-osso-50 px-4 py-3 text-body text-ebano-900 transition-colors duration-150 focus:border-couro-600 focus:outline-none focus:ring-2 focus:ring-dourado/30';
const labelClass = 'block text-small font-medium text-ebano-900';

function Field({
  id,
  label,
  error,
  help,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {help ? (
        <p id={`${id}-help`} className="mt-2 text-caption text-couro-700">
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-erro`} role="alert" className="mt-2 text-caption text-erro">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const set = <K extends keyof Values>(k: K, v: Values[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const border = (k: keyof Values) => (errors[k] ? 'border-erro' : 'border-couro-900/20');
  const aria = (k: keyof Values, help?: boolean) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': [errors[k] ? `${k}-erro` : null, help ? `${k}-help` : null].filter(Boolean).join(' ') || undefined,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value;
    if (honeypot) return;

    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          consentimento: values.consentimento ? 'sim' : 'não',
          _subject: `${FORM_MODE === 'test' ? '[TESTE] ' : ''}Pedido de orçamento: ${values.empresa}`,
          _replyto: values.email,
          modo: FORM_MODE,
          destinatario_teste: FORM_MODE === 'test' ? FORM_TEST_EMAIL : '',
          origem: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push(href('/contato/obrigado'));
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {FORM_MODE === 'test' ? (
        <p className="border-l-2 border-dourado bg-osso-100 px-4 py-3 text-small text-couro-800">
          {t.testNotice}
          {FORM_TEST_EMAIL ? ` (${FORM_TEST_EMAIL})` : ''}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="nome" label={t.fields.name} error={errors.nome}>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            value={values.nome}
            onChange={(e) => set('nome', e.target.value)}
            className={`${fieldClass} ${border('nome')}`}
            {...aria('nome')}
          />
        </Field>
        <Field id="empresa" label={t.fields.company} error={errors.empresa}>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            required
            value={values.empresa}
            onChange={(e) => set('empresa', e.target.value)}
            className={`${fieldClass} ${border('empresa')}`}
            {...aria('empresa')}
          />
        </Field>
        <Field id="cnpj" label={t.fields.cnpj} error={errors.cnpj}>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            inputMode="numeric"
            required
            value={values.cnpj}
            onChange={(e) => set('cnpj', maskCnpj(e.target.value))}
            className={`${fieldClass} ${border('cnpj')}`}
            {...aria('cnpj')}
          />
        </Field>
        <Field id="email" label={t.fields.email} error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => set('email', e.target.value)}
            className={`${fieldClass} ${border('email')}`}
            {...aria('email')}
          />
        </Field>
        <Field id="telefone" label={t.fields.phone} error={errors.telefone}>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.telefone}
            onChange={(e) => set('telefone', maskPhone(e.target.value))}
            className={`${fieldClass} ${border('telefone')}`}
            {...aria('telefone')}
          />
        </Field>
        <Field id="categoria" label={t.fields.category} error={errors.categoria}>
          <select
            id="categoria"
            name="categoria"
            required
            value={values.categoria}
            onChange={(e) => set('categoria', e.target.value)}
            className={`${fieldClass} ${border('categoria')}`}
            {...aria('categoria')}
          >
            <option value="">{t.selectPlaceholder}</option>
            {t.categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field id="volume" label={t.fields.volume} error={errors.volume}>
          <select
            id="volume"
            name="volume"
            required
            value={values.volume}
            onChange={(e) => set('volume', e.target.value)}
            className={`${fieldClass} ${border('volume')}`}
            {...aria('volume')}
          >
            <option value="">{t.selectPlaceholder}</option>
            {t.volumes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field id="prazo" label={t.fields.deadline} error={errors.prazo}>
          <select
            id="prazo"
            name="prazo"
            required
            value={values.prazo}
            onChange={(e) => set('prazo', e.target.value)}
            className={`${fieldClass} ${border('prazo')}`}
            {...aria('prazo')}
          >
            <option value="">{t.selectPlaceholder}</option>
            {t.deadlines.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="mensagem" label={t.fields.message} error={errors.mensagem} help={t.fields.messageHelp}>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={6}
          required
          value={values.mensagem}
          onChange={(e) => set('mensagem', e.target.value)}
          className={`${fieldClass} ${border('mensagem')}`}
          {...aria('mensagem', true)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-small text-couro-800">
          <input
            type="checkbox"
            name="consentimento"
            checked={values.consentimento}
            onChange={(e) => set('consentimento', e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-couro-600"
            aria-invalid={errors.consentimento ? true : undefined}
            aria-describedby={errors.consentimento ? 'consentimento-erro' : undefined}
          />
          <span>{t.fields.consent}</span>
        </label>
        {errors.consentimento ? (
          <p id="consentimento-erro" role="alert" className="mt-2 text-caption text-erro">
            {errors.consentimento}
          </p>
        ) : null}
      </div>

      <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Deixe em branco</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' ? (
        <p role="alert" className="border-l-2 border-erro bg-osso-100 px-4 py-3 text-small text-ebano-900">
          {FORM_ENDPOINT ? t.errors.submit : t.errors.noEndpoint}{' '}
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            WhatsApp
          </a>
        </p>
      ) : null}

      <button type="submit" disabled={status === 'sending'} className={buttonClass('primary', 'w-full sm:w-auto')}>
        {status === 'sending' ? t.submitting : t.submit}
      </button>
    </form>
  );
}
