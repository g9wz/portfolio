import Image from "next/image";

import { Text, Button } from "./parts";

const About = () => {
  return (
    <section
      id="about"
      className="-mx-5 my-10 bg-black px-5 py-10 text-white lg:mx-auto lg:my-24 lg:rounded-[64px] lg:px-14 lg:py-24 xl:px-[8%]"
    >
      <div className="flex flex-col items-center justify-between gap-y-20 xl:flex-row-reverse">
        <div className="flex max-w-[97.5%] items-center justify-center rounded-[64px] bg-white max-xl:mx-auto xl:ml-auto xl:h-[555px]">
          <Image
            src="/me.png"
            alt="My Memoji"
            width={420}
            height={420}
            quality={100}
          />
        </div>
        <div className="w-full space-y-10 text-center xl:w-[55%] xl:text-left">
          <Text />
          <Button />
        </div>
      </div>
    </section>
  );
};

export default About;
