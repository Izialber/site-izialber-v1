import CtaSection from '@/components/emporio/CtaSection';
import Gallery from '@/components/emporio/Gallery';
import PageHero from '@/components/emporio/PageHero';
import { Reveal } from '@/components/emporio/Reveal';
import { Section, SpecList } from '@/components/emporio/ui';
import { produtos } from '@/content/emporio/produtos';
import { pageMetadata } from '../_lib/seo';

export const metadata = pageMetadata({
  title: produtos.meta.title,
  description: produtos.meta.description,
  path: '/produtos',
});

export default function ProdutosPage() {
  return (
    <>
      <PageHero title={produtos.hero.title} text={produtos.hero.text} />

      {produtos.categories.map((cat, i) => (
        <Section key={cat.slug} id={cat.slug} tone={i % 2 === 0 ? 'light' : 'alt'} className="scroll-mt-[72px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="text-h2 text-ebano-900">{cat.title}</h2>
              <p className="mt-4 max-w-[52ch] text-lead text-couro-800">{cat.lead}</p>
              <SpecList rows={cat.details} className="mt-8" />
            </Reveal>
            <div className="lg:col-span-7">
              <Gallery items={cat.gallery} />
            </div>
          </div>
        </Section>
      ))}

      <CtaSection title={produtos.cta.title} text={produtos.cta.text} primaryCta={produtos.cta.primaryCta} />
    </>
  );
}
