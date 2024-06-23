import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/global";

import { ErbutLogo } from "@/assets/icons";

import ArrowUpRight from "~icons/ph/arrow-up-right-bold";

const About = () => {
  return (
    <section
      id="about"
      className="padding-b-gone my-10 bg-foreground py-10 text-background lg:mx-auto lg:my-24 lg:rounded-8xl lg:px-14 lg:py-24 xl:px-[8%]"
    >
      <div className="flex flex-col items-center justify-between gap-y-20 xl:flex-row-reverse">
        <div className="flex max-w-[97.5%] items-center justify-center rounded-8xl bg-background max-xl:mx-auto xl:ml-auto xl:h-[555px]">
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
          <Button
            variant="light"
            size="lg"
            className="group"
            withIcon={
              <ArrowUpRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            }
          >
            <Link href="#" target="_blank">
              See my Resumé
            </Link>
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
      <h2 className="text-4xl font-medium leading-none">About</h2>

      <p className="text-balance text-[1.4rem] leading-10 max-sm:-mx-1">
        I’m Khalil — a software engineer with diverse{" "}
        <br className="max-[527px]:hidden" /> experience in responsive web
        development.
        <br /> <br />
        Currently juggling the final year of my major{" "}
        <br className="max-[527px]:hidden" /> while co-founding Erbut
        <Link
          href="https://erbut.me/"
          target="_blank"
          className="mx-1.5 -mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-background align-middle transition-transform hover:scale-110"
        >
          <ErbutLogo className="size-7 py-[1px] text-foreground" />
        </Link>
        with my friend :&#41;
        <br /> <br />
        I’ve been actively building my skills through{" "}
        <br className="max-[527px]:hidden" /> freelance work and I’m seeking
        roles that <br className="max-[527px]:hidden" /> allow for continuous
        professional growth.
      </p>
    </>
  );
};
