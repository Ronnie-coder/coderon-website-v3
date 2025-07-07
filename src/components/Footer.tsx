// src/components/Footer.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

/**
 * The website footer. Contains copyright, social links, and a live clock.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <footer className="c-footer">
      <div className="c-footer__container">
        {/* Left Side: Text and Badge */}
        <div className="c-footer__left-content">
          <p className="c-footer__text">
            &copy; {currentYear} <Link href="/">Coderon</Link>. All Rights Reserved. Built with Purpose in South Africa.
          </p>
          <p className="c-footer__legal">
            CODERON (PTY) LTD (2025/482790/07)
          </p>
           <div className="c-footer__badge-wrapper">
            <Image
              src="/registration-badge.png"
              alt="Official Company Registration Verification Badge"
              width={150}
              height={50}
              quality={80}
            />
          </div>
        </div>

        {/* Right Side: Clock and Socials */}
        <div className="c-footer__right-content">

          {/* --- CHANGED: The Clock now comes FIRST in the code --- */}
          {/* This moves it to the left, away from the BackToTopButton */}
          <div className="c-footer__clock" aria-label="Current time">
            {formatTime(time)}
          </div>
          
          {/* --- CHANGED: The Socials now come SECOND in the code --- */}
          {/* This places them on the far right, which looks great */}
          <div className="c-footer__socials">
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;