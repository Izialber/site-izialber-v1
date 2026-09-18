import type { Config } from 'tailwindcss';

// Tailwind exclusivo da seção Empório do Couro. Carregado por
// app/emporiodocouro/emporio.css via @config. Não afeta o CSS do site pessoal.
const config: Config = {
  content: [
    './app/emporiodocouro/**/*.{ts,tsx}',
    './components/emporio/**/*.{ts,tsx}',
    './content/emporio/**/*.ts',
    './config/emporio.ts',
  ],
  theme: {
    extend: {
      colors: {
        couro: {
          950: '#2B1810',
          900: '#3D2314',
          800: '#54301A',
          700: '#6E3F22',
          600: '#8B5230',
          500: '#A8703F',
          400: '#C08F5C',
          300: '#D4AC85',
        },
        ebano: {
          950: '#0D0B0A',
          900: '#16130F',
          800: '#211D18',
          700: '#2E2820',
        },
        osso: {
          50: '#FAF7F2',
          100: '#F3EDE3',
          200: '#E8DFD0',
          300: '#D9CDB9',
        },
        dourado: {
          DEFAULT: '#A6832E',
          light: '#C4A254',
          dark: '#7C611F',
        },
        erro: '#B3452C',
      },
      fontFamily: {
        'emporio-serif': ['var(--font-emporio-serif)', 'Georgia', 'serif'],
        'emporio-sans': ['var(--font-emporio-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala tipográfica (base 17px, razão 1.25).
        caption: ['0.8125rem', { lineHeight: '1.4' }],
        small: ['0.9375rem', { lineHeight: '1.5' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        lead: ['1.3125rem', { lineHeight: '1.5' }],
        h3: ['1.6875rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        h2: ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h1: ['2.625rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-sm': ['3.3125rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['4.125rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
    },
  },
  plugins: [],
};

export default config;
