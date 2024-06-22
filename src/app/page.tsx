import { Header } from "@/components/global";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
