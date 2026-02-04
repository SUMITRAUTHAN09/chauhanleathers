"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = cat === "All" || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <motion.div
      className="w-full bg-white font-serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />

      {/* Page container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search + Categories */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6"
        >
          {/* Search */}
          <div className="w-full md:w-1/2">
            <div className="relative h-11 shadow-lg rounded-3xl border">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="ks-input pl-11 h-full w-full text-black rounded-3xl"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {["All", ...categories].map((c) => (
              <motion.button
                key={c}
                onClick={() => setCat(c)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow
                ${
                  cat === c
                    ? "bg-[#3D2B1F] text-white"
                    : "bg-white border text-gray-600 hover:border-[#C4956A]"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 mb-4"
        >
          <p className="text-gray-500 text-sm font-semibold">
            {filtered.length} items found
          </p>
        </motion.div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16"
          >
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-gray-400"
          >
            <p className="text-lg font-medium">
              No products match your search.
            </p>
            <p className="text-sm mt-1">
              Try a different keyword or category.
            </p>
          </motion.div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
}
