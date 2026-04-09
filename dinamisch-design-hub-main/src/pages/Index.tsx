import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import DemoSection from "@/components/landing/DemoSection";
import ProductSection from "@/components/landing/ProductSection";
import TeamSection from "@/components/landing/TeamSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <ProductSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
