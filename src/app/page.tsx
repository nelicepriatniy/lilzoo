import { LandingAdBanner } from "@/components/Landing/LandingAdBanner";
import { LandingFeatures } from "@/components/Landing/LandingFeatures";
import { LandingHero } from "@/components/Landing/LandingHero";
import landingStyles from "@/components/Landing/LandingPage.module.css";
import { LandingMonetizationFooter } from "@/components/Landing/LandingMonetizationFooter";
import { LandingNav } from "@/components/Landing/LandingNav";
import { LandingStorySections } from "@/components/Landing/LandingStorySections";
import { StoryMapSection } from "@/components/Landing/StoryMapSection";
import { StorySafetySection } from "@/components/Landing/StorySafetySection";
import { StorySpecialistsSection } from "@/components/Landing/StorySpecialistsSection";

export default function HomePage() {
  return (
    <div className={landingStyles.root}>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingStorySections>
        <StoryMapSection />
        <StorySpecialistsSection />
        <StorySafetySection />
      </LandingStorySections>
      <LandingAdBanner />
      <LandingMonetizationFooter />
    </div>
  );
}
