// src/data/projectsData.ts

export interface Project {
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'From Outdated to Outstanding',
    client: 'Gifted Tours',
    description: 'We delivered a complete redesign and rebuild using Next.js, resulting in a lightning-fast, modern, and SEO-optimized platform that truly represents their brand and is ready to attract more business.',
    imageUrl: '/gifted-tours-showcase.png', // The image in your /public folder
    liveUrl: 'https://www.giftedtours.co.za',
    tags: ['Web Development', 'Next.js', 'Redesign', 'SEO'],
  },
  // When you get a new project, you'll just add it here!
  // {
  //   title: 'AI-Powered Automation for...',
  //   client: 'Future Client Inc.',
  //   ...
  // },
];