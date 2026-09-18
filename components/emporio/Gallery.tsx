import Image from 'next/image';
import { asset } from '@/config/emporio';
import { RevealGroup, RevealItem } from './Reveal';

export default function Gallery({
  items,
  className = '',
}: {
  items: ReadonlyArray<{ src: string; alt: string }>;
  className?: string;
}) {
  return (
    <RevealGroup as="ul" className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6 ${className}`}>
      {items.map((img) => (
        <RevealItem as="li" key={img.src} className="relative aspect-square overflow-hidden bg-osso-200">
          <Image
            src={asset(img.src)}
            alt={img.alt}
            fill
            loading="lazy"
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
