"use client";

import Link from "next/link";
import DiamondLogo from "../icons/DiamondLogo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Collection", href: "#collection" },
    { name: "Our Story", href: "#story" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#020617CC] border-b border-[#f59e0b33]"
    >
      <div className="max-w-full mx-auto px-6 md:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          {/* Icon with amber glow */}
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 0 12px #fbbf244d)",
              color: "#fbbf24",
            }}
          >
            <DiamondLogo />
          </div>

          <div>
            <h1 className="text-lg sm:text-2xl font-medium text-white">
              Zash Gems
            </h1>
            <p className="text-xs text-[#fbbf24cc]">Sri Lankan Treasures</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#cbd5e1] hover:text-[#fbbf24] transition text-lg"
            >
              {item.name}
            </Link>
          ))}

          <button className="ml-6 bg-linear-to-r from-[#f59e0b] to-[#d97706] text-[#020617] font-medium px-6 py-2 rounded-full shadow-lg transition hover:scale-105 hover:shadow-[0_10px_30px_#f59e0b80]">
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
        <nav className="flex flex-col items-center px-6 py-6 bg-[#020617CC] backdrop-blur-md border-t border-[#f59e0b33] gap-6">
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
                className="text-[#cbd5e1] hover:text-[#fbbf24] transition text-lg"
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
            className="mt-2 bg-linear-to-r from-[#f59e0b] to-[#d97706] text-[#020617] font-medium px-6 py-2 rounded-full shadow-lg w-full hover:shadow-[0_10px_30px_#f59e0b80]"
          >
            Inquire
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
