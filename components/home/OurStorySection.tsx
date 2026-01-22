"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Award, Heart } from "lucide-react";

export default function OurStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="scroll-mt-28 relative bg-[#020617] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ===== Background Decorative Glows ===== */}
      <div
        className="absolute -top-40 -left-40
        w-75 h-75
        sm:w-100 sm:h-100
        lg:w-150 lg:h-150
        rounded-full bg-[#f59e0b]/5 blur-[120px]"
      />

      <div
        className="absolute bottom-0 right-0
        w-75 h-75
        sm:w-100 sm:h-100
        lg:w-150 lg:h-150
        rounded-full bg-[#3b82f6]/5 blur-[120px]"
      />

      <div className="relative max-w-full mx-auto px-6 lg:px-20">
        {/* ================= HEADING ================= */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 sm:mb-20
            opacity-0 ${visible ? "animate-footerFade delay-100" : ""}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            The Island of{" "}
            <span className="bg-linear-to-r from-[#fbbf24] to-[#d97706] bg-clip-text text-transparent font-normal">
              Gems
            </span>
          </h2>

          <p className="text-[#cbd5e1] text-sm sm:text-base lg:text-lg leading-relaxed">
            Sri Lanka, known as the{" "}
            <span className="text-white">“Ratna Dweepa”</span> or Gem Island,
            has been the world’s premier source of fine gemstones for millennia.
            Our stones carry the legacy of ancient kings and the natural beauty
            of this tropical paradise.
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {[
            {
              icon: MapPin,
              title: "Sri Lankan Heritage",
              text: "Sourced from the ancient gem mines of Ceylon, known for over 2,500 years",
            },
            {
              icon: Award,
              title: "Premium Quality",
              text: "Each stone is carefully selected and certified for authenticity and brilliance",
            },
            {
              icon: Heart,
              title: "Ethical Sourcing",
              text: "Supporting local communities and sustainable mining practices",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 backdrop-blur
                bg-[#020617]/50
                border border-[#f59e0b]/20
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:border-[#f59e0b]/40
                hover:shadow-[0_30px_80px_rgba(245,158,11,0.18)]
                opacity-0 ${
                  visible ? `animate-footerFade delay-${200 + index * 150}` : ""
                }`}
            >
              {/* Card glow */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl
                  bg-linear-to-b from-[#f59e0b]/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500"
              />

              {/* Icon with glow */}
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 rounded-full bg-[#fbbf24]/30 blur-xl" />
                <item.icon className="relative w-10 h-10 text-[#fbbf24]" />
              </div>

              <h3 className="text-white text-xl font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ================= IMAGE STORY BLOCK ================= */}
        <div
          className={`relative rounded-3xl overflow-hidden
            shadow-[0_0_100px_rgba(245,158,11,0.12)]
            opacity-0 ${visible ? "animate-footerFade delay-700" : ""}`}
        >
          <Image
            src="/home/sril-lanka-story.jpg"
            alt="Sri Lanka Gem Heritage"
            width={1400}
            height={700}
            className="w-full h-65 sm:h-85 lg:h-105 object-cover"
          />

          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#020617]/40 to-transparent" />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-6 sm:p-10 lg:p-14">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-2">
                Sri Lanka
              </h3>

              <p className="text-[#fbbf24] tracking-wide text-xs sm:text-sm uppercase">
                The Land of Natural Stones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
