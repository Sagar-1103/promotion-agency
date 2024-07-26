import AboutSection from "@/components/About";
import { BackgroundBeamsDemo } from "@/components/Background";
import {HeroParallaxDemo} from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <HeroParallaxDemo/>
      <Services/>
      <AboutSection/>
      <BackgroundBeamsDemo/>
    </main>
  );
}
