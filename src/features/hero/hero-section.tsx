import Links from "@/components/footer/parts/links";

import WavingHand from "./assets/waving-hand";

const HeroSection = () => {
  return (
    <section className="mt-20 md:mt-32 lg:px-[4%] xl:px-[8%]">
      <h1 className="text-[2rem] font-medium !leading-[4.5rem] lg:text-5xl">
        <div data-aos="fade-up" data-aos-delay="0">
          <WavingHand className="-mt-3 inline-block h-[1em] w-[1em]" /> Hey, I’m
          Khalil.
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          A Software Engineer.
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          Currently in Riyadh, Saudi Arabia.
        </div>
      </h1>

      <p
        className="mt-9 text-sm tracking-widest lg:text-base"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        ◎︎ Last updated — June 2024
      </p>

      <div data-aos="fade-up" data-aos-delay="800" className="mt-10 md:mt-20">
        <Links />
      </div>
    </section>
  );
};

export default HeroSection;
