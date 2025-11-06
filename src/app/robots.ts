// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // SEO UPDATE: Replace with your actual domain
  const siteUrl = 'https://www.yourwebsite.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: disallow a private page
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}