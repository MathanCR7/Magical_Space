// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // SEO UPDATE: Replace with your actual domain
  const siteUrl = 'https://www.yourwebsite.com';

  // For a single-page site, you can add links to sections
  // For multi-page sites, you would add routes like '/about', '/portfolio', etc.
  const routes = ['', '#why-us', '#how-we-work', '#products', '#portfolio', '#faq', '#quote-form'];

  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', // How often content is likely to change
    priority: route === '' ? 1 : 0.8, // Homepage is highest priority
  }));
}