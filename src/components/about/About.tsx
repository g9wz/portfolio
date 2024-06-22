import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/global";

import ErbutLogo from "@/assets/icons/ErbutLogo";

const About = () => {
  return (
    <section
      id="about"
      className="-mx-5 my-10 bg-black px-5 py-10 text-white lg:mx-auto lg:my-24 lg:rounded-[64px] lg:px-14 lg:py-24 xl:px-[8%]"
    >
      <div className="flex flex-col items-center justify-between gap-y-20 xl:flex-row-reverse">
        <div className="flex max-w-[97.5%] items-center justify-center rounded-[64px] bg-white max-xl:mx-auto xl:ml-auto xl:h-[555px]">
          <Image
            src="/me.png"
            alt="My Memoji"
            width={420}
            height={355}
            quality={100}
          />
        </div>
        <div className="w-full space-y-10 text-center xl:w-[55%] xl:text-left">
          <Text />
          <Button href="#" variant="light">
            See my Resumé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

const Text = () => {
  return (
    <>
      <h2 className="text-4xl font-medium leading-none">Who? 🤔</h2>

      <p className="text-pretty text-[1.4rem] leading-10">
        I’m Khalil — a software engineer with diverse{" "}
        <br className="max-[527px]:hidden" /> experience in responsive web
        development.
        <br /> <br />
        Currently in Riyadh, Saudi Arabia, juggling{" "}
        <br className="max-[527px]:hidden" /> finishing my major while
        co-building
        <Link href="https://erbut.me/" target="_blank">
          <ErbutLogo className="mb-1 ml-1 mr-[1.5px] inline-block size-8 rounded-xl bg-white text-black transition-transform hover:scale-110" />
        </Link>
        .
        <br /> <br />
        I’ve been actively building my skills through{" "}
        <br className="max-[527px]:hidden" /> freelance work and I’m seeking
        roles that <br className="max-[527px]:hidden" /> allow for continuous
        professional growth.
      </p>
    </>
  );
};
