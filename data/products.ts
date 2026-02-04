export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // real INR price
  tokenPrice: number; // tokens needed to redeem for free
  tokensEarned: number; // tokens awarded on purchase
  image: string;
  description: string;
  redeemable: boolean; // can user pay entirely with tokens?
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Croc-Texture Leather Belt & Wallet Set",
    category: "Accessories",
    price: 1899,
    tokenPrice: 190,
    tokensEarned: 38,
    image: "/belts/combo_.png",
    description:
      "A premium gift set featuring a crocodile-textured genuine leather belt and matching wallet. Ideal for formal and semi-formal wear.",
    redeemable: true,
    stock: 10,
  },
  {
    id: "2",
    name: "Classic Tan Leather Formal Belt",
    category: "Accessories",
    price: 999,
    tokenPrice: 100,
    tokensEarned: 20,
    image: "/belts/plain_broun_belt.png",
    description:
      "A classic tan leather belt with fine stitching and a sturdy metal buckle. Perfect for office and formal outfits.",
    redeemable: true,
    stock: 25,
  },
  {
    id: "3",
    name: "Black Leather Minimal Stitch Belt",
    category: "Accessories",
    price: 899,
    tokenPrice: 90,
    tokensEarned: 18,
    image: "/belts/black_plain_belt.png",
    description:
      "Minimalist black leather belt with contrast stitching and durable buckle, suitable for daily formal use.",
    redeemable: true,
    stock: 30,
  },
  {
    id: "4",
    name: "Handwoven Brown Leather Belt",
    category: "Accessories",
    price: 1199,
    tokenPrice: 120,
    tokensEarned: 24,
    image: "/belts/mahraja_belt.png",
    description:
      "Handwoven genuine leather belt with a textured pattern and matte buckle for a rugged yet classy look.",
    redeemable: true,
    stock: 18,
  },
  {
    id: "5",
    name: "Automatic Buckle Black Leather Belt",
    category: "Accessories",
    price: 1099,
    tokenPrice: 110,
    tokensEarned: 22,
    image: "/belts/black_plain.png",
    description:
      "Modern black leather belt with an automatic lock buckle, offering a sleek and adjustable fit.",
    redeemable: true,
    stock: 20,
  },
  {
    id: "6",
    name: "Floral Embossed Western Leather Belt",
    category: "Accessories",
    price: 1599,
    tokenPrice: 160,
    tokensEarned: 32,
    image: "/belts/cobra_.png",
    description:
      "Western-style leather belt with detailed floral embossing and antique gold-finish buckle.",
    redeemable: true,
    stock: 12,
  },
  {
    id: "7",
    name: "Black Designer Buckle Leather Belt",
    category: "Accessories",
    price: 1399,
    tokenPrice: 140,
    tokensEarned: 28,
    image: "/belts/bhakal.png",
    description:
      "Stylish black leather belt with engraved metallic buckle, perfect for premium casual wear.",
    redeemable: true,
    stock: 15,
  },
  {
    id: "8",
    name: "Brown Embossed Leather Western Belt",
    category: "Accessories",
    price: 1499,
    tokenPrice: 150,
    tokensEarned: 30,
    image: "/belts/Brown_Embossed_belt.png",
    description:
      "Premium brown leather belt with embossed patterns and antique-finish buckle for a bold look.",
    redeemable: true,
    stock: 14,
  },
  {
    id: "9",
    name: "Brown Croc-Pattern Chelsea Boots",
    category: "Footwear",
    price: 1650,
    tokenPrice: 165,
    tokensEarned: 33,
    image: "/boots/brown_boots.png",
    description:
      "Stylish brown Chelsea boots with crocodile-textured leather and elastic side panels for comfort.",
    redeemable: true,
    stock: 8,
  },
  {
    id: "10",
    name: "Black Croc-Pattern Chelsea Boots",
    category: "Footwear",
    price: 1799,
    tokenPrice: 180,
    tokensEarned: 36,
    image: "/boots/black_boots.png",
    description:
      "Elegant black Chelsea boots featuring crocodile-textured leather and a sleek modern finish.",
    redeemable: true,
    stock: 6,
  },
  {
    id: "11",
    name: "Croc Texture Chain Handbag",
    category: "Fashion",
    price: 1899,
    tokenPrice: 190,
    tokensEarned: 38,
    image: "/bags/Croc_Texture_Chain_Handbag.png",
    description:
      "Elegant croc-textured handbag with a premium gold chain accent. Spacious interior with a structured silhouette, perfect for parties or formal outings.",
    redeemable: true,
    stock: 12,
  },
  {
    id: "12",
    name: "Classic Ostrich Pattern Tote",
    category: "Fashion",
    price: 2199,
    tokenPrice: 220,
    tokensEarned: 44,
    image: "/bags/Classic_Ostrich_Pattern_Tote.png",
    description:
      "Stylish tote featuring an ostrich-pattern finish with sturdy handles and secure zip closure. Ideal for daily use with ample storage space.",
    redeemable: true,
    stock: 7,
  },
  {
    id: "13",
    name: "Vintage Croc Top Handle Bag",
    category: "Fashion",
    price: 1999,
    tokenPrice: 200,
    tokensEarned: 40,
    image: "/bags/Vintage_Croc_Top_Handle_Bag.png",
    description:
      "Vintage-inspired handbag with a bold croc pattern and metallic detailing. Designed for a sophisticated look while keeping essentials organized.",
    redeemable: true,
    stock: 10,
  },
  {
    id: "14",
    name: "Luxury Chain Shoulder Bag",
    category: "Fashion",
    price: 1750,
    tokenPrice: 175,
    tokensEarned: 35,
    image: "/bags/Luxury_Chain_Shoulder_Bag.png",
    description:
      "Minimalist shoulder bag crafted with textured material and a gold chain strap. Lightweight yet roomy — great for both casual and evening wear.",
    redeemable: true,
    stock: 14,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const categories = [...new Set(products.map((p) => p.category))];