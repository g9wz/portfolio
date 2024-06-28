import Link from "next/link";

import Image from "next/image";

import ArrowDown from "~icons/ph/arrow-down";
import ArrowUpRight from "~icons/ph/arrow-up-right-bold";

import { Button } from "@/components/global";

import { projects } from "@/assets/data";

const Work = () => {
  return (
    <section
      id="work"
      className="padding-b-gone relative z-10 mt-10 bg-background pb-10 lg:mt-24 lg:rounded-b-8xl lg:pb-36"
    >
      <div
        className="mb-10 flex items-center justify-between border-t-4 border-foreground p-5 leading-none lg:mx-[8%] lg:mb-20 lg:px-10 lg:pt-10"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-medium lg:text-3xl">Work</h2>
        <span className="flex items-center gap-x-1 tracking-wider lg:text-lg">
          Latest projects <ArrowDown />
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-20">
        {projects.map(({ url, image, alt, title, description }, idx) => (
          <div
            key={idx}
            className="w-full text-center md:max-w-[80%] md:text-justify lg:max-w-[60%] xl:max-w-[55%]"
          >
            <Link href={url} target="_blank" className="group space-y-8">
              <Image
                src={image}
                alt={alt}
                width={800}
                height={437}
                unoptimized
                className="rounded-xl lg:rounded-2xl"
                data-aos="fade-up"
              />
              <h3
                className="text-4xl font-medium leading-none"
                data-aos="fade-up"
              >
                {title}
                <ArrowUpRight className="mb-2 ml-3 inline-block size-9 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:hidden" />
              </h3>
            </Link>

            <p
              className="mt-4 text-lg leading-relaxed max-md:text-balance"
              data-aos="fade-up"
            >
              {description}
            </p>
          </div>
        ))}
        <Button
          asChild
          variant="dark"
          size="lg"
          className="group"
          data-aos="fade-up"
        >
          <Link href="https://github.com/g9wz/portfolio" target="_blank">
            Check more on GitHub
            <ArrowUpRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Work;
