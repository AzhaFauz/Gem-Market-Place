import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center"></main>
    </div>
  );
}
