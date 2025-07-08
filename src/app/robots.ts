// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // No need for a 'disallow' rule since the entire site is public
    },
    // The sitemap URL must be the absolute URL to the final domain
    sitemap: 'https://www.coderon.co.za/sitemap.xml',
  };
}