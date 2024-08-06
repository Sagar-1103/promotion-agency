import AboutSection from "@/components/About";
import { BackgroundBeamsDemo } from "@/components/Background";
import { HeroParallaxDemo } from "@/components/HeroSection";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero" className="py-16">
          <HeroParallaxDemo />
        </section>
        <section id="services" className="py-16">
          <Services />
        </section>
        <section id="about" className="py-16">
          <AboutSection />
        </section>
        <section id="background" className="py-16">
          <BackgroundBeamsDemo />
        </section>
      </main>
    </>
  );
}
