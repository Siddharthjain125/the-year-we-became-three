import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { AdventuresSection } from "@/components/sections/AdventuresSection";
import { BecomingThreeSection } from "@/components/sections/BecomingThreeSection";
import { MotherhoodSection } from "@/components/sections/MotherhoodSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { LetterSection } from "@/components/sections/LetterSection";
import { FinalMessageSection } from "@/components/sections/FinalMessageSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <JourneySection />
      <AdventuresSection />
      <BecomingThreeSection />
      <MotherhoodSection />
      <ReasonsSection />
      <LetterSection />
      <FinalMessageSection />
    </main>
  );
}
