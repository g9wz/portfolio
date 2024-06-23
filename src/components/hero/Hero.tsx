import { Links } from "@/components/global";

import { WavingHand } from "@/assets/icons";

const Hero = () => {
  return (
    <section className="mt-20 md:mt-32 lg:px-[4%] xl:px-[8%]">
      <h1 className="text-[2rem] font-medium !leading-[4.5rem] lg:text-5xl">
        <WavingHand className="-mt-3 inline-block h-[1em] w-[1em]" /> Hey, I’m
        Khalil.
        <br />
        A Software Engineer.
        <br />
        Currently in Riyadh, Saudi Arabia.
      </h1>

      <p className="mt-9 text-sm tracking-widest lg:text-base">
        ◎︎ Last updated — June 2024
      </p>

      <Links className="mt-10 md:mt-20" />
    </section>
  );
};

export default Hero;
