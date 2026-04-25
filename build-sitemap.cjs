const fs = require('fs');

const blogsXml = fs.readFileSync('sitemap_blogs.xml', 'utf8');

const topXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- CORE PAGES -->
  <url><loc>https://ahmad-cloths.vercel.app/</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.95</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/about</loc><lastmod>2026-04-25</lastmod><changefreq>monthly</changefreq><priority>0.75</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/contact</loc><lastmod>2026-04-25</lastmod><changefreq>monthly</changefreq><priority>0.75</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/blog</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.85</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/privacy</loc><lastmod>2026-04-25</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/terms</loc><lastmod>2026-04-25</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/cookies</loc><lastmod>2026-04-25</lastmod><changefreq>yearly</changefreq><priority>0.2</priority></url>

  <!-- SHOP COLLECTIONS -->
  <url><loc>https://ahmad-cloths.vercel.app/shop/Unstitched</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/Pret</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/Bridal</loc><lastmod>2026-04-25</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/M.Print</loc><lastmod>2026-04-25</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/Discount</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/Sale Offer</loc><lastmod>2026-04-25</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/Office</loc><lastmod>2026-04-25</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://ahmad-cloths.vercel.app/shop/hero</loc><lastmod>2026-04-25</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>

  <!-- BLOG POSTS -->
`;

const finalXml = topXml + blogsXml + '\n</urlset>\n';

fs.writeFileSync('public/sitemap.xml', finalXml);
console.log('Successfully wrote public/sitemap.xml');
