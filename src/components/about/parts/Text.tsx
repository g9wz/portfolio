import Link from "next/link";

import ErbutLogo from "@/assets/icons/ErbutLogo";

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
        I've been actively building my skills through{" "}
        <br className="max-[527px]:hidden" /> freelance work and I'm seeking
        roles that <br className="max-[527px]:hidden" /> allow for continuous
        professional growth.
      </p>
    </>
  );
};

export default Text;
