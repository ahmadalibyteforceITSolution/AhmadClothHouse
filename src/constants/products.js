import heroCollage1 from "../assets/ai_new/hero_collage_1.png";
import heroCollage2 from "../assets/ai_new/hero_collage_2.png";
import heroCollage3 from "../assets/ai_new/hero_collage_3.png";
import heroCollage4 from "../assets/ai_new/hero_collage_4.png";
import highlight1 from "../assets/highlight_1.png";
import highlight2 from "../assets/highlight_2.png";
import highlight3 from "../assets/highlight_3.png";
import highlight4 from "../assets/highlight_4.png";
import bridalAi1 from "../assets/ai_new/bridal_highlight.png";
import bridalAi2 from "../assets/ai/bridal_highlight.png";
import ladiesV1 from "../assets/ladies_v1.jpg";
import ladiesV2 from "../assets/ladies_v2.jpg";
import ladiesV3 from "../assets/ladies_v3.jpg";
import ladiesMain from "../assets/ladies_main.jpg";
import rutbaMain from "../assets/rutba_main.jpg";
import rutbaV1 from "../assets/rutba_v1.jpg";
import junaidMain from "../assets/junaid_main.jpg";
import mariabMain from "../assets/mariab_main.jpg";
import mariabV1 from "../assets/mariab_v1.jpg";
import mariabV2 from "../assets/mariab_v2.jpg";
import mariabV3 from "../assets/mariab_v3.jpg";
import mariabV4 from "../assets/mariab_v4.jpg";
import mariabV5 from "../assets/mariab_v5.jpg";
import shopHeader from "../assets/ai_new/shop_header.png";
import shopInterior from "../assets/ai_new/shop_interior.png";
import hero1 from "../assets/ai/hero_1.png";
import hero2 from "../assets/ai/hero_2.png";
import hero3 from "../assets/ai/hero_3.png";
import hero4 from "../assets/ai/hero_4.png";
import nishatV1 from "../assets/nishat_v1.jpg";
import nishatV2 from "../assets/nishat_v2.webp";
import nishatV3 from "../assets/nishat_v3.jpg";
import nishatMain from "../assets/nishat_main.jpg";

// New Assets
import bossWash from "../assets/07-boss-wash-wear-light_sky.webp";
import product3932 from "../assets/3932_4_1800x1800.webp";
import product3p1 from "../assets/3p-1_3_.webp";
import asset64f from "../assets/64f02524719b92cc245da2e43650d77c.jpg";
import asset671 from "../assets/671019612_17859933426683803_7864570785276666611_n.jpg";
import gulAhmedWhite from "../assets/Embroidered-Chiffon-Dupatta-Embroidered-Lawn-Shirt-Dyed-Trouser-Gulahmed-KD-62001-Front-White_940x.webp";
import mariaBPrint from "../assets/M.PRINTS_by_Maria_B_Embroidered_Lawn_Collection_2026_Vol-29_MPT-2904-A_e0e5fc82-ed77-4dba-80d7-2b5a844d5aad.webp";
import mariaBLuxury from "../assets/Maria.B_Luxury_Embroidered_Lawn_Collection_2026_6B_55bef1bc-bdbe-496e-8866-eda84877667d.webp";
import gulAhmedPrinted from "../assets/Printed-Lawn-Dupatta-Printed-Lawn-Shirt-Dyed-Trouser-Gulahmed-CL-62205A-Front-White_940x.webp";
import rutbaVol136 from "../assets/RutbaByOrangLawnVol136_24D03_3.jpg";
import assetAab from "../assets/aab41097e3a3937ab1f41d27a6622728.jpg";
import dn32041 from "../assets/dn-32041_1.webp";
import ergteg from "../assets/ergteg-300x450.webp";
import wardaSale from "../assets/warda-sale-unstitched-suits-collection-3.webp";
import jewelrySponsored from "../assets/jewelry_sponsored.png";

