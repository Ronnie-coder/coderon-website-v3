// src/components/Footer.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// UPDATED: Removed FaEnvelope
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Safely sets the time only on the client-side to prevent hydration errors.
    const timer = setInterval(() => {
      // Using a clear format, e.g., Johannesburg (SAST)
      setCurrentTime(new Date().toLocaleTimeString('en-ZA', { timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="c-footer">
      <div className="c-footer__content">
        {/* Row 1: Social Media Icons */}
        <div className="c-footer__social">
          <a href="https://github.com/Ronnie-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/coderon-coderon-8b302b360" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Coderon28" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
            <FaTwitter />
          </a>
        </div>

        {/* Row 2: Legal Links */}
        <div className="c-footer__links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>

        {/* Row 3: Copyright, Registration, and Clock */}
        <div className="c-footer__bottom-bar">
          <div className="c-footer__legal-info">
            <span>&copy; {currentYear} Coderon.</span>
            {/* ADDED: Company Registration Number */}
            <span>Reg: 2025 / 482790 / 07</span>
          </div>
          <div className="c-footer__clock" aria-label="Current time in Johannesburg">
            {currentTime} SAST
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;