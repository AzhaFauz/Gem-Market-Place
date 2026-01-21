"use client";

import Link from "next/link";
import DiamondLogo from "../icons/DiamondLogo";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] overflow-hidden animate-footerFade">
      {/* Top divider */}
      <div className="h-px bg-linear-to-r from-transparent via-[#F59E0B33] to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-50 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-[#F59E0B0D] blur-[120px]" />

      <div className="relative z-10 max-w-full mx-auto px-6 sm:px-10 md:px-20 py-14 sm:py-16 grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* Brand Section */}
        <div className="opacity-0 animate-footerFade delay-100 mx-auto md:mx-0">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-3 mb-4 transition hover:scale-105"
          >
            {/* Logo with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#FBBF24] opacity-30 blur-lg rounded-full" />
              <div className="relative text-[#FBBF24]">
                <DiamondLogo />
              </div>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-medium text-white">
                Zash Gems
              </h1>
              <p className="text-xs text-[#FBBF24CC]">Sri Lankan Treasures</p>
            </div>
          </Link>

          <p className="text-sm md:text-md leading-relaxed text-[#94A3B8] max-w-xs mx-auto md:mx-0">
            Bringing you the finest gemstones from the mystical island of Sri
            Lanka, where nature creates its most precious treasures.
          </p>
        </div>

        {/* Contact Section */}
        <div className="opacity-0 animate-footerFade delay-250">
          <h4 className="text-lg text-white mb-5">Contact Us</h4>

          <ul className="space-y-4 text-sm sm:text-md text-[#94A3B8] flex flex-col items-center md:items-start">
            <li className="flex items-center gap-3 transition hover:text-[#FBBF24]">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@zashgems.com">info@zashgems.com</a>
            </li>

            <li className="flex items-center gap-3 transition hover:text-[#FBBF24]">
              <Phone className="w-4 h-4" />
              <a href="tel:+94112345678">+94 (0) 11 234 5678</a>
            </li>

            <li className="flex items-center gap-3 transition hover:text-[#FBBF24]">
              <MapPin className="w-4 h-4" />
              <a
                href="https://www.google.com/maps/place/Ratnapura,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ratnapura, Sri Lanka
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="opacity-0 animate-footerFade delay-400">
          <h4 className="text-lg text-white mb-5">Quick Links</h4>

          <ul className="space-y-3 text-sm sm:text-md text-[#94A3B8] flex flex-col items-center md:items-start">
            {[
              "Our Collection",
              "Our Story",
              "Certification",
              "Custom Orders",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="transition hover:text-[#FBBF24]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-linear-to-r from-transparent via-[#F59E0B1A] to-transparent" />

      {/* Copyright */}
      <div className="relative z-10 text-center px-6 pt-6 pb-12 sm:pb-16 opacity-0 animate-footerFade delay-600">
        <p className="text-[#64748B] text-sm sm:text-md">
          © {new Date().getFullYear()} Zash Gems. All rights reserved. Ethically
          sourced from Sri Lanka.
        </p>
        <p className="mt-2 text-[#475569] text-xs sm:text-sm">
          Each gemstone is certified and comes with a guarantee of authenticity
        </p>
      </div>
    </footer>
  );
}
