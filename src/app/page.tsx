import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { BecomingThreeSection } from "@/components/sections/BecomingThreeSection";
import { MemoryGallerySection } from "@/components/sections/MemoryGallerySection";
import { LetterSection } from "@/components/sections/LetterSection";
import { FinalMessageSection } from "@/components/sections/FinalMessageSection";

export default function Home() {
  return (
    <main className="relative">
      <WelcomeSection />
      <BecomingThreeSection />
      <MemoryGallerySection />
      <LetterSection />
      <FinalMessageSection />
    </main>
  );
}
