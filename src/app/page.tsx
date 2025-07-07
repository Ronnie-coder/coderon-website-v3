// src/app/page.tsx

import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import ImpactSection from '@/components/ImpactSection';


/**
 * The main homepage for Coderon.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <ImpactSection />
    </>
  );
}