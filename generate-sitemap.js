import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import your data sources
import { blogData } from './src/blog/blogData.js';
import { productData } from './src/product/productData.js';

// Configuration
const DOMAIN = 'https://woodkay.netlify.app';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

// Define your static pages here
const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/products',
];

const generateSitemap = () => {
  const urls = [];

  // 1. Add Static Routes
  staticRoutes.forEach(route => {
    urls.push({
      loc: `${DOMAIN}${route}`,
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString()
    });
  });

  // 2. Add Dynamic Blog Routes
  blogData.forEach(post => {
    urls.push({
      loc: `${DOMAIN}/blog/${post.id}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString()
    });
  });

  // 3. Add Dynamic Product Routes
  productData.forEach(product => {
    urls.push({
      loc: `${DOMAIN}/products/${product.id}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    });
  });

  // 4. Generate XML Structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

  // Ensure public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated with ${urls.length} links at public/sitemap.xml`);

  // Generate robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log(`✅ robots.txt generated at public/robots.txt`);
};

// Execute
generateSitemap();