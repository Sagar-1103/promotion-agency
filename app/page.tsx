import AboutSection from "@/components/About";
import CTASection from "@/components/CTASection";
import {HeroParallaxDemo} from "@/components/HeroSection";
import { AnimatedPinDemo } from "@/components/ServiceCard";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroParallaxDemo/>
      {/* <AnimatedPinDemo/> */}
      <Services/>
      <AboutSection/>
      <CTASection/>
    </main>
  );
}
