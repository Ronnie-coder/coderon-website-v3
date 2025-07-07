// src/data/servicesData.ts

// This file stores the data for the services showcase.

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string; // This is the short description for the homepage card
  // NEW FIELDS for the dedicated services page:
  detailedDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'W',
    title: 'Web Development',
    description: 'High-performance web applications built with Next.js and React, designed for scale and user engagement.',
    detailedDescription: 'We specialize in building world-class web applications using the modern stack. From dynamic corporate sites to complex e-commerce platforms, our focus is on performance, security, and delivering an exceptional user experience that works flawlessly across all devices.',
    benefits: [
      'Lightning-fast load times with Next.js',
      'Secure, scalable, and maintainable codebases',
      'Fully responsive designs for mobile-first indexing',
      'SEO-optimized architecture from the ground up',
    ],
  },
  {
    id: 2,
    icon: 'AI',
    title: 'AI Solutions & Integration',
    description: 'Leveraging artificial intelligence to automate processes, derive insights, and build intelligent products for Africa.',
    detailedDescription: 'Unlock the power of Artificial Intelligence for your business. We help you integrate cutting-edge AI models to automate tasks, analyze data for critical insights, and create innovative products and services that give you a competitive edge in the African market.',
    benefits: [
      'Automate repetitive business processes',
      'Integrate Large Language Models (LLMs)',
      'Derive actionable insights from your data',
      'Build smarter, more personalized user experiences',
    ],
  },
  {
    id: 3,
    icon: 'T',
    title: 'Digital Transformation',
    description: 'Guiding African businesses through the digital landscape to enhance efficiency, reach, and market competitiveness.',
    detailedDescription: "We partner with you to rethink your business for the digital age. Our digital transformation strategy involves a holistic review of your processes, tools, and customer engagement models to ensure you're not just keeping up, but leading the way in your industry.",
    benefits: [
      'Modernize legacy systems and workflows',
      'Improve operational efficiency and reduce costs',
      'Enhance customer engagement and satisfaction',
      'Establish a competitive advantage through technology',
    ],
  },
  {
    id: 4,
    icon: 'C',
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions that address your unique business challenges and unlock new opportunities for growth.',
    detailedDescription: 'Off-the-shelf software doesn’t always fit. We build bespoke software solutions designed specifically to solve your unique challenges and meet your precise business objectives, ensuring a perfect fit for your operational needs and growth ambitions.',
    benefits: [
      'Solutions designed for your specific needs',
      'Full ownership of the intellectual property',
      'Seamless integration with your existing systems',
      'Scalable architecture that grows with your business',
    ],
  },
  {
    id: 5,
    icon: 'A',
    title: 'Business Automation',
    description: 'Implementing smart automation to streamline your operations, reduce costs, and free up your team for high-value work.',
    detailedDescription: 'Stop wasting time on manual, repetitive tasks. We identify key areas for automation within your business and implement robust systems that handle the workload for you. This frees up your team to focus on strategy, creativity, and growth.',
    benefits: [
      'Drastically reduce manual data entry and errors',
      'Increase productivity and operational throughput',
      'Lower operational costs',
      'Improve team morale and focus on core tasks',
    ],
  },
];