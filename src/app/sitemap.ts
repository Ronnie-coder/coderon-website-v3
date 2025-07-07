// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.coderon.co.za' // IMPORTANT: Change to your actual domain
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/impact`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/playroom`, lastModified: new Date() },
    // Add your playroom demo pages here
    { url: `${baseUrl}/playroom/sales-dashboard`, lastModified: new Date() },
    { url: `${baseUrl}/playroom/sentiment-analyzer`, lastModified: new Date() },
    { url: `${baseUrl}/playroom/fleet-tracker`, lastModified: new Date() },
    { url: `${baseUrl}/playroom/business-chatbot`, lastModified: new Date() },
  ]
}