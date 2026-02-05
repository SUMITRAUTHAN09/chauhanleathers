import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { MessageCircle, Phone } from "lucide-react";

export default function Home() {
  // Replace with your actual phone number (include country code without +)
  const phoneNumber = "+91 7668394656"; // Example: 91 for India + 10 digit number
  const whatsappMessage = "Hello! I'm interested in your leather products.";

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
        <Footer />
      </main>

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
    </>
  );
}