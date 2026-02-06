export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // real INR price
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
    price: 1199,
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
    price: 650,
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
    price: 559,
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
    price: 669,
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
    price: 1550,

    image: "/boots/black_boots.png",
    description:
      "Elegant black Chelsea boots featuring crocodile-textured leather and a sleek modern finish.",
    redeemable: true,
    stock: 6,
  },
  {
  id: "108",
  name: "Black Textured Leather Chelsea Boots",
  category: "Footwear",
  price: 1650,
  image: "/boots/boot1.png",
  description:
    "Sleek black leather Chelsea boots featuring a refined textured finish and elastic side panels for easy wear. Perfect for formal and smart-casual outfits.",
  redeemable: true,
  stock: 15,
},
{
  id: "109",
  name: "Brown Textured Leather Chelsea Boots",
  category: "Footwear",
  price: 1550,
  image: "/boots/boot2.png",
  description:
    "Elegant brown Chelsea boots crafted with textured leather, offering comfort, durability, and a sophisticated look for office or evening wear.",
  redeemable: true,
  stock: 10,
},
{
  id: "110",
  name: "Premium Black Pattern Leather Boots",
  category: "Footwear",
  price: 1650,
  image: "/boots/boot3.png",
  description:
    "Premium black boots with a micro-pattern leather design, cushioned sole, and modern silhouette. Built for style and all-day comfort.",
  redeemable: true,
  stock: 9,
},
  {
    id: "11",
    name: "Croc Texture Chain Handbag",
    category: "Fashion",
    price: 2299,

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
    price: 2399,

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
    price: 2199,
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
    price: 1999,

    image: "/bags/Luxury_Chain_Shoulder_Bag.png",
    description:
      "Minimalist shoulder bag crafted with textured material and a gold chain strap. Lightweight yet roomy — great for both casual and evening wear.",
    redeemable: true,
    stock: 14,
  },
  {
  id: "101",
  name: "Croc-Texture Leather Sling Bag",
  category: "Bags",
  price: 1999,
  image: "/G_Bags/bag1.png",
  description:
    "Compact crocodile-textured leather sling bag with multiple zip compartments. Ideal for daily essentials and travel.",
  redeemable: true,
  stock: 12,
},
{
  id: "102",
  name: "Classic Brown Leather Office Bag",
  category: "Bags",
  price: 2450,
  image: "/G_Bags/bag2.png",
  description:
    "Elegant brown leather office bag with sturdy handles and spacious interior. Perfect for documents and daily work use.",
  redeemable: true,
  stock: 8,
},
{
  id: "103",
  name: "Premium Black Leather Laptop Bag",
  category: "Bags",
  price: 2450,
  image: "/G_Bags/bag3.png",
  description:
    "Premium leather laptop bag with front pocket and reinforced handles. Designed for professionals and business travel.",
  redeemable: true,
  stock: 6,
},
{
  id: "104",
  name: "Leather Briefcase with Shoulder Strap",
  category: "Bags",
  price: 2550,
  image: "/G_Bags/bag4.png",
  description:
    "Stylish leather briefcase available in dark green and tan brown, includes detachable shoulder strap for convenience.",
  redeemable: true,
  stock: 5,
},
{
  id: "105",
  name: "Croc-Embossed Brown Leather Handbag",
  category: "Bags",
  price: 2250,
  image: "/G_Bags/bag5.png",
  description:
    "Premium croc-embossed leather handbag with smooth finish and durable handles. A blend of luxury and utility.",
  redeemable: true,
  stock: 4,
},
{
  id: "106",
  name: "Vintage Leather Messenger Bag",
  category: "Bags",
  price: 2700,
  image: "/G_Bags/bag6.png",
  description:
    "Vintage-style dark brown leather messenger bag with metal fittings and shoulder strap. Ideal for office or travel.",
  redeemable: true,
  stock: 7,
},
{
  id: "107",
  name: "Leather Hair-On Travel Duffle Bag",
  category: "Travel Bags",
  price: 3750,
  image: "/G_Bags/bag7.png",
  description:
    "Statement travel duffle bag crafted with genuine leather and hair-on hide. Spacious, rugged, and perfect for short trips.",
  redeemable: true,
  stock: 3,
},
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const categories = [...new Set(products.map((p) => p.category))];
