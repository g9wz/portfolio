import Image from "next/image";

import Link from "next/link";

import RekazLogo from "./assets/rekaz-logo";

const AboutSection = () => {
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
          className="h-[350px] w-full max-w-[97.5%] rounded-8xl object-cover max-xl:mx-auto sm:w-[400px] xl:h-[400px]"
          sizes="(max-width: 640px) 97.5vw, 400px"
          data-aos="fade-left"
          data-aos-delay="400"
        />

        <div className="w-full space-y-10 text-center xl:w-[55%] xl:text-left">
          <h2
            className="text-4xl font-medium leading-none"
            data-aos="fade-down"
          >
            About
          </h2>

          <p className="text-balance text-[1.4rem] leading-10 max-sm:-mx-1">
            <span className="block" data-aos="fade-down">
              I’m Khalil — a software engineer with diverse{" "}
              <br className="max-[527px]:hidden" /> experience in responsive web
              development.
            </span>
            <br /> <br />
            <span className="block" data-aos="fade-down">
              Currently juggling the final year of my major{" "}
              <br className="max-[527px]:hidden" /> while building at{" "}
              <Link target="_blank" href="https://rekaz.io/">
                <RekazLogo className="-mt-1 inline-flex size-8 rounded-xl bg-background p-[3.5px] transition-transform hover:scale-110" />
              </Link>{" "}
              a lot of exciting stuff :&#41;
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
