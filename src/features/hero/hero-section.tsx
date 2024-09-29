import Image from "next/image";

import Links from "@/components/footer/parts/links";

import WavingHand from "./assets/waving-hand.png";
import SaudiFlag from "./assets/saudi-flag.png";

const HeroSection = () => {
  return (
    <section className="mt-20 md:mt-32 lg:px-[4%] xl:px-[8%]">
      <h1 className="text-[1.95rem] font-medium !leading-[4.5rem] lg:text-5xl">
        <div data-aos="fade-up" data-aos-delay="0">
          <Image
            priority
            src={WavingHand}
            alt="Waving Hand Emoji"
            className="-mt-3 inline-block size-[1em]"
          />{" "}
          Hey, I’m Khalil.
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          A Software Engineer.
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          Currently in Riyadh{" "}
          <Image
            priority
            src={SaudiFlag}
            alt="Saudi Flag Emoji"
            className="-mt-3 inline-block size-[1em]"
          />
        </div>
      </h1>

      <p
        className="mt-9 text-sm tracking-widest lg:text-base"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        ◎︎ Last updated — September 2024
      </p>

      <div data-aos="fade-up" data-aos-delay="800" className="mt-10 md:mt-20">
        <Links />
      </div>
    </section>
  );
};

export default HeroSection;
