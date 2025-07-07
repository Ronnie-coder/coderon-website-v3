// src/app/contact/page.tsx
import { Metadata } from 'next';
import { ConsultationForm } from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Free Consultation',
  description: 'Book a free, no-obligation 30-minute strategy session with Coderon to discuss your project and discover new opportunities.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="c-page-container">
      <header className="c-page-header">
        <h1>Book Your Free Strategy Session</h1>
        <p>
          This complimentary 30-minute call is the first step toward transforming your business. We'll discuss your goals, evaluate your current needs, and provide initial, actionable recommendations. There is no obligation, only value.
        </p>
      </header>
      <main>
        <ConsultationForm />
      </main>
    </div>
  );
}