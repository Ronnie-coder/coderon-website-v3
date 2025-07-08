// Example for: app/terms-of-service/page.tsx
import React from 'react';
import LegalContent from '@/components/ui/LegalContent'; // We'll use a reusable component
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Coderon",
  description: "The terms of service for using the Coderon website and its services.",
};

const TermsOfServicePage = () => {
  return (
    <main className="l-legal-page">
      <div className="l-legal-page__container">
        <h1>Terms of Service</h1>
        <LegalContent>
          <>
  <p><strong>Updated</strong> [ July 8, 2025]</p>
  <p>
    Coderon ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website coderon.co.za (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
  </p>

  <h2>1. Information We Collect</h2>
  <p>
    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
  </p>
  <ul>
    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and message content, that you voluntarily give to us when you use our contact form.</li>
    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, and pages you have viewed directly before and after accessing the Site.</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
  <ul>
    <li>Respond to your inquiries and support requests.</li>
    <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
    <li>Protect the security and integrity of our website.</li>
  </ul>
  
  <h2>3. Cookie Policy</h2>
  <p>
    A cookie is a small file placed on your device. We use cookies and similar tracking technologies to track the activity on our Site and store certain information.
  </p>
  <ul>
      <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
      <li><strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
  </ul>
  <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>

  <h2>4. Disclosure of Your Information</h2>
  <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website (like our email provider, Resend) or conducting our business, so long as those parties agree to keep this information confidential.</p>

  <h2>5. Data Security</h2>
  <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
  
  <h2>6. Your Rights under POPIA</h2>
  <p>As a South African company, we adhere to the Protection of Personal Information Act (POPIA). You have the right to access, correct, or delete your personal data. To do so, please contact us.</p>
  
  <h2>7. Contact Us</h2>
  <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
  <p>Email: <strong>[coderonc@gmail.com]</strong></p>
  <p> Contact Number <strong>[+27 67 818 4898]</strong></p>
</>
        </LegalContent>
      </div>
    </main>
  );
};

export default TermsOfServicePage;