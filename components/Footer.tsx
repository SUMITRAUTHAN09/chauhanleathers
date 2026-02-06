import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-gray-300  font-serif">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-30 gap-5 ">

        {/* brand */}
        <div>
          <h4 className="display text-white text-lg font-semibold mb-3">
            Chauhan <span className="text-[#C4956A]">Leathers</span>
          </h4>
          <p className="text-sm leading-relaxed">
            Discover high-quality leather products made for everyday use, combining durability, comfort, and refined style.
          </p>
        </div>

        {/* quick links */}
        <div>
          <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Quick Links</h5>
          {[
            { href:"/",         label:"Home" },
            { href:"/products", label:"Products" },
            { href:"/about", label:"About" },    
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="block text-sm py-1 hover:text-[#C4956A] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* contact */}
        <div>
          <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</h5>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><MapPin size={15} className="text-[#C4956A] shrink-0" /> Turner Road, Near ISBT Deshradun, Uttarakhand, India</p>
            <a href="tel:+91 7668394656" className="flex items-center gap-2"><Phone size={15} className="text-[#C4956A] shrink-0" /> +91 7668394656</a>
            <a href="mailto:chauhanleathers@gmail.com" className="flex items-center gap-2"><Mail  size={15} className="text-[#C4956A] shrink-0" />chauhanleathers@gmail.com</a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="max-w-7xl  flex items-center justify-between border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © 2026 Chauhan Leathers. All rights reserved. <span>Created by:<a href="https://sumnex.in"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700">SumNex Tech</a></span>
      </div>
    </footer>
  );
}
