"use client";

import Link from "next/link";
import DiamondLogo from "../icons/DiamondLogo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Collection", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0F172ACC] border-b border-[#F59E0B33]"
    >
      <div className="max-w-full mx-auto px-6 md:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <DiamondLogo />
          <div>
            <h1 className="text-lg sm:text-2xl font-medium text-white">
              Zash Gems
            </h1>
            <p className="text-xs text-[#FBBF24CC]">Sri Lankan Treasures</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#FBBF24] transition text-lg"
            >
              {item.name}
            </Link>
          ))}

          <button className="ml-6 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-medium px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
            Inquire
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center px-6 py-6 bg-[#0F172ACC] backdrop-blur-md border-t border-[#F59E0B33] text-white gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 10,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FBBF24] transition text-lg"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 10,
            }}
            transition={{ delay: menuItems.length * 0.1 }}
            className="mt-2 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0F172A] font-medium px-6 py-2 rounded-full shadow-lg w-full"
          >
            Inquire
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
