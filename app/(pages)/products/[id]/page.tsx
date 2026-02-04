import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductById } from "@/data/products";
import { ArrowLeft, Gem, Star } from "lucide-react";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-32 font-serif">
          <p className="text-xl font-semibold text-gray-400">
            Something went wrong 🧐
          </p>
          <p>Product not found</p>
          <Link
            href="/products"
            className="text-[#C4956A] text-sm mt-2 inline-block hover:underline"
          >
            ← Back to products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#C4956A] transition-colors mb-6"
      >
        <ArrowLeft size={15} /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* image */}
        <div className="ks-card overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* details */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold text-[#C4956A] uppercase tracking-widest">
            {product.category}
          </span>
          <h1 className="display text-3xl font-bold text-[#3D2B1F] mt-1">
            {product.name}
          </h1>

          {/* rating (decorative) */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[#D4A843] text-[#D4A843]"
              />
            ))}
            <Star size={16} className="text-gray-300" />
            <span className="text-xs text-gray-400 ml-1">(128 reviews)</span>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* stock */}
          <p
            className={`text-xs font-medium mt-3 ${product.stock > 5 ? "text-emerald-600" : "text-amber-600"}`}
          >
            {product.stock > 0
              ? `✓ ${product.stock} in stock`
              : "✗ Out of stock"}
          </p>

          {/* price block */}
          <div className="mt-5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#3D2B1F]">
                ₹{product.price}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {product.redeemable && (
                <span className="token-badge text-xs">
                  <Gem size={13} /> Redeem for {product.tokenPrice} tokens
                </span>
              )}
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                <Star size={11} /> Earn {product.tokensEarned} tokens
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
