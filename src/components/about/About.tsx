"use client";

import { useRef } from "react";

import Image from "next/image";

import Floating from "./stack/Floating";

import styles from "./styles/About.module.css";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      id="about"
      className="flex-col-reverse gap-20 xl:flex-row"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-y-7 text-center xl:text-left">
        <h1 className="text-3xl font-bold text-primary md:text-4xl xl:text-5xl">
          About <span className="text-accent">Me</span>.
        </h1>
        <p className="text-secondary">
          A Software Engineering student <br className="md:hidden" /> and the
          Google DSC lead at YU.
          <br />
          <br />
          Exploring Game Development, <br className="md:hidden" /> Flutter, and
          Fuchsia OS :)
          <br />
          <br />
          Curious about my tech stack? <br className="md:hidden" /> Click{" "}
          <strong className={styles.blink}>anywhere</strong> to find out!
        </p>
      </div>
      <Image
        src="/me.jpg"
        height={256}
        width={256}
        quality={100}
        alt="Me captured from behind at a tournament in 2021"
        className="h-48 w-48 cursor-not-allowed rounded-full border-2 border-primary transition-transform duration-300 hover:scale-110 md:h-64 md:w-64"
      />
      <Floating scope={sectionRef} />
    </section>
  );
};

export default About;
