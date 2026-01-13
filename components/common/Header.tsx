"use client";

import Link from "next/link";
import DiamondLogo from "../icons/DiamondLogo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Collection", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0F172ACC] border-b border-[#F59E0B33]">
      <div className="max-w-full mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo + Brand Text as link */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer transform transition duration-300 group hover:scale-105"
        >
          <DiamondLogo />
          <div>
            <h1 className="text-lg sm:text-2xl font-medium text-white">
              Zash Gems
            </h1>
            <p className="text-xs sm:text-xs text-[#FBBF24CC]">
              Sri Lankan Treasures
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#FBBF24] transition text-base sm:text-lg"
            >
              {item.name}
            </Link>
          ))}
          <button className="ml-6 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-medium px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-[#F59E0B80] text-sm sm:text-base transition">
            Inquire
          </button>
        </nav>

        {/* Mobile menu button with animated rotation + glow */}
        <button
          className="md:hidden text-white transform transition-transform duration-500 drop-shadow-lg hover:drop-shadow-[0_0_10px_#FBBF24CC]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`transform transition-transform duration-500 ${
              menuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {/* Mobile menu container with slide-down + fade-in items */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          menuOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center px-6 py-4 bg-[#0F172ACC] backdrop-blur-md border-t border-[#F59E0B33] text-white gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FBBF24] transition transform opacity-0 translate-y-4 text-base sm:text-lg w-full text-center"
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: `${index * 100}ms`, // stagger
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {item.name}
            </Link>
          ))}

          <button
            className="mt-2 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-medium px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-[#F59E0B80] text-sm sm:text-base w-full"
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "300ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: `${menuItems.length * 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Inquire
          </button>
        </nav>
      </div>
    </header>
  );
}
