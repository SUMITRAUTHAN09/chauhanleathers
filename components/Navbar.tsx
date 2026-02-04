"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b font-serif">
      {/* Top Bar */}
      <div className="h-14 flex items-center justify-between px-4 md:px-10 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[#3D2B1F]"
        >
          Chauhan <span className="text-[#C4956A]">Leathers</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-[#3D2B1F] relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4956A] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (overlay, not pushing content) */}
      <div
        className={`md:hidden absolute top-14 left-0 w-full bg-white border-b shadow-md transition-all duration-300 overflow-hidden
        ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-[#3D2B1F]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