// Renamed extra products
import ahmadProduct1 from "../assets/ahmad_product_1.jpg";
import ahmadProduct2 from "../assets/ahmad_product_2.jpg";
import ahmadProduct3 from "../assets/ahmad_product_3.jpg";
import ahmadProduct4 from "../assets/ahmad_product_4.jpg";
import ahmadProduct5 from "../assets/ahmad_product_5.jpg";
import ahmadProduct6 from "../assets/ahmad_product_6.jpg";
import ahmadProduct7 from "../assets/ahmad_product_7.jpg";
import ahmadProduct8 from "../assets/ahmad_product_8.jpg";
import ahmadProduct9 from "../assets/ahmad_product_9.jpg";
import ahmadProduct10 from "../assets/ahmad_product_10.jpg";
import ahmadProduct11 from "../assets/ahmad_product_11.jpg";
import ahmadProduct12 from "../assets/ahmad_product_12.jpg";
import ahmadProduct13 from "../assets/ahmad_product_13.jpg";
import ahmadProduct14 from "../assets/ahmad_product_14.jpg";
import ahmadProduct15 from "../assets/ahmad_product_15.jpg";
import ahmadProduct21 from "../assets/ahmad_product_21.jpg";
import ahmadProduct22 from "../assets/ahmad_product_22.jpg";
import ahmadProduct23 from "../assets/ahmad_product_23.jpg";
import ahmadProduct24 from "../assets/ahmad_product_24.jpg";
import ahmadProduct25 from "../assets/ahmad_product_25.jpg";
import ahmadProduct26 from "../assets/ahmad_product_26.jpg";
import ahmadProduct27 from "../assets/ahmad_product_27.jpg";
import ahmadProduct28 from "../assets/ahmad_product_28.jpg";
import ahmadProduct29 from "../assets/ahmad_product_29.jpg";
import ahmadProduct30 from "../assets/ahmad_product_30.jpg";
import ahmadProduct31 from "../assets/ahmad_product_31.jpg";
import ahmadProductMain from "../assets/ahmad_product_main.jpg";

