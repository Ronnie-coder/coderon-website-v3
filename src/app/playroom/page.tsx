// src/app/playroom/page.tsx

import Link from 'next/link';
import type { Metadata } from 'next';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Playroom',
  description: 'Explore interactive demos and live proof-of-concepts built by Coderon. Experience our technical capabilities firsthand.',
};

// We'll define our projects here for now. Later, this could come from a database.
const playroomProjects = [
  {
    title: 'Interactive Sales Dashboard',
    description: 'A dynamic, real-time dashboard for visualizing sales data, built with Next.js and Chart.js. Experience data-driven decision making.',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'SCSS'],
    href: '/playroom/sales-dashboard', // <-- CHANGE THIS
    status: 'Live' // <-- CHANGE THIS
  },
   {
    title: 'AI Sentiment Analyzer',
    description: 'An AI-powered tool that analyzes customer feedback for sentiment. A practical example of our machine learning solutions for business.',
    tech: ['Next.js', 'AI', 'Sentiment.js'], // Updated tech
    href: '/playroom/sentiment-analyzer', // <-- CHANGE THIS
    status: 'Live' // <-- CHANGE THIS
  },
    {
    title: 'Business AI Chatbot',
    description: 'An AI-powered chatbot to handle customer inquiries, qualify leads, and provide 24/7 support. A demo of our automation solutions.',
    tech: ['Botpress', 'AI', 'Automation'],
    href: '/playroom/business-chatbot',
    status: 'Live'
  },
  {
    title: 'Live Fleet Tracker',
    description: 'A real-time map visualization tracking a fleet of vehicles across South Africa. Demonstrates our ability to build high-performance, live applications.',
    tech: ['Next.js', 'Leaflet.js', 'Real-Time Data'],
    href: '/playroom/fleet-tracker', // <-- CHANGE THIS
    status: 'Live' // <-- CHANGE THIS
  }
];

const PlayroomPage = () => {
  return (
    <div className="c-page-container">
      <section className="c-playroom">
        {/* --- 1. The Introduction --- */}
        <div className="c-playroom__header">
          <h1 className="c-playroom__title">Welcome to the Coderon Playroom.</h1>
          <p className="c-playroom__subtitle">
            Don't just take our word for it. Interact with live demos and see the quality of our code in action. This is where ideas become reality.
          </p>
        </div>

        {/* --- 2. The Demo Grid --- */}
        <div className="c-playroom__grid">
          {playroomProjects.map((project) => (
            <div key={project.title} className="c-playroom-card">
              <div className="c-playroom-card__content">
                <h3 className="c-playroom-card__title">{project.title}</h3>
                <p className="c-playroom-card__description">{project.description}</p>
                <div className="c-playroom-card__tech-stack">
                  {project.tech.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="c-playroom-card__footer">
                <Link href={project.href} className="c-playroom-card__link">
                  {project.status === 'Coming Soon' ? project.status : 'Launch Demo'}
                  {project.status !== 'Coming Soon' && <FaArrowRight />}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. The Strong Call to Action --- */}
        <div className="c-playroom-cta">
          <h2 className="c-playroom-cta__title">Inspired by what you see?</h2>
          <p className="c-playroom-cta__text">
            These demos are just the beginning. Let's discuss how we can build a custom, high-performance solution tailored specifically to your business needs.
          </p>
          <div className="c-playroom-cta__buttons">
            <Link href="/contact" className="c-button c-button--primary">
              Start Your Project
            </Link>
            <Link href="/services" className="c-button c-button--secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayroomPage;