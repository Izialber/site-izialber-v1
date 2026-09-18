import Photo from './Photo';
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
          <Photo src={img.src} alt={img.alt} width={1200} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
