import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1c',
          900: '#0f1729',
          800: '#16213a',
          700: '#1f2d4d',
          600: '#2a3d63',
        },
        graphite: {
          900: '#16181d',
          800: '#22252c',
          700: '#2f333c',
          600: '#3d424d',
          400: '#6b7280',
          200: '#d1d5db',
          100: '#e9eaed',
          50: '#f5f6f7',
        },
        accent: {
          DEFAULT: '#0e7c86',
          light: '#12a3b0',
          dark: '#0a5b62',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
