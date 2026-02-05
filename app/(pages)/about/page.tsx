"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ResponsiveImageSection from "@/components/ResponsiveImageSection";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
   const phoneNumber = "+91 7668394656"; // Example: 91 for India + 10 digit number
  const whatsappMessage = "Hello! I'm interested in your leather products.";
  return (
    <div className="bg-white font-serif">
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-20 px-6 md:px-16 bg-[#3D2B1F] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="display text-4xl md:text-5xl font-bold">
            About <span className="text-[#D4A843]">Chauhan Leathers</span>
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Crafting premium leather goods with passion, precision, and pride.
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-4xl overflow-hidden shadow-xl shadow-gray-400">
              <Image
                src="/client_image.jpeg" 
                alt="Chauhan Leathers Owner"
                width={300}
                height={400}
                className="object-cover w-full md:w-full h-[400] md:h-[600] flex items-center justify-center"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A843]/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display text-3xl font-bold text-[#3D2B1F]">
              Tradition Meets Modern Craft
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Chauhan Leathers is built on a foundation of quality craftsmanship
              and timeless design. Every product is carefully handcrafted using
              premium-grade leather to ensure durability, comfort, and elegance.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From finely stitched belts to stylish handbags and rugged footwear,
              our products reflect attention to detail and a commitment to
              excellence that our customers trust.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe leather is not just a material — it’s a statement of
              confidence, style, and character.
            </p>
          </motion.div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className=" max-w-9xl md:ml-10 bg-gray-50 md:flex md:flex-cols justify-center items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto md:ml-100"
          >
          <h2 className="display text-3xl font-bold text-center text-[#3D2B1F] mt-8">
            What We Stand For
          </h2>

          <div className="flex flex-col gap-5 mt-12 ">
            {[
              {
                title: "Premium Quality",
                desc: "Only high-grade leather and materials are used in every product.",
              },
              {
                title: "Skilled Craftsmanship",
                desc: "Each item is carefully crafted by experienced artisans.",
              },
              {
                title: "Customer Trust",
                desc: "We focus on long-term relationships built on honesty and value.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-4xl shadow-lg shadow-gray-400 text-center"
              >
                <h3 className="font-semibold text-lg text-[#3D2B1F]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ResponsiveImageSection/>
      </section>

      <Footer />
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
          href={`tel:+${phoneNumber}`}
          className="group bg-[#C4956A] hover:bg-[#B08559] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={24} className="group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  );
}
