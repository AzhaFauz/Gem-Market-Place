export default function LuxuryStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sparkles-icon lucide-sparkles"
    >
      {/* Main star */}
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      {/* Small sparkle lines, reduced length */}
      <path d="M20 2v2.5" /> {/* was v4 */}
      <path d="M21.5 3h-2.5" /> {/* was from 22-4 */}
      {/* Small circle, reduced radius */}
      <circle cx="4" cy="20" r="1" /> {/* was r=2 */}
    </svg>
  );
}
