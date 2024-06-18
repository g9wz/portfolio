import Link from "next/link";

import TwitterX from "~icons/line-md/twitter-x";
import GithubIcon from "~icons/line-md/github-loop";
import LinkedinIcon from "~icons/line-md/linkedin";

const links = [
  {
    url: "https://x.com/iKhalilM",
    icon: TwitterX,
    name: "X (Previously Twitter)",
  },
  {
    url: "https://github.com/g9wz",
    icon: GithubIcon,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/khalil-melhem/",
    icon: LinkedinIcon,
    name: "Linkedin",
  },
];

const Hero = () => {
  return (
    <section className="mt-20 md:mt-32 lg:px-[4%] xl:px-[8%]">
      <h1 className="text-[2rem] font-medium !leading-[4.5rem] lg:text-5xl">
        👋🏻 Hey, I’m Khalil.
        <br />
        A Software Engineer.
        <br />
        Currently in Riyadh, Saudi Arabia.
      </h1>

      <p className="mt-9 text-sm tracking-widest lg:text-base">
        ◎︎ Last updated — June 2024
      </p>

      <ul className="mt-10 flex justify-end gap-x-6 px-2 md:mt-20">
        {links.map(({ url, icon: Icon, name }, idx) => (
          <li key={idx}>
            <Link
              href={url}
              target="_blank"
              aria-label={name}
              className="block rounded-lg p-2 transition-colors duration-300 ease-in-out hover:bg-black/[0.04]"
            >
              <Icon className="size-6" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
