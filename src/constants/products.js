import img1 from "../assets/ai_new/hero_collage_1.png";
import img2 from "../assets/ai_new/hero_collage_2.png";
import img3 from "../assets/ai_new/hero_collage_3.png";
import img4 from "../assets/ai_new/hero_collage_4.png";
import highlight1 from "../assets/highlight_1.png";
import highlight2 from "../assets/highlight_2.png";
import highlight3 from "../assets/highlight_3.png";
import highlight4 from "../assets/highlight_4.png";
import bridal1 from "../assets/ai_new/bridal_highlight.png";
import bridal2 from "../assets/ai/bridal_highlight.png";
import ladies1 from "../assets/ladies1.jpg";
import ladies2 from "../assets/ladies2.jpg";
import ladies3 from "../assets/ladies3.jpg";
import ladies0 from "../assets/ladies.jpg";

const allAssets = [
  img1, img2, img3, img4, 
  highlight1, highlight2, highlight3, highlight4,
  bridal1, bridal2,
  ladies1, ladies2, ladies3, ladies0
];

const baseProducts = [
  // --- UNSTITCHED LAWN ---
  {
    id: "lawn-001",
    name: "Summer Bloom Luxury Lawn",
    brand: "Ahmadcloths Signature",
    price: 4500,
    originalPrice: 6500,
    discount: 30,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: img1,
    nature: "premium",
    description: "Premium quality unstitched lawn with intricate floral embroidery.",
    details: ["3-Piece Suit", "90/70 Quality Lawn", "Embroidered Front", "Chiffon Dupatta"]
  },
  {
    id: "lawn-002",
    name: "Golden Petals Printed Lawn",
    brand: "Maria B Unstitched",
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: ladies1,
    nature: "standard",
    description: "Classic printed lawn perfect for casual summer wear.",
    details: ["2-Piece Suit", "Pure Cotton Lawn", "Digital Print", "Dyed Trouser"]
  },
  {
    id: "lawn-003",
    name: "Midnight Azure Lawn",
    brand: "Warda Ladies Wear",
    price: 5500,
    originalPrice: 7500,
    discount: 25,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: highlight2,
    nature: "premium",
    description: "Deep blue lawn with silver thread work.",
    details: ["3-Piece Suit", "Luxury Lawn", "Heavy Embroidered Neckline", "Silk Dupatta"]
  },
  {
    id: "lawn-004",
    name: "Desert Rose Collection",
    brand: "Royal Unstitched Fabrics",
    price: 4800,
    originalPrice: null,
    discount: 0,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: ladies2,
    nature: "limited",
    description: "Exclusive desert rose motifs on fine lawn fabric.",
    details: ["3-Piece Suit", "Signature Design", "Lace Attachments Included"]
  },

  // --- UNSTITCHED SILK ---
  {
    id: "silk-001",
    name: "Royal Emerald Silk Suit",
    brand: "Ahmadcloths Signature",
    price: 12500,
    originalPrice: 15000,
    discount: 15,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: img2,
    nature: "premium",
    description: "Pure raw silk unstitched suit with tilla embroidery.",
    details: ["3-Piece Suit", "Pure Raw Silk", "Zari Embroidery", "Embroidered Border"]
  },
  {
    id: "silk-002",
    name: "Silk Route Masterpiece",
    brand: "Silk Route Collections",
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: highlight3,
    nature: "limited",
    description: "Artisanal silk with hand-painted patterns and gold leaf work.",
    details: ["3-Piece Suit", "Hand-crafted", "Luxury Packaging"]
  },
  {
    id: "silk-003",
    name: "Creamy Pearl Silk",
    brand: "Heavenly Unstitched Attire",
    price: 9500,
    originalPrice: null,
    discount: 0,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: ladies3,
    nature: "standard",
    description: "Elegant pearl white silk for a sophisticated look.",
    details: ["2-Piece Suit", "Soft Silk Fabric", "Minimalist Design"]
  },

  // --- UNSTITCHED CHIFFON ---
  {
    id: "chiffon-001",
    name: "Ethereal Night Chiffon",
    brand: "Ahmadcloths Signature",
    price: 8500,
    originalPrice: 12000,
    discount: 30,
    category: "Unstitched Chiffon",
    parentCategory: "Ladies Wear",
    image: img3,
    nature: "premium",
    description: "Breathtaking black chiffon with sequence work.",
    details: ["3-Piece Suit", "Fine Chiffon", "Full Front Embroidery", "Dyed Grip Inner"]
  },
  {
    id: "chiffon-002",
    name: "Floral Dream Chiffon",
    brand: "Golden Needle Couture",
    price: 7200,
    originalPrice: 9000,
    discount: 20,
    category: "Unstitched Chiffon",
    parentCategory: "Ladies Wear",
    image: highlight1,
    nature: "standard",
    description: "Lightweight chiffon with delicate floral thread embroidery.",
    details: ["3-Piece Suit", "Summer Friendly", "Digital Printed Dupatta"]
  },

  // --- BRIDAL WEAR ---
  {
    id: "bridal-001",
    name: "The Lahore Bride Lehanga",
    brand: "Ahmadcloths Signature",
    price: 85000,
    originalPrice: 120000,
    discount: 30,
    category: "Unstitched Bridal",
    parentCategory: "Bridal Wear",
    image: bridal1,
    nature: "limited",
    description: "Magnificent bridal lehenga with heavy zardozi and kora work.",
    details: ["Full Set", "Handcrafted in Lahore", "Premium Velvet Patchwork", "Net Dupatta with Borders"]
  },
  {
    id: "bridal-002",
    name: "Royal Heritage Pishwas",
    brand: "Ahmadcloths Signature",
    price: 65000,
    originalPrice: null,
    discount: 0,
    category: "Unstitched Bridal",
    parentCategory: "Bridal Wear",
    image: bridal2,
    nature: "premium",
    description: "Traditional pishwas design with a modern twist.",
    details: ["Unstitched Fabric", "Antique Tilla Work", "Stone Embellishments"]
  },

  // --- KHADDAR ---
  {
    id: "khaddar-001",
    name: "Winter Warmth Khaddar",
    brand: "Pure Cotton Ladies",
    price: 3500,
    originalPrice: 4500,
    discount: 20,
    category: "Unstitched Khaddar",
    parentCategory: "Ladies Wear",
    image: ladies0,
    nature: "standard",
    description: "Thick, high-quality khaddar for the winter season.",
    details: ["3-Piece Suit", "Hand-woven Khaddar", "Traditional Prints"]
  },
  {
    id: "khaddar-002",
    name: "Rustic Weave Collection",
    brand: "Rustic Weaves Unstitched",
    price: 4200,
    originalPrice: null,
    discount: 0,
    category: "Unstitched Khaddar",
    parentCategory: "Ladies Wear",
    image: highlight4,
    nature: "premium",
    description: "Premium khaddar with embroidered patches.",
    details: ["3-Piece Suit", "Luxury Khaddar", "Embroidered Neck and Sleeves"]
  },

  // --- VELVET ---
  {
    id: "velvet-001",
    name: "Regal Plum Velvet",
    brand: "Velvet Threads Ladies",
    price: 15500,
    originalPrice: 20000,
    discount: 22,
    category: "Unstitched Velvet",
    parentCategory: "Ladies Wear",
    image: img4,
    nature: "premium",
    description: "Micro velvet 9000 with heavy gold thread work.",
    details: ["3-Piece Suit", "Micro Velvet 9000", "Gold Tilla Work", "Silk Trouser"]
  }
];

