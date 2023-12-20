"use client";

import Type from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

import styles from "../styles/Typewriter.module.css";

const Typewriter = () => {
  const titles = [
    "Software Engineer 🧑🏻‍💻",
    "Digital Nomad 🐪",
    "CrossFit Athlete 🤸🏻"
  ];

  const emojisArePain = (s: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(s);
  };

  return (
    <div className="text-center text-3xl font-bold leading-none text-white md:text-5xl lg:text-6xl">
      <Type
        options={{
          strings: titles,
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: 100,
          cursorClassName: styles.typewriterCursor,
          // @ts-ignore - too lazy to do my own implementation
          stringSplitter: emojisArePain
        }}
      />
    </div>
  );
};

export default Typewriter;
