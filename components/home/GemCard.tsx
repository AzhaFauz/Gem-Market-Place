"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import DiamondLogo from "../icons/DiamondLogo";

export type Gem = {
  name: string;
  description: string;
  image: string;
  rarity: "Common" | "Rare" | "Very Rare" | "Extremely Rare";
  origin: string;
  location: string;
  gemColor: string;
};

type GemCardProps = {
  gem: Gem;
  index: number;
  isSelected?: boolean;
};

const rarityStyles = {
  "Extremely Rare": {
    text: "#fb7185",
    bg: "#fb71851a",
    border: "#fb71854d",
  },
  "Very Rare": {
    text: "#fbbf24",
    bg: "#fbbf241a",
    border: "#fbbf244d",
  },
  Rare: {
    text: "#60a5fa",
    bg: "#60a5fa1a",
    border: "#60a5fa4d",
  },
  Common: {
    text: "#94a3b8",
    bg: "#94a3b81a",
    border: "#94a3b833",
  },
};

export default function GemCard({ gem, isSelected }: GemCardProps) {
  const rarity = rarityStyles[gem.rarity];

  return (
    <div
      className="
        group relative rounded-3xl overflow-hidden
        bg-[#02061780] backdrop-blur
        border border-[#1e293b]
        transition
        hover:-translate-y-1 hover:border-[#f59e0b4d]
        hover:shadow-[0_20px_40px_#f59e0b33]
      "
    >
      {/* Hover Glow */}
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition pointer-events-none blur-2xl bg-linear-to-br from-[#f59e0b33] to-[#d9770633]" />

      {/* Image */}
      <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden">
        <Image
          src={gem.image}
          alt={gem.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-[#02061799] to-transparent" />

        <span
          className="absolute top-3 right-3 sm:top-4 sm:right-4
          px-3 sm:px-4 py-1 rounded-full
          text-[11px] sm:text-xs font-medium backdrop-blur border"
          style={{
            color: rarity.text,
            backgroundColor: rarity.bg,
            borderColor: rarity.border,
          }}
        >
          ✨ {gem.rarity}
        </span>
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-5 md:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#fbbf24] transition">
            {gem.name}
          </h3>
          <div className="text-[#fbbf24] scale-75 group-hover:scale-90 transition shrink-0">
            <DiamondLogo />
          </div>
        </div>

        <p className="mt-3 text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed line-clamp-3">
          {gem.description}
        </p>

        <div className="my-4 sm:my-5 h-px bg-[#1e293b]" />

        <div className="space-y-3 text-sm text-[#cbd5e1]">
          <div className="flex items-center gap-3">
            <span
              className="w-4 h-4 rounded-full shrink-0"
              style={{
                border: `1px solid ${gem.gemColor}`,
                backgroundColor: `${gem.gemColor}40`,
                boxShadow: `0 0 10px ${gem.gemColor}60`,
              }}
            />
            {gem.origin}
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              gem.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition hover:text-[#fbbf24]"
          >
            <MapPin className="w-4 h-4 text-[#fbbf24] shrink-0" />
            <span>{gem.location}</span>
          </a>
        </div>

        <div className="mt-5 sm:mt-6 flex items-center justify-between gap-3">
          <span className="text-[#fbbf24] text-sm font-medium">
            Upon Request
          </span>

          <button
            className="
            bg-linear-to-r from-[#f59e0b] to-[#d97706]
            text-[#020617]
            text-sm font-medium
            px-5 sm:px-6 py-2.5
            rounded-full
            shadow-lg
            transition
            hover:scale-105 hover:shadow-[#f59e0b80]
          "
          >
            Inquire
          </button>
        </div>

        {isSelected && (
          <div
            className="absolute bottom-0 left-0 w-full h-1"
            style={{
              background: `linear-gradient(90deg, ${gem.gemColor}, ${gem.gemColor}CC)`,
              boxShadow: `0 0 16px ${gem.gemColor}AA`,
            }}
          />
        )}
      </div>
    </div>
  );
}
