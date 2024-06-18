import Link from "next/link";

import ErbutLogo from "./parts/ErbutLogo";

const Text = () => {
  return (
    <>
      <h2 className="text-3xl font-medium md:text-[3.625rem] xl:text-[4.75rem]">
        Who? 🤔
      </h2>

      <p className="text-pretty !leading-10 md:text-2xl">
        I’m Khalil — a software engineer with diverse{" "}
        <br className="max-sm:hidden" /> experience in responsive web
        development.
        <br /> <br />
        Currently in Riyadh, Saudi Arabia, juggling <br /> finishing my major
        while co-building
        <Link href="https://erbut.me/" target="_blank">
          <ErbutLogo className="mx-1 inline-flex size-9 rotate-[10deg] rounded-lg bg-white transition-transform hover:scale-110 md:ml-2" />
        </Link>
        .
        <br /> <br />
        I've been actively building my skills through <br /> freelance work and
        I'm seeking roles that <br /> allow for continuous professional growth.
      </p>
    </>
  );
};

export default Text;