// Add more generated products to reach a good number (~40-50)
const categories = [
  { name: 'Unstitched Lawn', parent: 'Ladies Wear' },
  { name: 'Unstitched Silk', parent: 'Ladies Wear' },
  { name: 'Unstitched Chiffon', parent: 'Ladies Wear' },
  { name: 'Unstitched Bridal', parent: 'Bridal Wear' },
  { name: 'Unstitched Khaddar', parent: 'Ladies Wear' },
  { name: 'Unstitched Velvet', parent: 'Ladies Wear' }
];

const brands = [
  "Ahmadcloths Signature", "Maria B Unstitched", "Warda Ladies Wear", 
  "Royal Unstitched Fabrics", "Silk Route Collections", "Velvet Threads Ladies", 
  "Golden Needle Couture", "The Unstitched Atelier"
];

const extraProducts = [];
for (let i = 1; i <= 36; i++) {
  const cat = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const image = allAssets[i % allAssets.length];
  
  extraProducts.push({
    id: `gen-${i}`,
    name: `${brand} ${cat.name} Edition ${i}`,
    brand: brand,
    price: 3000 + (i * 200),
    originalPrice: 4000 + (i * 250),
    discount: 10 + (i % 20),
    category: cat.name,
    parentCategory: cat.parent,
    image: image,
    nature: i % 3 === 0 ? "premium" : (i % 5 === 0 ? "limited" : "standard"),
    description: `Exquisite ${cat.name} from the latest ${brand} collection.`,
    details: ["Premium Fabric", "Authentic Design", "Limited Edition Pieces"]
  });
}

export const products = [...baseProducts, ...extraProducts];