const baseProducts = [
  {
    id: "mariab-001",
    name: "maria b luxury lawn collection",
    brand: "Maria B",
    price: 4500,
    originalPrice: 6500,
    discount: 30,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: mariabMain,
    nature: "premium",
    description: "Premium quality unstitched lawn with intricate floral embroidery and signature Maria B style.",
    details: ["3-Piece Suit", "90/70 Quality Lawn", "Embroidered Front", "Chiffon Dupatta"],
    variants: [
      { color: "Deep Red", size: "Unstitched", image: mariabV1 },
      { color: "Emerald Green", size: "Unstitched", image: mariabV2 },
      { color: "Ocean Blue", size: "Unstitched", image: mariabV3 },
      { color: "Classic Black", size: "Unstitched", image: mariabV4 },
      { color: "Sunset Orange", size: "Unstitched", image: mariabV5 }
    ]
  },
  {
    id: "mariab-002",
    name: "m.prints by maria b",
    brand: "Maria B",
    price: 5200,
    originalPrice: 6000,
    discount: 13,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: mariaBPrint,
    nature: "premium",
    description: "Maria B M.Prints collection featuring contemporary digital prints and breathable lawn fabric.",
    details: ["3-Piece Suit", "Digital Printed Shirt", "Voile Dupatta", "Dyed Trouser"]
  },
  {
    id: "mariab-003",
    name: "maria b luxury embroidered",
    brand: "Maria B",
    price: 7200,
    originalPrice: 9000,
    discount: 20,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: mariaBLuxury,
    nature: "limited",
    description: "Exclusive luxury embroidered collection for the sophisticated woman.",
    details: ["Embroidered Lawn Front", "Swarovski Buttons", "Silk Dupatta"]
  },
  {
    id: "junaid-001",
    name: "junaid jamshed classic collection",
    brand: "J.",
    price: 4500,
    originalPrice: 6500,
    discount: 30,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: junaidMain,
    nature: "standard",
    description: "Timeless designs from J. Junaid Jamshed, reflecting traditional elegance.",
    details: ["3-Piece Suit", "Pure Cotton Lawn", "Traditional Motifs"]
  },
  {
    id: "ahmad-001",
    name: "summer bloom signature lawn",
    brand: "Ahmadcloths Signature",
    price: 4500,
    originalPrice: 6500,
    discount: 30,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: heroCollage1,
    nature: "premium",
    description: "Our signature summer collection featuring vibrant floral patterns.",
    details: ["3-Piece Suit", "High-Thread Count Lawn", "Designer Embroidery"]
  },
  {
    id: "rutba-001",
    name: "rutba heritage lawn",
    brand: "Ahmadcloths Signature",
    price: 3500,
    originalPrice: 4500,
    discount: 20,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: rutbaMain,
    nature: "standard",
    description: "Authentic Rutba heritage designs on premium lawn fabric.",
    details: ["3-Piece Suit", "Hand-crafted Designs", "Summer Essentials"],
    variants: [
      { color: "Vintage Rose", size: "Unstitched", image: rutbaV1 },
      { color: "Royal Indigo", size: "Unstitched", image: rutbaVol136 }
    ]
  },
  {
    id: "warda-001",
    name: "warda midnight azure",
    brand: "Warda Ladies Wear",
    price: 5500,
    originalPrice: 7500,
    discount: 25,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: highlight2,
    nature: "premium",
    description: "Deep blue shades with exquisite silver thread work from Warda.",
    details: ["3-Piece Suit", "Luxury Lawn", "Heavy Embroidered Neckline"]
  },
  {
    id: "warda-002",
    name: "warda seasonal sale edition",
    brand: "Warda Ladies Wear",
    price: 3200,
    originalPrice: 4500,
    discount: 28,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: wardaSale,
    nature: "standard",
    description: "Special sale edition unstitched suit with floral prints.",
    details: ["3-Piece Suit", "Daily Wear Lawn", "Vibrant Colors"]
  },
  {
    id: "gulahmed-001",
    name: "gul ahmed embroidered chiffon",
    brand: "Gul Ahmed",
    price: 6200,
    originalPrice: 8000,
    discount: 22,
    category: "Unstitched Chiffon",
    parentCategory: "Ladies Wear",
    image: gulAhmedWhite,
    nature: "premium",
    description: "Elegant Gul Ahmed white chiffon suit with delicate embroidery.",
    details: ["Embroidered Chiffon Shirt", "Dyed Trouser", "Chiffon Dupatta"]
  },
  {
    id: "gulahmed-002",
    name: "gul ahmed printed lawn",
    brand: "Gul Ahmed",
    price: 4200,
    originalPrice: 5500,
    discount: 23,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: gulAhmedPrinted,
    nature: "standard",
    description: "Comfortable printed lawn from Gul Ahmed's latest collection.",
    details: ["3-Piece Suit", "Digital Printed Lawn", "Lightweight Fabric"]
  },
  {
    id: "silk-001",
    name: "royal emerald raw silk",
    brand: "Ahmadcloths Signature",
    price: 12500,
    originalPrice: 15000,
    discount: 15,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: heroCollage2,
    nature: "premium",
    description: "Pure raw silk suite with traditional gold Tilla embroidery.",
    details: ["3-Piece Suit", "Pure Raw Silk", "Zari Embroidery"]
  },
  {
    id: "silk-002",
    name: "silk route masterpiece",
    brand: "Silk Route Collections",
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: highlight3,
    nature: "limited",
    description: "Artisanal hand-painted silk with gold leaf detailing.",
    details: ["Luxury Packaging", "Hand-crafted Silk", "Designer Cut"]
  },
  {
    id: "bridal-001",
    name: "lahore heritage bridal lehenga",
    brand: "Ahmadcloths Signature",
    price: 85000,
    originalPrice: 120000,
    discount: 30,
    category: "Unstitched Bridal",
    parentCategory: "Bridal Wear",
    image: bridalAi1,
    nature: "limited",
    description: "Magnificent bridal lehenga with heavy Zardozi and Kora work.",
    details: ["Full Bridal Set", "Handcrafted in Lahore", "Premium Velvet Patchwork"],
    variants: [
      { color: "Traditional Maroon", size: "Unstitched", image: bridalAi2 }
    ]
  },
  {
    id: "velvet-001",
    name: "regal plum micro velvet",
    brand: "Ahmadcloths Signature",
    price: 15500,
    originalPrice: 20000,
    discount: 22,
    category: "Unstitched Velvet",
    parentCategory: "Ladies Wear",
    image: heroCollage4,
    nature: "premium",
    description: "High-quality Micro Velvet 9000 with heavy gold thread work.",
    details: ["Micro Velvet 9000", "Gold Tilla Work", "Silk Trouser"]
  },
  {
    id: "nishat-001",
    name: "nishat linen summer bloom",
    brand: "Nishat",
    price: 4800,
    originalPrice: 5500,
    discount: 12,
    category: "Unstitched Lawn",
    parentCategory: "Ladies Wear",
    image: nishatMain,
    nature: "standard",
    description: "Vibrant and breathable lawn from Nishat Linen's summer collection.",
    details: ["Digital Print", "Soft Lawn", "Daily Wear"],
    variants: [
      { color: "Floral Yellow", size: "Unstitched", image: nishatV1 },
      { color: "Sky Blue", size: "Unstitched", image: nishatV2 },
      { color: "Peach Bloom", size: "Unstitched", image: nishatV3 }
    ]
  },
  {
    id: "mens-001",
    name: "boss wash & wear edition",
    brand: "Ahmadcloths Signature",
    price: 3800,
    originalPrice: 4500,
    discount: 15,
    category: "Men's Unstitched",
    parentCategory: "Men's Wear",
    image: bossWash,
    nature: "standard",
    description: "Premium quality wash & wear fabric for men's traditional suits.",
    details: ["4.5 Meters Fabric", "Wrinkle Resistant", "Light Sky Color"]
  },
  {
    id: "aneela-001",
    name: "aneela's boutique silk formal",
    brand: "Aneela's",
    price: 15500,
    originalPrice: 18000,
    discount: 14,
    category: "Unstitched Silk",
    parentCategory: "Ladies Wear",
    image: shopHeader,
    nature: "premium",
    description: "Exquisite silk dress with hand-crafted embroidery from Aneela's Boutique.",
    details: ["Pure Silk", "Hand Embroidery", "Luxury Collection"],
    variants: [
      { color: "Boutique Green", size: "Unstitched", image: shopInterior },
      { color: "Royal Blue", size: "Unstitched", image: hero1 },
      { color: "Emerald Gold", size: "Unstitched", image: hero2 }
    ]
  },
  {
    id: "jewelry-001",
    name: "signature polki jewelry set",
    brand: "Ahmadcloths Signature",
    price: 15500,
    originalPrice: 20000,
    discount: 22,
    category: "Jewelry",
    parentCategory: "Accessories",
    image: jewelrySponsored,
    nature: "premium",
    description: "Exquisite handcrafted Polki jewelry set, perfect for weddings and formal events.",
    details: ["Handcrafted Design", "Gold Plated", "Semi-Precious Stones"]
  }
];

