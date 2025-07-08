"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the mobile menu

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

/**
 * The main navigation bar for the Coderon website.
 * Now with a responsive mobile menu.
 */
const Navbar = () => {
  // --- NEW: State to manage the mobile menu's visibility ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // Your GSAP animation remains exactly the same
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (timeline.current && logoDotRef.current) {
      timeline.current.to(logoDotRef.current, { /* ...your animation... */ });
    }
  }, []);
  const handleMouseEnter = () => { /* ...your animation... */ };
  const handleMouseLeave = () => { /* ...your animation... */ };

  // --- NEW: Function to close the menu when a link is clicked ---
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="c-navbar">
      <div className="c-navbar__container">
        {/* Your logo code is unchanged */}
        <Link href="/" className="c-navbar__logo" onClick={closeMenu}>
          <Image src="/logo-coderon.png" alt="Coderon Logo" width={32} height={32} priority />
          Coderon<span ref={logoDotRef}>.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="c-navbar__desktop-nav">
          <ul className="c-navbar__nav-links">
            {navLinks.map((link) => (
              <li key={link.href} className="c-navbar__link">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <Link href="/contact" className="c-navbar__cta c-navbar__desktop-cta">
           Free Consultation
        </Link>

        {/* --- NEW: Mobile Menu Toggle Button (Hamburger Icon) --- */}
        <button className="c-navbar__mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* --- NEW: Mobile Navigation Menu (The slide-in part) --- */}
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
