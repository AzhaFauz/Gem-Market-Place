"use client";

import Image from "next/image";
import LuxuryStar from "../icons/LuxuryStar";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 40;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${Math.random() * 0.4 + 0.3}`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    let animationId: number;
    const animate = () => {
      particles.forEach((p) => {
        let top = parseFloat(p.style.top);
        let left = parseFloat(p.style.left);

        // move up
        top -= 0.3 + Math.random() * 0.2;

        // drift sideways
        left += Math.sin(Date.now() / 1000 + Math.random() * 10) * 0.05;

        // reset if out of bounds
        if (top <= 0) top = 100;
        if (left < 0) left = 100;
        if (left > 100) left = 0;

        p.style.top = `${top}%`;
        p.style.left = `${left}%`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/hero-background.jpg"
        alt="Gem Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0F172A] via-[#0F172A99] to-[#0F172AE6]" />

      {/* Floating particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Hero content */}
      <div className="relative z-30 max-w-4xl px-6 animate-fadeIn pt-16">
        {/* Spinning luxury star */}
        <div className="flex justify-center mb-10 animate-spin-luxury">
          <LuxuryStar />
        </div>

        <h1 className="text-6xl md:text-9xl font-light tracking-wide text-white">
          <span className="bg-linear-to-r from-[#FEF08A] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent">
            Zash Gems
          </span>
        </h1>

        <p className="mt-4 text-3xl text-[#FBBF24E6]">
          From the Land of Natural Stones
        </p>

        <p className="mt-6 text-[#CBD5E1] text-2xl leading-relaxed">
          Exquisite precious gemstones, ethically sourced from the treasure
          island of Sri Lanka
        </p>

        <button className="mt-10 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0f172a] font-medium px-12 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-[#F59E0B80] transition text-lg">
          Explore Collection
        </button>

        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-9 h-9 text-[#FBBF24] mx-auto" />
        </div>
      </div>

      {/* Particle styles */}
      <style jsx>{`
        .particle {
          position: absolute;
          background-color: #fbbf244d;
          border-radius: 50%;
          pointer-events: none;
          animation: drift 6s linear infinite;
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(6px, -12px) scale(1.3);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
