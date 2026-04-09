import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { Services } from "@/components/sections/Services";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Header />
      
      <div className="pt-0"> {/* Adjusted for fixed header if needed, but Hero has padding */}
        <Hero />
        <TrustSection />
        <ProblemSection />
        <Services />
        <MethodologySection />
        <TestimonialsSection />
        <EvidenceSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
