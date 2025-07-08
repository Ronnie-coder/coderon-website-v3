// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.coderon.co.za'

  // Use a fixed date for static content that doesn't change often
  const staticContentDate = '2023-10-26';

  return [
    { url: `${baseUrl}/`, lastModified: staticContentDate },
    { url: `${baseUrl}/about`, lastModified: staticContentDate },
    { url: `${baseUrl}/services`, lastModified: staticContentDate },
    { url: `${baseUrl}/impact`, lastModified: staticContentDate },
    { url: `${baseUrl}/contact`, lastModified: staticContentDate },
    { url: `${baseUrl}/playroom`, lastModified: staticContentDate },
    { url: `${baseUrl}/playroom/sales-dashboard`, lastModified: staticContentDate },
    { url: `${baseUrl}/playroom/sentiment-analyzer`, lastModified: staticContentDate },
    { url: `${baseUrl}/playroom/fleet-tracker`, lastModified: staticContentDate },
    { url: `${baseUrl}/playroom/business-chatbot`, lastModified: staticContentDate },
    
    // --- ADDED: The missing legal pages ---
    { url: `${baseUrl}/privacy-policy`, lastModified: staticContentDate },
    { url: `${baseUrl}/terms-of-service`, lastModified: staticContentDate },
  ]
}