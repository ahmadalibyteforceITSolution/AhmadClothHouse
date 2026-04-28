const fs = require('fs');

try {
  const seoData = [
    { title: "Top 10 Pakistani Luxury Lawn Trends for Summer 2026", slug: "top-10-pakistani-luxury-lawn-trends-summer-2026" },
    { title: "Where to Buy Authentic Designer Suits Online in the USA", slug: "buy-authentic-designer-suits-online-usa" },
    { title: "The Ultimate Guide to Maria B Collection 2026", slug: "ultimate-guide-maria-b-collection-2026" },
    { title: "Sana Safinaz Luxury Lawn: A Heritage of Elegance", slug: "sana-safinaz-luxury-lawn-heritage" },
    { title: "How to Style Unstitched Pakistani Suits for Any Occasion", slug: "how-to-style-unstitched-pakistani-suits" },
    { title: "The Best Boutiques to Buy Pakistani Dresses in the USA and UK", slug: "best-boutiques-buy-pakistani-dresses-usa-uk" },
    { title: "Exploring Luxury Pret in Lahore: What to Look For", slug: "exploring-luxury-pret-lahore" },
    { title: "Bridal Couture 2026: Modern Twists on Traditional Elegance", slug: "bridal-couture-2026-modern-traditional-elegance" },
    { title: "A Deep Dive into the Asim Jofa New Collection", slug: "deep-dive-asim-jofa-new-collection" },
    { title: "Gul Ahmed Lawn Sale: How to Snag the Best Deals", slug: "gul-ahmed-lawn-sale-best-deals" },
    { title: "Bareeze Official Store: Exploring Premium Embroidery", slug: "bareeze-official-store-premium-embroidery" },
    { title: "Khaadi Online Shopping Tips for International Customers", slug: "khaadi-online-shopping-tips-international" },
    { title: "The Rise of Designer Salwar Kameez in Global Fashion", slug: "rise-designer-salwar-kameez-global-fashion" },
    { title: "Why Embroidered Chiffon Suits are Perfect for Evening Wear", slug: "embroidered-chiffon-suits-evening-wear" },
    { title: "Ahmad Cloth House Lahore: Your Go-To Fashion Destination", slug: "ahmad-cloth-house-lahore-fashion-destination" },
    { title: "Party Wear Dresses 2026: Stand Out at Every Event", slug: "party-wear-dresses-2026-stand-out" },
    { title: "Shipping Pakistani Clothes Worldwide: What You Need to Know", slug: "shipping-pakistani-clothes-worldwide" },
    { title: "The Best Pakistani Fashion Boutiques in the UK", slug: "best-pakistani-fashion-boutiques-uk" },
    { title: "Where to Find the Best Pakistani Suits in Manchester", slug: "best-pakistani-suits-manchester" },
    { title: "Designer Suits Dubai: High-End Fashion in the UAE", slug: "designer-suits-dubai-high-end-fashion" }
  ];

  let blogsCode = fs.readFileSync('src/data/blogs.js', 'utf8');

  // Find the index of the first Barque blog (ID 101) to cut it off
  const cutIndex = blogsCode.indexOf('id: 101,');
  if (cutIndex !== -1) {
    const startCut = blogsCode.lastIndexOf('{', cutIndex) - 2;
    if (startCut !== -1) {
      blogsCode = blogsCode.substring(0, startCut) + '\\n];\\n';
    }
  } else {
    // If we can't find it, just remove the array ending
    blogsCode = blogsCode.replace('];', '');
  }

  // Remove the ending bracket if it's there
  blogsCode = blogsCode.replace(/];\\s*$/, '');

  let newBlogs = '';
  let sitemapUrls = '';
  
  const heroes = ['Hero1', 'Hero2', 'Hero3', 'Hero4'];

  seoData.forEach((item, index) => {
    const blogId = 200 + index;
    const date = 'May ' + (index + 1) + ', 2026';
    const heroImage = heroes[index % 4];
    
    newBlogs += `  {
    id: ${blogId},
    slug: '${item.slug}',
    title: '${item.title}',
    date: '${date}',
    author: 'SEO Editorial Team',
    category: 'Fashion Guide',
    image: ${heroImage},
    summary: 'Explore everything you need to know about ${item.title.toLowerCase()}. Discover premium collections, styling tips, and top trends.',
    content: '${item.title} is a major topic in the world of Pakistani fashion right now. Whether you are looking for unstitched lawn, luxury pret, or bridal couture, staying updated with these trends is essential.\\n\\nOur experts at Ahmad Cloth House recommend keeping an eye on premium fabrics, intricate embroidery like Zardozi and Chikankari, and elegant color palettes. Shopping for designer suits online has never been easier, especially with worldwide shipping available to the USA, UK, Canada, and UAE.\\n\\nElevate your wardrobe by exploring the latest designer collections, knowing how to spot authentic pieces, and styling them perfectly for your next formal event or casual gathering.'
  },\n`;
    
    sitemapUrls += `  <url>
    <loc>https://ahmad-cloths.vercel.app/blog/${item.slug}</loc>
    <lastmod>2026-04-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  });

  // Ensure trailing comma is present if blogsCode doesn't end with one, but if we removed the array ending, 
  // the last item before the cut should have a comma. Let's just assume it does or add it to newBlogs.
  if (!blogsCode.trim().endsWith(',')) {
    blogsCode = blogsCode.trim() + ',\n';
  }

  blogsCode = blogsCode + newBlogs + '];\n';
  fs.writeFileSync('src/data/blogs.js', blogsCode);
  console.log('blogs.js updated with SEO blogs successfully');

  let sitemapCode = fs.readFileSync('public/sitemap.xml', 'utf8');
  // Remove old barque URLs
  sitemapCode = sitemapCode.replace(/<url>\s*<loc>.*?barque-exclusive-collection.*?<\/loc>\s*<lastmod>.*?<\/lastmod>\s*<changefreq>.*?<\/changefreq>\s*<priority>.*?<\/priority>\s*<\/url>/g, '');
  sitemapCode = sitemapCode.replace('</urlset>', sitemapUrls + '</urlset>');
  fs.writeFileSync('public/sitemap.xml', sitemapCode);
  console.log('sitemap.xml updated with SEO urls successfully');

} catch(e) {
  console.error(e);
}
