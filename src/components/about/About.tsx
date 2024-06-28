import Image from "next/image";

import Link from "next/link";

import { Text } from "./parts";

import { Button } from "@/components/global";

import ArrowUpRight from "~icons/ph/arrow-up-right-bold";

const About = () => {
  return (
    <section
      id="about"
      className="padding-b-gone my-10 bg-foreground py-10 text-background lg:mx-auto lg:my-24 lg:rounded-8xl lg:px-14 lg:py-24 xl:px-[8%]"
    >
      <div className="flex flex-col items-center justify-between gap-y-20 xl:flex-row-reverse">
        <Image
          src="/me.jpg"
          alt="Image of me shot from the back at a sports competition"
          quality={100}
          width={1500}
          height={1333}
          className="h-[350px] w-full max-w-[97.5%] rounded-8xl object-cover max-xl:mx-auto sm:w-[450px] xl:h-[450px]"
          sizes="(max-width: 640px) 97.5vw, 450px"
          data-aos="fade-left"
          data-aos-delay="400"
        />

        <div className="w-full space-y-10 text-center xl:w-[55%] xl:text-left">
          <Text />
          <Button
            asChild
            variant="light"
            size="lg"
            className="group"
            data-aos="fade-up"
          >
            <Link href="#" target="_blank">
              See my Resumé
              <ArrowUpRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
