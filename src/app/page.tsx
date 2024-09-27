import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import ContactSection from "@/features/contact/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <ContactSection />
    </>
  );
}
