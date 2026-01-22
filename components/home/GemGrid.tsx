"use client";

import { useEffect, useRef, useState } from "react";
import GemCard, { Gem } from "./GemCard";

const gems: Gem[] = [
  {
    name: "Blue Sapphire",
    description:
      "Ceylon blue sapphires are renowned worldwide for their exceptional cornflower blue color and brilliance. These royal gems have adorned crowns and jewelry for centuries.",
    image: "/home/blue-sapphire.jpg",
    rarity: "Very Rare",
    origin: "Ceylon Origin",
    location: "Ratnapura, Sri Lanka",
    gemColor: "#1e3a8a",
  },
  {
    name: "Star Sapphire",
    description:
      "A mesmerizing phenomenon where light creates a perfect six-ray star. Sri Lankan star sapphires are among the finest in the world.",
    image: "/home/star-sapphire.jpg",
    rarity: "Very Rare",
    origin: "Ceylon Origin",
    location: "Elahera, Sri Lanka",
    gemColor: "#334155",
  },
  {
    name: "Padparadscha Sapphire",
    description:
      "The rarest of all sapphires, named after the lotus blossom. This peachy-pink gem is found almost exclusively in Sri Lanka.",
    image: "/home/padparadscha-sapphire.jpg",
    rarity: "Extremely Rare",
    origin: "Ceylon Origin",
    location: "Ratnapura, Sri Lanka",
    gemColor: "#f97316",
  },
  {
    name: "Yellow Sapphire",
    description:
      "Vibrant golden yellow sapphires symbolize prosperity and wisdom. Ceylon stones are prized for their pure, intense color.",
    image: "/home/yellow-sapphire.jpg",
    rarity: "Rare",
    origin: "Ceylon Origin",
    location: "Kuruvita, Sri Lanka",
    gemColor: "#eab308",
  },
  {
    name: "Cat's Eye Chrysoberyl",
    description:
      "Displaying a sharp chatoyant band, Sri Lankan cat's eye stones are among the most sought-after phenomenal gems.",
    image: "/home/catseye-chrysoberyl.jpg",
    rarity: "Very Rare",
    origin: "Ceylon Origin",
    location: "Meetiyagoda, Sri Lanka",
    gemColor: "#15803d",
  },
  {
    name: "Alexandrite",
    description:
      "The color-changing wonder that appears green in daylight and red under incandescent light. A true collector's treasure.",
    image: "/home/alexandrite.jpg",
    rarity: "Extremely Rare",
    origin: "Ceylon Origin",
    location: "Balangoda, Sri Lanka",
    gemColor: "#7c3aed",
  },
];

export default function GemGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="
    scroll-mt-28 relative bg-[#020617]
    py-16 sm:py-20 md:py-24
    px-4 sm:px-8 md:px-20
    overflow-hidden
  "
    >
      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#f59e0b0d] blur-3xl" />

      {/* Heading */}
      <div
        className={`relative text-center max-w-3xl mx-auto mb-20 opacity-0 ${
          visible ? "animate-sectionFade" : ""
        }`}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white">
          Our{" "}
          <span className="bg-linear-to-r from-[#fbbf24] to-[#d97706] bg-clip-text text-transparent font-medium">
            Collection
          </span>
        </h2>
        <p className="mt-5 text-[#94a3b8] text-base sm:text-lg">
          Handpicked treasures from the gem mines of Ceylon
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {gems.map((gem, index) => (
          <div
            key={gem.name}
            className={`opacity-0 ${visible ? "animate-gemFade" : ""}`}
            style={{
              animationDelay: `${index * 120}ms`,
              animationFillMode: "forwards",
            }}
          >
            <GemCard gem={gem} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