// Map remaining images to generated products
const extraAssets = [
  ahmadProduct1, ahmadProduct2, ahmadProduct3, ahmadProduct4, ahmadProduct5, 
  ahmadProduct6, ahmadProduct7, ahmadProduct8, ahmadProduct9, ahmadProduct10,
  ahmadProduct11, ahmadProduct12, ahmadProduct13, ahmadProduct14, ahmadProduct15, 
  ahmadProduct21, ahmadProduct22, ahmadProduct23, ahmadProduct24, ahmadProduct25,
  ahmadProduct26, ahmadProduct27, ahmadProduct28, ahmadProduct29, ahmadProduct30, 
  ahmadProduct31, ahmadProductMain,
  product3932, product3p1, asset64f, asset671, assetAab, dn32041, ergteg,
  hero3, hero4, highlight1, highlight4,
  ladiesV1, ladiesV2, ladiesV3, ladiesMain, heroCollage3
];

const brands = [
  "Ahmadcloths Signature", "Maria B", "Nishat", "Gul Ahmed",
  "Warda", "Aneela's", "Sana Safinaz", "Khaadi", "J."
];

const categories = [
  { name: 'Unstitched Lawn', parent: 'Ladies Wear' },
  { name: 'Unstitched Silk', parent: 'Ladies Wear' },
  { name: 'Unstitched Chiffon', parent: 'Ladies Wear' },
  { name: 'Unstitched Bridal', parent: 'Bridal Wear' },
  { name: 'Unstitched Khaddar', parent: 'Ladies Wear' },
  { name: 'Unstitched Velvet', parent: 'Ladies Wear' }
];

const extraProducts = extraAssets.map((asset, index) => {
  const brand = brands[index % brands.length];
  const cat = categories[index % categories.length];
  return {
    id: `gen-${index}`,
    name: `${brand} ${cat.name} Vol ${index + 1}`.toLowerCase(),
    brand: brand,
    price: 3500 + (index * 150),
    originalPrice: 4500 + (index * 200),
    discount: 15 + (index % 10),
    category: cat.name,
    parentCategory: cat.parent,
    image: asset,
    nature: index % 3 === 0 ? "premium" : "standard",
    description: `Exquisite ${cat.name} from the latest ${brand} collection. Featuring premium fabric and authentic designs.`,
    details: ["Premium Fabric", "Authentic Design", "2026 Collection"]
  };
});

export const products = [...baseProducts, ...extraProducts];
