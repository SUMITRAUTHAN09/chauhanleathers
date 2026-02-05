"use client";
import { Product } from "@/data/products";
import { Gem } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="font-serif group relative flex flex-col bg-white border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:border-[#C4956A] transition-all duration-300 shadow-xl shadow-gray-600">
      {/* redeemable badge */}
      {product.redeemable && (
        <span className="absolute top-3 left-3 z-10 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Gem size={11} /> Redeemable
        </span>
      )}

      {/* image wrapper */}
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* body */}
      <div className="p-4 flex flex-col flex-1 bg-white ">
        <span className="text-xs font-medium text-[#C4956A] uppercase tracking-wide">
          {product.category}
        </span>
        <Link href={`/products/${product.id}`} className="block mt-0.5">
          <h3 className="font-semibold text-[#3D2B1F] group-hover:text-[#C4956A] transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* price row */}
        <div className="mt-auto pt-3 flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-[#3D2B1F]">
              ₹{product.price}
            </span>
            {product.redeemable && (
              <span className="block text-xs text-red-400 mt-0.5 line-through">
                ₹{product.price + 500}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}