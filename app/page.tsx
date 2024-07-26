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
        <section id="testimonials" className="py-16 bg-gray-100 dark:bg-neutral-950">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">What Our Clients Say</h2>
        <div className="mt-8">
          <TestimonialSlider />
        </div>
      </section>
        <section id="background" className="py-16">
          {/* <BackgroundBeamsDemo /> */}
        </section>
      </main>
    </>
  );
}
