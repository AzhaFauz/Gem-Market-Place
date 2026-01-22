import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
import GemGrid from "@/components/home/GemGrid";
import OurStorySection from "@/components/home/OurStorySection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <OurStorySection />
      <GemGrid />
      <Footer />
    </div>
  );
}
