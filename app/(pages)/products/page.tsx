"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { MessageCircle, Phone, Search } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const phoneNumber = "7668394656";
  const displayPhone = "+91 7668394656";
  const whatsappMessage = "Hello! I'm interested in your leather products.";

  const filtered = products.filter((p) => {
    const matchCat = cat === "All" || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen bg-white font-serif flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Page container */}
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 flex-1 py-4 sm:py-6 overflow-x-hidden">

        
        {/* Search + Categories */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5 sm:mb-6">
          
          {/* Search */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-10 sm:h-11 rounded-full border border-gray-300 bg-white shadow-xl shadow-gray-400">
              <Search
                size={16}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="pl-9 sm:pl-11 h-full w-full text-sm sm:text-base text-black rounded-full border-none outline-none px-3 sm:px-4 bg-transparent"
              />
            </div>
          </div>

          {/* Categories */}
         <div className="flex gap-2 overflow-x-auto max-w-full pb-2 scrollbar-hide">

            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex-shrink-0 shadow-xl shadow-gray-400
                ${
                  cat === c
                    ? "bg-[#3D2B1F] text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-[#C4956A] hover:text-[#C4956A]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-gray-500 text-xs sm:text-sm font-semibold">
            {filtered.length} items found
          </p>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div
            key={`${cat}-${query}`}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 pb-24 sm:pb-20"
          >
            {filtered.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 sm:py-24 text-gray-400">
            <p className="text-base sm:text-lg font-medium">
              No products match your search.
            </p>
            <p className="text-xs sm:text-sm mt-1">
              Try a different keyword or category.
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-50">
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} className="group-hover:animate-pulse" />
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${displayPhone}`}
          className="group bg-[#C4956A] hover:bg-[#B08559] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Call us"
        >
          <Phone size={22} className="group-hover:animate-pulse" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
