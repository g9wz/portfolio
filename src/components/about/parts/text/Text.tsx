import Link from "next/link";

import { ErbutLogo } from "@/assets/icons";

const Text = () => {
  return (
    <>
      <h2 className="text-4xl font-medium leading-none" data-aos="fade-down">
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
          <br className="max-[527px]:hidden" /> while co-founding Erbut
          <Link
            href="https://erbut.me/"
            target="_blank"
            aria-label="Erbut's website"
            className="mx-1.5 -mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-background align-middle transition-transform hover:scale-110"
          >
            <ErbutLogo className="size-7 py-[1px] text-foreground" />
          </Link>
          with my friend :&#41;
        </span>
        <br /> <br />
        <span className="block" data-aos="fade-down">
          I’ve been actively building my skills through{" "}
          <br className="max-[527px]:hidden" /> freelance work and I’m seeking
          roles that <br className="max-[527px]:hidden" /> allow for continuous
          professional growth.
        </span>
      </p>
    </>
  );
};

export default Text;
