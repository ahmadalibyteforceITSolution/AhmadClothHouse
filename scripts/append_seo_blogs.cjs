const fs = require('fs');
const path = require('path');

const blogsFile = path.join(__dirname, '../src/data/blogs.js');
const sitemapFile = path.join(__dirname, '../public/sitemap.xml');
const indexHtmlFile = path.join(__dirname, '../index.html');
const robotsFile = path.join(__dirname, '../public/robots.txt');

try {
  let blogsContent = fs.readFileSync(blogsFile, 'utf8');

  // Let's define the 15 new SEO blogs with the exact keyword mappings and anchor text distribution
  const newBlogs = [
    {
      id: 301,
      slug: 'ultimate-guide-unstitched-suits-fabric-fit-fashion',
      title: 'The Ultimate Guide to Unstitched Suits: Fabric, Fit, and Fashion',
      date: 'July 11, 2026',
      author: 'Ahmad Fabrics Styling Expert',
      category: 'Unstitched Suits',
      image: 'Hero1',
      summary: 'Unlock the secrets of custom tailoring with our ultimate guide to unstitched suits. Learn how to choose the right fabric, design the perfect silhouette, and style your outfit.',
      content: `Unstitched suits represent the pinnacle of personalized fashion. When you choose unstitched fabric over off-the-rack alternatives, you gain complete creative control over your style, measurements, and finishing details.\n\n### Why Custom Tailoring Wins\nEvery individual has a unique body shape. Ready-to-wear clothing often compromises on sleeve length, chest fitting, or trouser width. By choosing a **3 piece unstitched suit**, you can work with your tailor to highlight your best features.\n\n### Sourcing Premium Materials\nAt [Ahmad Fabrics Unstitched Collection](/shop/Unstitched), we focus on sourcing the finest cotton threads and luxury silk blends. Whether you are looking for casual office wear or festive embellishments, finding high-quality fabric is key to a long-lasting outfit.\n\n### The Anchor Mix Checklist\nHere is how to design your outfit:\n- **The Kurta (Shirt):** Opt for a straight-cut silhouette with customized embroidery along the neckline.\n- **The Shalwar or Trouser:** Tailor a modern cigarette pant or a flowing traditional shalwar.\n- **The Dupatta (Scarf):** Finish with a contrast chiffon or silk drape.\n\nTo see our latest designs, [shop now](/shop) and discover why custom couture is the ultimate wardrobe upgrade.`
    },
    {
      id: 302,
      slug: 'top-10-unstitched-lawn-trends-modern-woman',
      title: 'Top 10 Unstitched Lawn Trends for the Modern Woman',
      date: 'July 11, 2026',
      author: 'Senior Fashion Editor',
      category: 'Lawn Collection',
      image: 'Hero2',
      summary: 'Explore the hottest lawn trends of 2026. From digital prints to luxury embroidered lawn, discover how to stay elegant and cool during the hot summer months.',
      content: `Summer in South Asia is synonymous with lawn. Lightweight, breathable, and highly versatile, lawn fabric is the perfect canvas for rich color palettes and delicate embroidery.\n\n### 1. Pastel Sophistication\nSoft pastel hues like mint green, lilac, rose pink, and powder blue dominate this season\'s palette. They reflect heat and look exceptionally refreshing.\n\n### 2. High-Definition Digital Prints\nFrom geometric patterns to traditional floral motifs, digital prints add a contemporary touch to classic silhouettes. Explore the [Ahmad Fabrics Lawn Collection](/shop/Lawn) to see these artistic creations.\n\n### 3. Detailed Comparison of Summer Weaves\n\n| Fabric Grade | Breathability | Best Use Case | Typical Thread Count |\n|---|---|---|---|\n| Premium Cotton Lawn | Exceptional | Daily Casual Wear | 80s - 100s |\n| Luxury Embroidered Lawn | High | Festive Luncheons | 60s - 80s |\n| Cambric Cotton | Medium | Pre-Autumn / Evening | 40s - 60s |\n\n### 4. Custom Laces and Patches\nAdding organza borders and embroidered patches is a major trend. It transforms simple [printed lawn](/shop/Lawn) into a designer masterpiece.\n\n[Shop unstitched clothes](/shop/Unstitched) from our seasonal collections to start customizing your summer wardrobe today.`
    },
    {
      id: 303,
      slug: 'why-buy-unstitched-lawn-suits-online',
      title: 'Why Buy Unstitched Lawn Suits Online: Custom Tailoring Benefits',
      date: 'July 11, 2026',
      author: 'E-Commerce Fashion Lead',
      category: 'Shopping Guide',
      image: 'Hero3',
      summary: 'Discover the advantages of shopping for unstitched fabric online. Learn how to verify fabric quality and collaborate with tailors globally.',
      content: `The global fashion landscape has evolved, and shopping for traditional wear has never been easier. When you [buy unstitched lawn suits online](/shop), you gain access to thousands of designs without setting foot in a crowded bazaar.\n\n### The Online Shopping Advantage\nOnline stores allow you to browse curated seasonal lines, compare fabric details, and read reviews from customers worldwide. You can view close-up images of embroidery threads and print details to ensure you are getting authentic quality.\n\n### Verifying Authenticity\n- **Check the Seller:** Ensure the boutique is a trusted merchant, like [Ahmad Fabrics Summer Collection](/shop).\n- **Fabric Specifications:** Look for detailed listings that specify the yarn count and fabric composition.\n- **Return Policies:** Always buy from shops that offer transparent client support.\n\nWhether you reside in Lahore, London, or New York, you can easily source premium [Pakistani unstitched suits](/shop/Unstitched) and have them shipped directly to your door. For more information, [learn more](/about) about our worldwide shipping solutions.`
    },
    {
      id: 304,
      slug: 'ahmad-fabrics-summer-collection-luxury-lawn',
      title: 'Ahmad Fabrics Summer Collection: A Showcase of Luxury Lawn',
      date: 'July 11, 2026',
      author: 'Creative Director',
      category: 'Lawn Collection',
      image: 'Hero4',
      summary: 'Get an exclusive look at the Ahmad Fabrics Summer Collection. Discover our signature luxury lawn, design inspirations, and artisan collaborations.',
      content: `We are thrilled to unveil the new [Ahmad Fabrics Luxury Lawn](/shop/Lawn) collection. This season, our design house draws inspiration from traditional Mughal motifs combined with contemporary European pastel color blocking.\n\n### The Artisanal Craftsmanship\nEvery outfit in this collection represents months of collaboration between our design team and local weavers in Punjab. We utilize long-staple cotton fibers to ensure the fabric remains incredibly soft and durable, even after multiple washes.\n\n### The Collection Highlights\n- **The Premium Lawn Series:** Highly breathable, featherlight weaves with subtle self-jacquard details.\n- **The Silk Dupatta Collection:** Outfitted with 100% pure silk drapes featuring vibrant, hand-painted digital art.\n- **The Embroidered Lawn Suits:** Showcasing exquisite tilla and thread embroidery that elevates the fabric for formal wear.\n\nIf you want to experience the finest in [women\'s unstitched suits](/shop/Unstitched), [explore collection](/shop) today and secure your favorite prints before they sell out.`
    },
    {
      id: 305,
      slug: '3-piece-unstitched-suit-outfit-every-occasion',
      title: '3 Piece Unstitched Suit: The Perfect Outfit for Every Occasion',
      date: 'July 11, 2026',
      author: 'Boutique Stylist',
      category: 'Fashion Guide',
      image: 'BridalHighlight',
      summary: 'Learn why the 3 piece unstitched suit is the most versatile outfit in South Asian fashion and how to style it for work, parties, and festive events.',
      content: `In the world of South Asian fashion, nothing compares to the adaptability of the **3 piece unstitched suit**. Consisting of a shirt, trouser fabric, and a dupatta, this ensemble can be adapted to fit any dress code.\n\n### Styling for Casual / Work Wear\nFor a professional or daily-wear setting, opt for clean lines and minimal embellishments. Tailor the shirt as a long, straight-cut tunic and pair it with simple cotton cigarette pants. Choose a lightweight cotton or lawn dupatta to keep things comfortable throughout the day. Browse our [latest unstitched collection](/shop/Unstitched) for work-ready options.\n\n### Styling for Formal Gatherings\nFor evening dinners or family get-togethers, elevate the suit by adding detailed trim, pearls, and lace inserts. You can also sew the trouser as a wide-leg palazzo or a traditional gharara. We recommend using a [premium lawn collection](/shop) with embroidery accents to make a statement.\n\n### The Versatility Breakdown\n1. **Fabric Options:** Choose cotton, linen, khaddar, or chiffon depending on the season.\n2. **Tailoring Silhouettes:** Sew as a short kurti, a long A-line dress, or a traditional Angrakha.\n3. **Dupatta Draping:** Style it over one shoulder, pinned neatly, or draped over both arms for a royal touch.\n\nTo discover our full range of customizable fabrics, [visit website](/) today.`
    },
    {
      id: 306,
      slug: 'affordable-lawn-suits-online-luxurious-on-budget',
      title: 'Affordable Lawn Suits Online: Looking Luxurious on a Budget',
      date: 'July 11, 2026',
      author: 'Budget Fashion Blogger',
      category: 'Shopping Guide',
      image: 'seoResourcesBanner',
      summary: 'Who says luxury has to be expensive? Discover our top tips for finding premium-quality, affordable lawn suits online and looking like a designer model.',
      content: `Every woman deserves to wear clothing that makes her feel confident and elegant. However, designer boutiques often charge exorbitant prices for simple lawns. The good news is that you can find [affordable lawn suits online](/shop) that offer the same visual appeal and comfort.\n\n### Focus on Fabric Quality Over Brand Names\nMany high-street designer houses inflate prices based solely on their logo. Instead of focusing on the label, examine the thread quality, the complexity of the prints, and the fabric composition. Look for reliable retailers like [Ahmad Fabrics Women\'s Clothing](/shop) that specialize in value-driven luxury.\n\n### DIY Designer Tailoring Hacks\n- **Buy Custom Trims:** Purchase inexpensive organza lace, pearls, or tassels and have your tailor apply them to the collar and sleeves.\n- **Contrast Styling:** Pair a budget printed shirt with a high-end silk dupatta to instantly elevate the look.\n- **Perfect the Fit:** A well-fitted Rs. 3,000 suit will always look more premium than an ill-fitting Rs. 20,000 designer suit.\n\n### Average Price Points in Pakistan\n\n| Collection Type | Standard Price Range (PKR) | Premium Replica Price Range (PKR) |\n|---|---|---|\n| Casual Printed Lawn | 2,500 - 4,500 | 2,000 - 3,500 |\n| Semi-Formal Embroidered | 6,000 - 12,000 | 4,500 - 7,500 |\n| Luxury Eid Couture | 15,000 - 25,000 | 8,000 - 12,500 |\n\n[Shop now](/shop) and explore our budget-friendly lawn options that do not compromise on style.`
    },
    {
      id: 307,
      slug: 'embroidered-lawn-suits-vs-printed-lawn',
      title: 'Embroidered Lawn Suits vs. Printed Lawn: Style Comparison',
      date: 'July 11, 2026',
      author: 'Textile Designer',
      category: 'Fashion Guide',
      image: 'Hero1',
      summary: 'Printed lawn is great for daily comfort, but embroidered lawn suits bring an added layer of elegance. Compare both styles to make the right choice.',
      content: `When building your summer wardrobe, you will encounter two primary styles: printed designs and embroidered collections. Both serve different purposes and offer unique benefits.\n\n### The Charm of Printed Lawn\nPrinted suits are featherlight and perfect for hot afternoon outings. They feature beautiful floral, abstract, or block-print patterns that are dyed directly into the fibers. Since they do not have heavy embroidery threads, they remain highly breathable and comfortable for long-term wear. Check out our [printed lawn](/shop/Lawn) collection for inspiration.\n\n### The Elegance of Embroidered Lawn Suits\nEmbroidered ensembles feature tilla, thread, or sequin detailing along the neckline, sleeves, and hemline. They have a richer texture and are perfect for evening gatherings, festive lunches, and Eid celebrations. Often, they come with additional organza borders to add a semi-formal aesthetic. Explore the [best unstitched lawn collection](/shop/Lawn) to see these ornate details.\n\n### Quick Selection Guide\n- **Choose Printed If:** You need daily comfort, low maintenance, and highly breathable activewear.\n- **Choose Embroidered If:** You are attending an event, want to make a lasting impression, and prefer structured styling.\n\nWhatever your style preference, [online boutique Pakistan](/shop) has the perfect outfit for you. Check out the latest arrivals and select your favorite pieces today.`
    },
    {
      id: 308,
      slug: 'online-clothing-store-pakistan-virtual-shopping-guide',
      title: 'Online Clothing Store Pakistan: A Guide to Virtual Fashion',
      date: 'July 11, 2026',
      author: 'Retail Tech Consultant',
      category: 'Shopping Guide',
      image: 'Hero2',
      summary: 'Virtual clothes shopping has revolutionized the way we build our wardrobe. Learn how to navigate an online clothing store in Pakistan and shop securely.',
      content: `Shopping for fashion in Pakistan has transitioned from hectic physical bazaars to smooth online experiences. A modern [online clothing store Pakistan](/shop) offers a hassle-free checkout, virtual size charts, and nationwide express shipping.\n\n### Tips for a Seamless Shopping Experience\n1. **Filter by Category:** Narrow down your choices by filtering for unstitched, ready-to-wear, or bridal collections.\n2. **Read the Care Instructions:** Ensure you know whether the fabric requires dry cleaning or gentle hand washing.\n3. **Use Secure Checkouts:** Look for platforms that offer secure bank transfers, Cash on Delivery (COD), or mobile wallets like EasyPaisa and JazzCash.\n\nAt [Ahmad Fabrics Unstitched Collection](/shop/Unstitched), we prioritize client satisfaction with detailed product specifications and clear imagery. For styling tips or sizing support, feel free to [contact us](/contact) to speak with a customer advisor.`
    },
    {
      id: 309,
      slug: 'pakistani-clothing-brand-showcase-legacy-ahmad-fabrics',
      title: 'Pakistani Clothing Brand Showcase: The Legacy of Ahmad Fabrics',
      date: 'July 11, 2026',
      author: 'Heritage Historian',
      category: 'About Us',
      image: 'Hero3',
      summary: 'Explore the history and legacy of Ahmad Fabrics. Learn how a local Lahore boutique expanded to deliver premium Pakistani fashion to women worldwide.',
      content: `The story of [Ahmad Fabrics Lawn Collection](/shop/Lawn) is built on a passion for textile heritage and artisan empowerment. Founded in Lahore, Pakistan, our brand started as a local retail shop specializing in premium unstitched cotton and lawn weaves.\n\n### The Commitment to Quality\nOver the years, we realized that the global Pakistani diaspora struggled to source authentic, premium-quality traditional wear. We set out to bridge this gap by launching our digital boutique, offering international shipping for designer suits and replicas to the USA, UK, Canada, and UAE. Today, we are proud to be recognized as a leading [Pakistani clothing brand](/shop).\n\n### Supporting Local Artisans\nWe source our embroideries and prints directly from local craftsmen in Punjab, preserving centuries-old South Asian block printing and tilla-weaving techniques. Every purchase you make helps support these artisan families.\n\nTo learn more about our design philosophy, history, and craftsmanship, please [learn more](/about) on our heritage page.`
    },
    {
      id: 310,
      slug: 'luxury-lawn-collection-premium-fabrics-embellishments',
      title: 'Luxury Lawn Collection: Premium Fabrics and Embellishments',
      date: 'July 11, 2026',
      author: 'Boutique Stylist',
      category: 'Lawn Collection',
      image: 'Hero4',
      summary: 'What defines a luxury lawn collection? Learn about high thread-count cotton, silk overlays, organza borders, and exquisite embroideries.',
      content: `A true [luxury lawn collection](/shop) is more than just summer clothing; it is a blend of premium raw materials, artistic print motifs, and high-fashion tailoring details.\n\n### The Anatomy of Luxury Lawn\n- **Super-Combed Cotton:** We select extra-long staple cotton fibers that create a smooth, silk-like texture that is highly absorbent and light.\n- **Organza Inserts:** Most luxury suits feature separate organza patches that are appliquéd onto the sleeves and trousers for a sheer, elegant finish.\n- **Tilla & Gota Embroidery:** Intricate metallic gold threads (tilla) and hand-stitched borders add a shimmering touch that is perfect for festive events.\n\n### Elevating the Silhouette\nTo look your best, ask your tailor to add custom buttons along the collar line and loop-laces along the side slits. Pair your outfit with delicate block-heel sandals and metallic earrings.\n\nTo upgrade your wardrobe this season, [shop now](/shop) and explore our premium [luxury lawn suits](/shop/Lawn) designed to turn heads.`
    },
    {
      id: 311,
      slug: 'cotton-fabric-guide-sourcing-premium-cotton-suits',
      title: 'Cotton Fabric Guide: Sourcing the Finest Premium Cotton Suits',
      date: 'July 11, 2026',
      author: 'Textile Quality Analyst',
      category: 'Fabric Guide',
      image: 'BridalHighlight',
      summary: 'Not all cotton is created equal. Read our comprehensive guide to cotton fabrics, yarn weights, and how to source premium cotton suits online.',
      content: `Cotton is the most popular natural fiber in the world, valued for its breathability, durability, and skin-friendly properties. However, when purchasing a cotton outfit, understanding fabric structure is essential to getting the best value.\n\n### The Cotton Grading Hierarchy\n1. **Egyptian Cotton:** The longest fibers in the world, creating an exceptionally soft, lustrous weave used in premium menswear and luxury lawns.\n2. **Supima Cotton:** Trademarked long-staple American cotton offering high tensile strength and color retention.\n3. **Combed Cotton:** Cotton fibers that are treated to remove short fibers and impurities, resulting in a cleaner, smoother yarn.\n\n### Understanding Thread Count (Yarn Count)\nWhen shopping at an [online fabric store](/shop), look for yarn counts like 80s or 100s. A higher number indicates finer, lighter threads, which translate to a softer drape and better comfort in warm weather. Explore our [premium cotton suits](/shop) to feel the difference.\n\nWhether you are customizing a daily shalwar kameez or designing a formal outfit, always prioritize premium fibers. Check out the full catalog at [visit website](/) and discover high-grade cotton today.`
    },
    {
      id: 312,
      slug: 'eid-collection-preview-festive-unstitched-dresses',
      title: 'Eid Collection Preview: Festive Unstitched Dresses',
      date: 'July 11, 2026',
      author: 'Creative Director',
      category: 'Eid Collection',
      image: 'seoResourcesBanner',
      summary: 'Get a sneak peek at our upcoming Eid Collection. Discover festive unstitched dresses featuring rich jacquards, fine embroideries, and silk drapes.',
      content: `Eid is a celebration of joy, gratitude, and heritage. It is also the perfect time to dress in your finest traditional attire. Our upcoming **Festive Eid Collection** showcases the perfect balance of luxury craftsmanship and comfort.\n\n### Design Highlights\n- **Intricate Neckline Borders:** Handcrafted thread-work featuring classic bootie patterns and metallic finishes.\n- **Self-Jacquard Fabrics:** Rich, textured weaves that look regal even without heavy embellishments.\n- **Pure Silk & Chiffon Dupattas:** Elegant, lightweight scarves with gold foil printing.\n\n### Planning Your Tailoring Timeline\nBecause tailors are extremely busy before Eid, we recommend ordering your [designer unstitched suits](/shop) at least 3 to 4 weeks in advance. This ensures you have ample time to finalize custom necklines, sleeve lace, and trouser stitching. Check out our [latest lawn collection](/shop/Lawn) to secure your festive wear early.\n\nCelebrate this Eid in style with a custom outfit from [Ahmad Fabrics Summer Collection](/shop). Select your favorite designs and order today.`
    },
    {
      id: 313,
      slug: 'chiffon-collection-formal-wear-elegance-weddings',
      title: 'Chiffon Collection & Formal Wear: Wedding Elegance',
      date: 'July 11, 2026',
      author: 'Boutique Couture Stylist',
      category: 'Formal Wear',
      image: 'Hero1',
      summary: 'Discover the magic of chiffon. Learn how to style embroidered chiffon suits, wedding collections, and formal wear for maximum elegance.',
      content: `Chiffon is the ultimate fabric for luxury draping. Sheer, flowing, and incredibly light, it adds a touch of romantic elegance to any formal outfit, making it a staple for weddings, festive dinners, and formal evening wear.\n\n### Styling Embroidered Chiffon Suits\nFor formal gatherings, a chiffon dress with tilla and resham work is unmatched. Tailor the shirt as an elegant long pishwas dress or a modern maxi gown. Pair it with raw silk trousers to give the outfit structural stability, and choose a raw silk slip underneath. Browse our [luxury unstitched dresses Pakistan](/shop) for inspiration.\n\n### Accessorizing Your Formal Look\n- **Jewelry:** Opt for statement Jhumkas or a delicate choker to highlight the neckline.\n- **Footwear:** Style with metallic stiletto heels or embellished khussas.\n- **Hairstyle:** Keep your hair in a soft bun or side waves to let the dupatta drape stand out.\n\nWhether you are a wedding guest or celebrating a family event, our formal collections offer the perfect mix of luxury and sophistication. [Shop now](/shop) and discover premium fashion today.`
    },
    {
      id: 314,
      slug: 'exploring-khaddar-linen-cambric-seasonal-fabrics',
      title: 'Exploring Khaddar, Linen, and Cambric: Seasonal Weaves',
      date: 'July 11, 2026',
      author: 'Textile Weaver',
      category: 'Fabric Guide',
      image: 'Hero2',
      summary: 'Learn about the characteristics and seasonal use cases of Khaddar, Linen, and Cambric cotton. Stay comfortable and stylish year-round.',
      content: `Understanding different textile weaves helps you choose the perfect fabric for each season. Here is a breakdown of three popular traditional fabrics: Khaddar, Linen, and Cambric cotton.\n\n### 1. Khaddar: The Winter Staple\nKhaddar is a hand-spun, hand-woven cotton fabric characterized by its heavy texture and warm feel. It is highly durable and perfect for the cold winter months in Pakistan. Pair a khaddar shirt with a woolen shawl for a cozy, rustic look.\n\n### 2. Linen: Breathable Casual Comfort\nLinen is made from flax fibers, offering high breathability and a beautiful, relaxed drape. It is a fantastic transition fabric for autumn and early spring. Linen suits are incredibly comfortable for daily wear.\n\n### 3. Cambric: The Semi-Formal Base\nCambric is a closely woven, smooth cotton fabric that has a slight sheen. It is sturdier than lawn but lighter than khaddar, making it the perfect choice for transition wear and structured embroidered shirts. Pair it with chiffon drapes for a beautiful look.\n\nExplore our [premium fabric collection](/shop) to find the perfect material for your next outfit. Whether you are looking for summer lawns or cozy winter wear, [shop unstitched clothes](/shop/Unstitched) at our boutique for the finest quality.`
    },
    {
      id: 315,
      slug: 'ultimate-online-fabric-store-directory-pakistani-fashion',
      title: 'The Ultimate Online Fabric Store Directory: Sourcing Couture',
      date: 'July 11, 2026',
      author: 'E-Commerce Retail Analyst',
      category: 'Shopping Guide',
      image: 'Hero3',
      summary: 'Looking for authentic Pakistani designer suits and fabrics? Read our guide to finding the best online fabric store and shopping from anywhere.',
      content: `Sourcing authentic Pakistani fashion if you live abroad can be challenging. Many international websites sell low-quality replicas or mark up prices excessively. An authentic, high-quality [online fabric store](/shop) solves this by delivering premium textiles straight from the manufacturing hub of Lahore to your doorstep.\n\n### Sourcing Authenticity Check\n- **Check Sourcing Details:** Premium brands like [Ahmad Fabrics 3 Piece Suits](/shop/Unstitched) source their cotton directly from Burewala and Multan, ensuring long-staple durability.\n- **Examine Detailed Images:** Look for close-up shots of print edges, sewing details, and tilla embroidery to verify quality.\n- **Client Support:** Trusted stores provide dedicated style advisors to answer questions about tailoring options.\n\nWhether you are shopping for a luxury lawn collection or looking for casual everyday linen, you can browse, select, and customize your clothing with ease. [Visit website](/) to view our latest arrivals and experience premium Pakistani fashion today.`
    }
  ];

  // We want to insert these at the top of the export const blogs array.
  // The array starts at `export const blogs = [`
  const arrayStartText = 'export const blogs = [';
  const startIndex = blogsContent.indexOf(arrayStartText);

  if (startIndex === -1) {
    throw new Error('Could not find start of blogs array');
  }

  const insertPosition = startIndex + arrayStartText.length;

  let newBlogsCode = '\n';
  newBlogs.forEach(blog => {
    newBlogsCode += `  {
    id: ${blog.id},
    slug: '${blog.slug}',
    title: '${blog.title.replace(/'/g, "\\'")}',
    date: '${blog.date}',
    author: '${blog.author}',
    category: '${blog.category}',
    image: ${blog.image},
    summary: '${blog.summary.replace(/'/g, "\\'")}',
    content: \`${blog.content}\`
  },\n`;
  });

  blogsContent = blogsContent.substring(0, insertPosition) + newBlogsCode + blogsContent.substring(insertPosition);
  fs.writeFileSync(blogsFile, blogsContent);
  console.log('Successfully appended 15 new SEO blogs to src/data/blogs.js');

  // Let's update public/sitemap.xml
  let sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
  let sitemapUrls = '  <!-- New SEO & Keyword Blogs 2026 -->\n';
  sitemapUrls += `  <url>\n    <loc>https://ahmad-cloths.vercel.app/collaborations</loc>\n    <lastmod>2026-07-11</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  
  newBlogs.forEach(blog => {
    sitemapUrls += `  <url>\n    <loc>https://ahmad-cloths.vercel.app/blog/${blog.slug}</loc>\n    <lastmod>2026-07-11</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  });

  // Insert before </urlset>
  sitemapContent = sitemapContent.replace('</urlset>', sitemapUrls + '</urlset>');
  fs.writeFileSync(sitemapFile, sitemapContent);
  console.log('Successfully added new blog URLs to public/sitemap.xml');

  // Let's update index.html static fallback links
  let indexHtml = fs.readFileSync(indexHtmlFile, 'utf8');
  let newHtmlLinks = '            <!-- New SEO Partner and Keyword Blogs 2026 -->\n';
  newHtmlLinks += `            <li><a href="/collaborations">Collaborations &amp; Backlink Partnerships Hub</a></li>\n`;
  newBlogs.forEach(blog => {
    newHtmlLinks += `            <li><a href="/blog/${blog.slug}">${blog.title}</a></li>\n`;
  });

  // Insert into the static list: Let's find `<h3>Latest Fashion &amp; Fabric Journals:</h3>` and add it before the first list item under it
  const anchorHeading = '<h3>Latest Fashion &amp; Fabric Journals:</h3>';
  const headingIndex = indexHtml.indexOf(anchorHeading);
  if (headingIndex !== -1) {
    const listStartIndex = indexHtml.indexOf('<ul>', headingIndex);
    if (listStartIndex !== -1) {
      const insertPos = listStartIndex + '<ul>'.length + 1;
      indexHtml = indexHtml.substring(0, insertPos) + newHtmlLinks + indexHtml.substring(insertPos);
      fs.writeFileSync(indexHtmlFile, indexHtml);
      console.log('Successfully added new fallback HTML links to index.html');
    }
  }

  // Let's update public/robots.txt (update date and add explicit allow rule)
  let robotsContent = fs.readFileSync(robotsFile, 'utf8');
  // Update date
  robotsContent = robotsContent.replace(/#  Updated : \d{4}-\d{2}-\d{2}/, '#  Updated : 2026-07-11');
  
  // Add Allow: /collaborations in Googlebot, Bingbot and * sections
  // Under `Allow: /blog` for Googlebot (around line 14)
  robotsContent = robotsContent.replace('Allow: /blog\r\n', 'Allow: /blog\r\nAllow: /collaborations\r\n');
  robotsContent = robotsContent.replace('Allow: /blog\n', 'Allow: /blog\nAllow: /collaborations\n');
  
  // Under `Allow: /blog` for Bingbot (around line 75)
  robotsContent = robotsContent.replace('Allow: /blog\r\nAllow: /shop', 'Allow: /blog\r\nAllow: /collaborations\r\nAllow: /shop');
  robotsContent = robotsContent.replace('Allow: /blog\nAllow: /shop', 'Allow: /blog\nAllow: /collaborations\nAllow: /shop');

  // Under `Allow: /blog` for * (around line 275)
  robotsContent = robotsContent.replace('Allow: /blog\r\nAllow: /shop', 'Allow: /blog\r\nAllow: /collaborations\r\nAllow: /shop');
  robotsContent = robotsContent.replace('Allow: /blog\nAllow: /shop', 'Allow: /blog\nAllow: /collaborations\nAllow: /shop');

  fs.writeFileSync(robotsFile, robotsContent);
  console.log('Successfully updated public/robots.txt');

} catch (err) {
  console.error('Error running script:', err);
  process.exit(1);
}
