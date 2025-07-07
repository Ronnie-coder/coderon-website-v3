// src/components/ServicesShowcase.tsx
"use client"; // This component uses hooks for animation, so it must be a client component.

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services, Service } from '@/data/servicesData';

/**
 * A component to showcase the services offered by Coderon.
 * Features a grid of cards that animate into view on scroll.
 */
const ServicesShowcase = () => {
  // This ref is attached to the section to detect when it's in view.
  const ref = useRef(null);
  // useInView hook returns true when the ref element is in the viewport.
  // `once: true` ensures the animation only runs once.
  // `amount: 0.2` triggers the animation when 20% of the section is visible.
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for the grid container.
  // `staggerChildren` creates a beautiful cascade effect for the cards.
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each individual service card.
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="c-services" id="services">
      <div className="container">
        <h3 className="c-services__heading">Our Expertise</h3>
        <h2 className="c-services__subheading">
          Innovative Solutions to Power Africa&apos;s Growth
        </h2>

        {/* This motion.div is the container for the animated grid */}
        <motion.div
          className="c-services__grid"
          variants={gridVariants}
          initial="hidden"
          // Animate to "visible" only when the section is in view
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service: Service) => (
            <motion.div
              key={service.id}
              className="c-service-card"
              variants={cardVariants}
            >
              <div className="c-service-card__icon">{service.icon}</div>
              <h4 className="c-service-card__title">{service.title}</h4>
              <p className="c-service-card__description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;