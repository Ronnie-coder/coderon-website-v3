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
  <p><strong>Updated:</strong> [July 8,2025]</p>
  
  <h2>1. Agreement to Terms</h2>
  <p>By accessing our website, coderon.co.za (the "Site"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Site.</p>
  
  <h2>2. Intellectual Property Rights</h2>
  <p>The Site and its original content, features, functionality, and the "Coderon" name and logo are owned by Coderon and are protected by international copyright, trademark, and other intellectual property laws. You are granted a limited license only for purposes of viewing the material contained on this Site.</p>
  
  <h2>3. Prohibited Activities</h2>
  <p>You may not use the Site for any of the following purposes:</p>
  <ul>
    <li>Engaging in any data mining, data harvesting, or any other similar activity in relation to this Site.</li>
    <li>Using this Site to engage in any advertising or marketing without our express written consent.</li>
    <li>Using this Site in any way that is or may be damaging to this Site or that impacts user access to this Site.</li>
  </ul>

  <h2>4. Limitation of Liability</h2>
  <p>In no event shall Coderon, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Site. This Site is provided "as is," with all faults, and Coderon expresses no representations or warranties of any kind related to this Site or the materials contained on this Site.</p>

  <h2>5. Governing Law & Jurisdiction</h2>
  <p>These Terms will be governed by and interpreted in accordance with the laws of the Republic of South Africa, and you submit to the non-exclusive jurisdiction of the state and federal courts located in South Africa for the resolution of any disputes.</p>
  
  <h2>6. Contact Us</h2>
  <p>If you have any questions about these Terms, please contact us at:</p>
  <p>Email: <strong>[coderonc@gmail.com]</strong></p>
  <p> Contact Number <strong>[+27 67 818 4898]</strong></p>
</>
        </LegalContent>
      </div>
    </main>
  );
};

export default TermsOfServicePage;