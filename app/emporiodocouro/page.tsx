import BrandsGrid from '@/components/emporio/BrandsGrid';
import CategoryCards from '@/components/emporio/CategoryCards';
import CtaSection from '@/components/emporio/CtaSection';
import Faq from '@/components/emporio/Faq';
import Hero from '@/components/emporio/Hero';
import ProcessSteps from '@/components/emporio/ProcessSteps';
import StatsBar from '@/components/emporio/StatsBar';
import { home } from '@/content/emporio/home';
import { pageMetadata } from './_lib/seo';

export const metadata = {
  ...pageMetadata({ title: home.meta.title, description: home.meta.description, path: '/' }),
  title: { absolute: home.meta.title },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <BrandsGrid />
      <CategoryCards />
      <ProcessSteps />
      <Faq />
      <CtaSection
        title={home.finalCta.title}
        text={home.finalCta.text}
        primaryCta={home.finalCta.primaryCta}
        secondaryCta={home.finalCta.secondaryCta}
      />
    </>
  );
}
