"use client";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Phone, ShoppingBag } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function Hero() {
  return (
    <div>
      {/* ── hero ── */}
      <section className="font-serif relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#3D2B1F] via-[#8B6F47] to-[#C4956A] py-16 px-6 m-2 ml-2 mr-2 shadow-xl md:max-w-7xl mx-auto shadow shadow-xl shadow-gray-800 ">
        
        {/* decorative circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[-40px] right-[-40px] w-64 h-64 rounded-full bg-white/5 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-[-60px] left-[-30px] w-48 h-48 rounded-full bg-white/5 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl"
        >
          {/* badge */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
          >
            <Gem size={13} /> New: Premium Leather Collection
          </motion.span>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="display text-white text-4xl sm:text-5xl font-bold leading-tight"
          >
            Premium Leather,
            <br />
            <span className="text-[#D4A843]">Crafted to Last</span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 mt-4 text-base leading-relaxed max-w-md"
          >
            Discover premium leather craftsmanship made to last. From everyday
            essentials to statement pieces, Chauhan Leathers brings timeless
            style, durability, and refined design together.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex flex-wrap gap-3 mt-6"
          >
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Link
                href="/products"
                className="flex items-center gap-2 bg-white text-[#3D2B1F] font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg active:scale-95 transition-all"
              >
                <ShoppingBag size={18} /> Shop Now
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 border border-white/40 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={18} /> Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── featured products ── */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <h2 className="display text-2xl mt-5 font-bold text-[#3D2B1F] font-serif">
            Featured Products
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {products.slice(0, 6).map((p, i) => (
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

        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm text-white font-medium px-6 py-2 rounded-full bg-gradient-to-r from-[#3D2B1F] via-[#8B6F47] to-[#C4956A] hover:gap-2 transition-all shadow shadow-gray-800 shadow-xl mb-10"
          >
            View all <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
