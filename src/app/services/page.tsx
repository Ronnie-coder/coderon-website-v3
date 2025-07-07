// src/app/services/page.tsx

import { services } from '@/data/servicesData';
import { Metadata } from 'next';
import Link from 'next/link';

// SEO metadata specific to this page
export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the expert services offered by Coderon, including Next.js Web Development, AI Solutions, Digital Transformation, and Custom Software for African businesses.',
  alternates: {
    canonical: '/services',
  },
};

/**
 * The dedicated Services page for Coderon.
 * It provides a detailed look at each service offering.
 */
export default function ServicesPage() {
  return (
    <div className="c-page-container">
      {/* Page Header */}
      <header className="c-page-header">
        <h1>Our Services</h1>
        <p>Driving Africa&apos;s digital future with a suite of robust, modern technology solutions.</p>
      </header>

      {/* List of Services */}
      <main>
        {services.map(service => (
          <article key={service.id} className="c-service-item">
            <h2 className="c-service-item__title">{service.title}</h2>
            <p className="c-service-item__description">{service.detailedDescription}</p>
            <ul className="c-service-item__benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="c-service-item__benefit">
                  {benefit}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </main>

      {/* Final Call to Action */}
      <aside className="c-page-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how our expertise can align with your vision to create something exceptional.</p>
        <Link href="/contact" className="cta-button">
          Get in Touch
        </Link>
      </aside>
    </div>
  );
}