// src/components/ImpactSection.tsx
"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * A section to showcase a featured project, demonstrating Coderon's impact.
 * Features a real client project: Gifted Tours.
 */
const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for the entire feature block to slide in from the side.
  const featureVariants = {
    hidden: { opacity: 0, x: -50 }, // Starts off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="c-impact" id="impact">
      {/* This motion.div contains the entire two-column feature */}
      <motion.div
        ref={ref}
        className="c-impact-feature"
        variants={featureVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Column 1: The Image */}
        <div className="c-impact-feature__image-wrapper">
          <Image
            src="/gifted-tours-showcase.png" // The path to your image in the /public folder
            alt="The new Gifted Tours website showcased on a laptop"
            width={1200} // The actual width of your source image
            height={800} // The actual height of your source image
            quality={90} // Image quality optimization
          />
        </div>

        {/* Column 2: The Content */}
        <div className="c-impact-feature__content">
          <h3>Featured Project: Gifted Tours</h3>
          <h2>From Outdated to Outstanding</h2>
          <p>
            Gifted Tours needed a digital refresh. Their old website was slow, dated, and not performing. We delivered a complete redesign and rebuild using Next.js, resulting in a lightning-fast, modern, and SEO-optimized platform that truly represents their brand and is ready to attract more business.
          </p>
          <Link href="https://giftedtours.co.za" target="_blank" rel="noopener noreferrer">
            View Live Site <span>&rarr;</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactSection;