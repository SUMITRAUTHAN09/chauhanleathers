import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductById } from "@/data/products";
import { ArrowLeft, MessageCircle, Phone, Star } from "lucide-react";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params - this is required in Next.js 15+
  const { id } = await params;
  const product = getProductById(id);
  const phoneNumber = "917668394656"; // Removed spaces and + for WhatsApp URL
  const displayPhone = "+91 7668394656"; // For display and tel: link

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

  // Create product-specific WhatsApp message
  const whatsappMessage = `Hello! I'm interested in ordering:\n\n*${product.name}*\nPrice: ₹${product.price}\nCategory: ${product.category}\n\nPlease let me know the availability and delivery details.`;

  return (
    <div className="bg-white min-h-screen font-serif">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 mb-15">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#C4956A] transition-colors ml-2"
        >
          <ArrowLeft size={15} /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 md:gap-10 m-2">
          {/* Single Product Image */}
          <div className="ks-card overflow-hidden rounded-2xl border-2 shadow-lg shadow-gray-600 mb-5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold text-[#C4956A] uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="display text-3xl font-bold text-[#3D2B1F] mt-1">
              {product.name}
            </h1>

            {/* Rating */}
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

            {/* Stock */}
            <p
              className={`text-xs font-medium mt-3 ${product.stock > 5 ? "text-emerald-600" : "text-amber-600"}`}
            >
              {product.stock > 0
                ? `✓ ${product.stock} in stock`
                : "✗ Out of stock"}
            </p>

            {/* Price Block */}
            <div className="mt-5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#3D2B1F]">
                  ₹{product.price}
                </span>
              </div>
              {product.redeemable && (
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 border border-red-200 text-xs font-semibold px-2.5 py-0.5 rounded-full line-through">
                    ₹{product.price + 500}
                  </span>
                </div>
              )}
            </div>

            {/* Order Buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-gray-600"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
              <a
                href={`tel:${displayPhone}`}
                className="bg-[#C4956A] hover:bg-[#B08559] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-gray-600"
              >
                <Phone size={20} />
                Call
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-4 text-center text-sm text-gray-500 mt-8">
              <p>Or call us directly at <a href={`tel:${displayPhone}`} className="text-[#C4956A] hover:underline font-semibold">{displayPhone}</a></p>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle size={24} className="group-hover:animate-pulse" />
          </a>

          <a
            href={`tel:${displayPhone}`}
            className="group bg-[#C4956A] hover:bg-[#B08559] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Call us"
          >
            <Phone size={24} className="group-hover:animate-pulse" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}