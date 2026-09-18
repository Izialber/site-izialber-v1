import Link from 'next/link';
import type { ReactNode } from 'react';

export const container = 'mx-auto w-full max-w-[80rem] px-6 sm:px-8 lg:px-12';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${container} ${className}`}>{children}</div>;
}

type Tone = 'light' | 'alt' | 'dark';

const toneClass: Record<Tone, string> = {
  light: 'bg-osso-50 text-ebano-900',
  alt: 'bg-osso-100 text-ebano-900',
  dark: 'bg-ebano-950 text-osso-100',
};

export function Section({
  children,
  tone = 'light',
  id,
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`${toneClass[tone]} py-20 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

// Cabeçalho de seção: rótulo opcional em sentence case, título e texto.
export function SectionHeading({
  label,
  title,
  text,
  dark = false,
  className = '',
}: {
  label?: string;
  title: string;
  text?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-[40rem] ${className}`}>
      {label ? (
        <p className={`text-small font-medium ${dark ? 'text-dourado-light' : 'text-couro-700'}`}>{label}</p>
      ) : null}
      <h2 className={`mt-2 text-h2 ${dark ? 'text-osso-50' : 'text-ebano-900'}`}>{title}</h2>
      {text ? (
        <p className={`mt-4 max-w-[62ch] text-lead ${dark ? 'text-osso-200' : 'text-couro-800'}`}>{text}</p>
      ) : null}
    </div>
  );
}

type ButtonVariant = 'primary' | 'outline' | 'outline-dark';

const buttonBase =
  'inline-flex items-center justify-center rounded-sm px-8 py-4 text-small font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40';

const buttonVariant: Record<ButtonVariant, string> = {
  primary:
    'bg-couro-600 text-osso-50 hover:bg-couro-500 active:bg-couro-700 focus-visible:ring-offset-osso-50',
  outline:
    'border border-couro-600/50 text-couro-800 hover:bg-couro-950/5 hover:border-couro-600 focus-visible:ring-offset-osso-50',
  'outline-dark':
    'border border-osso-100/40 text-osso-100 hover:bg-osso-50/10 hover:border-osso-100 focus-visible:ring-offset-ebano-950',
};

export function buttonClass(variant: ButtonVariant = 'primary', extra = '') {
  return `${buttonBase} ${buttonVariant[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}) {
  const cls = buttonClass(variant, className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Ficha técnica: pares termo e valor em linhas finas.
export function SpecList({
  rows,
  dark = false,
  className = '',
}: {
  rows: ReadonlyArray<readonly [string, string]>;
  dark?: boolean;
  className?: string;
}) {
  const line = dark ? 'border-osso-100/15' : 'border-osso-300';
  const term = dark ? 'text-osso-200/80' : 'text-couro-700';
  const value = dark ? 'text-osso-50' : 'text-ebano-900';
  return (
    <dl className={`divide-y ${line} border-y ${className}`}>
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[minmax(7rem,1fr)_2fr] gap-4 py-3">
          <dt className={`text-small ${term}`}>{k}</dt>
          <dd className={`text-body ${value}`}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

// Valor institucional vindo de config. Mostra o TODO de forma visível em dev.
export function Stat({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  const isTodo = value.startsWith('TODO');
  return (
    <div>
      {isTodo ? (
        <p className="font-emporio-serif text-h3 leading-none text-couro-400">a definir</p>
      ) : (
        <p className={`font-emporio-serif text-h1 leading-none ${dark ? 'text-osso-50' : 'text-ebano-900'}`}>
          {value}
        </p>
      )}
      <p className={`mt-2 text-small ${dark ? 'text-osso-200/80' : 'text-couro-700'}`}>{label}</p>
    </div>
  );
}
