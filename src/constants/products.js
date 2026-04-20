import img1 from "../assets/ai_new/hero_collage_1.png";
import img2 from "../assets/ai_new/hero_collage_2.png";
import img3 from "../assets/ai_new/hero_collage_3.png";
import img4 from "../assets/ai_new/hero_collage_4.png";

const localImages = [img1, img2, img3, img4];

const categoriesData = [
  { name: 'Unstitched Lawn', parent: 'Ladies Wear', kw: 'lawn,unstitched,pakistani' },
  { name: 'Unstitched Silk', parent: 'Ladies Wear', kw: 'silk,unstitched,luxury' },
  { name: 'Unstitched Chiffon', parent: 'Ladies Wear', kw: 'chiffon,unstitched,bridal' },
  { name: 'Unstitched Bridal', parent: 'Bridal Wear', kw: 'bridal,unstitched,lehenga' },
  { name: 'Unstitched Khaddar', parent: 'Ladies Wear', kw: 'khaddar,unstitched,winter' },
  { name: 'Unstitched Velvet', parent: 'Ladies Wear', kw: 'velvet,unstitched,festive' }
];

const brands = [
  "Ahmadcloths Signature",
  "Maria B Unstitched",
  "Warda Ladies Wear",
  "Royal Unstitched Fabrics",
  "Silk Route Collections",
  "Velvet Threads Ladies",
  "Golden Needle Couture",
  "The Unstitched Atelier",
  "Gourmet Fabrics",
  "Pure Cotton Ladies",
  "Rustic Weaves Unstitched",
  "Heavenly Unstitched Attire"
];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateUniqueName = (catName, usedNames) => {
  let name = "";
  do {
    const brand = randomItem(brands);
    const variety = randomItem(['Classic', 'Premium', 'Special', 'Handcrafted', 'Seasonal', 'Limited']);
    const descriptor = randomItem(['Collection', 'Elegance', 'Dream', 'Sensation', 'Treasure', 'Masterpiece']);
    
    name = `${brand} ${variety} ${catName} ${descriptor}`;
  } while (usedNames.has(name));

  usedNames.add(name);
  return name;
};

const generatePrice = (category) => {
  const ranges = {
    'Unstitched Lawn': [3000, 12000],
    'Unstitched Silk': [8000, 25000],
    'Unstitched Chiffon': [12000, 45000],
    'Unstitched Bridal': [25000, 500000],
    'Unstitched Khaddar': [3500, 10000],
    'Unstitched Velvet': [10000, 35000]
  };

  const [min, max] = ranges[category] || [3000, 15000];
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const generateUnifiedRegistry = () => {
  const allProducts = [];
  let currentId = 1;
  const usedNames = new Set();

  categoriesData.forEach(cat => {
    // Generate 20 items per category for a reasonable variety (Total 120+)
    for (let i = 1; i <= 20; i++) {
      const name = generateUniqueName(cat.name, usedNames);
      const brand = name.split(" ")[0] === "Ahmadcloths" ? "Ahmadcloths Signature" : brands.find(b => name.startsWith(b)) || brands[0];

      allProducts.push({
        id: currentId,
        name,
        brand,
        price: generatePrice(cat.name),
        originalPrice: i % 5 === 0 ? generatePrice(cat.name) * 1.3 : null,
        discount: i % 5 === 0 ? 30 : 0,
        category: cat.name,
        parentCategory: cat.parent,
        image: localImages[currentId % localImages.length],
        description: `Experience the finest ${cat.name} ladies wear from ${brand}. Handcrafted using premium unstitched fabrics for an unforgettable look.`,
        details: [
          "Premium Quality Unstitched Fabric",
          "Intricate Embroidery & Patterns",
          "Ladies Fashion Heritage",
          "Luxury Collection Packaging"
        ]
      });

      currentId++;
    }
  });

  return allProducts;
};

export const products = generateUnifiedRegistry();