// src/components/ConsultationForm.tsx
"use client";
import { useState } from 'react';

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    try {
      const response = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (response.ok) {
        setFormMessage("Thank you! Your request has been sent. We'll be in touch soon.");
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
      } else {
        const errorData = await response.json();
        setFormMessage(`Error: ${errorData.error?.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      setFormMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="c-form" onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="c-form__group">
        <label htmlFor="name" className="c-form__label">Full Name</label>
        <input type="text" id="name" name="name" className="c-form__input" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
      </div>
      <div className="c-form__group">
        <label htmlFor="email" className="c-form__label">Email Address</label>
        <input type="email" id="email" name="email" className="c-form__input" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
      </div>
      <div className="c-form__group">
        <label htmlFor="service" className="c-form__label">Service of Interest</label>
        <select id="service" name="service" className="c-form__input" required value={formData.service} onChange={handleChange} disabled={isSubmitting}>
          <option>Web Development</option>
          <option>AI Solutions & Integration</option>
          <option>Digital Transformation</option>
          <option>Custom Software Development</option>
          <option>Business Automation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="c-form__group">
        <label htmlFor="message" className="c-form__label">Tell us about your project</label>
        <textarea id="message" name="message" className="c-form__textarea" required value={formData.message} onChange={handleChange} disabled={isSubmitting} />
      </div>
      <button type="submit" className="c-form__button" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Book My Free Session'}
      </button>
      {formMessage && <p style={{ marginTop: '1rem', color: formMessage.startsWith('Error') ? '#ff4d4d' : '#25D366' }}>{formMessage}</p>}
    </form>
  );
};