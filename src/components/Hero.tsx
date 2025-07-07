// src/components/Hero.tsx
"use client"; // This is a Client Component because it uses hooks (for animation).

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * The main Hero section for the Coderon homepage.
 * It features the primary headline and calls-to-action with entrance animations.
 */
const Hero = () => {
  // Animation variants for the container. `staggerChildren` creates a cascade effect.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one.
      },
    },
  };

  // Animation variants for child elements (fade in from below).
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="c-hero">
      {/* The `motion.div` component is the entry point for the animation */}
      <motion.div
        className="c-hero__container"
        variants={containerVariants}
        initial="hidden" // Start in the "hidden" state
        animate="visible" // Animate to the "visible" state
      >
        <motion.h1 className="c-hero__headline" variants={itemVariants}>
          Building Africa's Future with <span>Code & Purpose</span>
        </motion.h1>

        <motion.p className="c-hero__subheadline" variants={itemVariants}>
          We are a South African software company creating innovative solutions that bridge the digital divide and empower a new generation of African entrepreneurs.
        </motion.p>

        <motion.div className="c-hero__cta-group" variants={itemVariants}>
          {/* We use the same class as the navbar CTA for consistent styling */}
          <Link href="/services" className="c-navbar__cta">
            Our Services
          </Link>
          {/* A secondary, outlined button can be added here later if needed */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;