"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/services', label: 'Services' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/playroom', label: 'Playroom' },
  { href: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Your existing GSAP code and other functions remain the same
  useEffect(() => { /* ... */ }, []);
  const handleMouseEnter = () => { /* ... */ };
  const handleMouseLeave = () => { /* ... */ };
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="c-navbar">
      <div className="c-navbar__container">
        <Link href="/" className="c-navbar__logo" onClick={closeMenu}>
          <Image src="/logo-coderon.png" alt="Coderon Logo" width={32} height={32} priority />
          Coderon<span ref={logoDotRef}>.</span>
        </Link>

        {/* --- NEW: A single container for all desktop items --- */}
        <div className="c-navbar__desktop-items">
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

        <button className="c-navbar__mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* The mobile navigation overlay remains the same */}
      <nav className={`c-navbar__mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href} className="c-navbar__link">
            <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
          </li>
        ))}
        <Link href="/contact" className="c-navbar__cta" onClick={closeMenu}>
          Free Consultation
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
