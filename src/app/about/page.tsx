// src/app/about/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';

// SEO metadata specific to this page
export const metadata: Metadata = {
  title: 'About Coderon',
  description: "Learn about Coderon's mission, born from a self-taught developer's dedication to building Africa's digital future and putting African innovation on the global map.",
  alternates: {
    canonical: '/about',
  },
};

/**
 * The dedicated About page for Coderon.
 * It tells the story behind the company, its mission, and its values.
 */
export default function AboutPage() {
  return (
    <div className="c-page-container">
      {/* Page Header */}
      <header className="c-page-header">
        <h1>Our Story</h1>
        <p>More than a company, Coderon is a commitment to Africa&apos;s digital future.</p>
      </header>

      <main>
        {/* The Founder's Story */}
        <section className="c-about-content">
          <p>
            Coderon was born from a simple but powerful belief: that the immense talent and potential within Africa deserves a prominent place on the world's digital stage. Our founder, a self-taught developer, embarked on a journey not just to master code, but to dedicate that skill to a greater purpose.
          </p>
          <p>
            This journey was fueled by a passion for technology and a deep-seated desire to see African businesses thrive. We saw a continent rich with innovation but often underserved by modern digital tools. Coderon was created to bridge that gap—to combine world-class technology with a uniquely African perspective.
          </p>
          <p>
            Every project we undertake is a step towards that goal. We don't just build websites or software; we build digital foundations for African entrepreneurs to compete, succeed, and lead globally.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="c-values-section">
          <h2>Our Core Values</h2>
          <div className="c-values-section__grid">
            <div className="c-value-card">
              <h3><span>✓</span> Quality & Craftsmanship</h3>
              <p>We build with precision and pride, delivering solutions that are not only functional but also elegant and durable.</p>
            </div>
            <div className="c-value-card">
              <h3><span>✓</span> Purpose-Driven Innovation</h3>
              <p>Our work is guided by our mission. We innovate not for technology's sake, but to create real, tangible impact for our partners.</p>
            </div>
            <div className="c-value-card">
              <h3><span>✓</span> True Partnership</h3>
              <p>Your success is our success. We work as collaborative partners, invested in understanding and achieving your vision.</p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <aside className="c-page-cta">
          <h2>Join the Mission</h2>
          <p>Whether you're a startup or an established enterprise, let's work together to build the future.</p>
          <Link href="/contact" className="cta-button">
            Book a Free Consultation
          </Link>
        </aside>
      </main>
    </div>
  );
}