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
  const phoneNumber = "917668394656"; // Removed + and spaces for WhatsApp URL
  const displayPhone = "+91 7668394656";
  const whatsappMessage = "Hello! I'm interested in your leather products.";

  const filtered = products.filter((p) => {
    const matchCat = cat === "All" || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen bg-white font-serif flex flex-col">
      <Navbar />

      {/* Page container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-6">
        {/* Search + Categories */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Search */}
          <div className="w-full md:w-1/2">
            <div className="relative h-11 shadow-lg rounded-3xl border border-gray-300 bg-white">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="pl-11 h-full w-full text-black rounded-3xl border-none outline-none px-4 bg-transparent"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {["All", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-md
                ${
                  cat === c
                    ? "bg-[#3D2B1F] text-white shadow-[#3D2B1F]/30"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-[#C4956A] hover:text-[#C4956A]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm font-semibold">
            {filtered.length} items found
          </p>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div 
            key={`${cat}-${query}`} 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16"
          >
            {filtered.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">
              No products match your search.
            </p>
            <p className="text-sm mt-1">Try a different keyword or category.</p>
          </div>
        )}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="group-hover:animate-pulse" />
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${displayPhone}`}
          className="group bg-[#C4956A] hover:bg-[#B08559] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={24} className="group-hover:animate-pulse" />
        </a>
      </div>

      <Footer />
    </div>
  );
}