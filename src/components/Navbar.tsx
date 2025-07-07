// src/components/Navbar.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NavLink {
  href: string;
  label: string;
}

// --- UPDATED: Added the "Playroom" link here ---
const navLinks: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/playroom', label: 'Playroom' }, // This is the new link
  { href: '/about', label: 'About Us' },
];

/**
 * The main navigation bar for the Coderon website.
 */
const Navbar = () => {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    if (timeline.current && logoDotRef.current) {
      timeline.current.to(logoDotRef.current, {
        scale: 1.5,
        textShadow: `0 0 10px #D4AF37`,
        duration: 0.3,
        ease: 'power1.inOut',
      }).to(logoDotRef.current, {
        scale: 1,
        textShadow: 'none',
        duration: 0.3,
        ease: 'power1.inOut',
      }, ">-0.1");
    }
  }, []);

  const handleMouseEnter = () => {
    if (timeline.current) {
      timeline.current.play(0);
    }
  };

  const handleMouseLeave = () => {
    if (timeline.current) {
      timeline.current.reverse();
    }
  };

  return (
    <header className="c-navbar">
      <div className="c-navbar__container">
        <Link 
          href="/" 
          className="c-navbar__logo"
          ref={logoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image 
            src="/logo-coderon.png" 
            alt="Coderon Company Logo" 
            width={32} 
            height={32} 
            priority
          />
          Coderon<span ref={logoDotRef}>.</span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="c-navbar__nav-links">
            {navLinks.map((link) => (
              <li key={link.href} className="c-navbar__link">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="c-navbar__cta">
           Free Consultation
       </Link>
      </div>
    </header>
  );
};

export default Navbar;