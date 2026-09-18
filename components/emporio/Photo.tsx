import { asset } from '@/config/emporio';

// Foto responsiva em export estático: o next/image não gera tamanhos sem
// servidor, então cada foto tem variantes -400.webp e -800.webp ao lado da
// original em JPG. Preenche o elemento pai (que define a proporção).
export default function Photo({
  src,
  alt,
  sizes,
  width = 1600,
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  sizes: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  const base = src.replace(/\.jpg$/, '');
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      srcSet={`${asset(`${base}-400.webp`)} 400w, ${asset(`${base}-800.webp`)} 800w, ${asset(src)} ${width}w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
