"use client";

import Image from "next/image";
import LuxuryStar from "../icons/LuxuryStar";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Particle logic (unchanged)
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = window.innerWidth < 640 ? 20 : 40;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${Math.random() * 0.4 + 0.3}`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(particle);
      particles.push(particle);
    }

    let animationId: number;
    const animate = () => {
      particles.forEach((p) => {
        let top = parseFloat(p.style.top);
        let left = parseFloat(p.style.left);

        top -= 0.25;
        left += Math.sin(Date.now() / 1000) * 0.04;

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
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
      {/* Background */}
      <Image
        src="/home/hero-background.jpg"
        alt="Gem Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#0F172A] via-[#0F172A99] to-[#0F172AE6]" />

      {/* Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Content */}
      <div className="relative z-30 max-w-4xl pt-16 sm:pt-20 md:pt-24">
        {/* Star */}
        <div
          className={`flex justify-center mb-6 sm:mb-10 animate-spin-luxury transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <LuxuryStar />
        </div>

        {/* Title */}
        <h1
          className={`transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-wide`}
        >
          <span className="bg-linear-to-r from-[#FEF08A] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent">
            Zash Gems
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl text-[#FBBF24E6]`}
        >
          From the Land of Natural Stones
        </p>

        {/* Description */}
        <p
          className={`transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } mt-4 sm:mt-6 text-[#CBD5E1] text-base sm:text-lg md:text-2xl leading-relaxed px-2 sm:px-0`}
        >
          Exquisite precious gemstones, ethically sourced from the treasure
          island of Sri Lanka
        </p>

        {/* CTA */}
        <button
          className={`transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } mt-8 sm:mt-10 bg-linear-to-r from-[#F59E0B] to-[#D97706] text-[#0f172a] font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-[#F59E0B80]`}
        >
          Explore Collection
        </button>

        {/* Scroll icon */}
        <div className="mt-10 sm:mt-12 animate-bounce">
          <ChevronDown className="w-7 h-7 sm:w-9 sm:h-9 text-[#FBBF24] mx-auto" />
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
