import Image from "next/image";

import CardLink from "./CardLink";

interface Props {
  img: string;
  alt: string;
  title: string;
  description: string;
  source: string;
  visit: string;
}

const WorkCard = ({ img, alt, title, description, source, visit }: Props) => {
  return (
    <div className="max-w-md rounded-lg border-2 border-primary bg-secondary p-2 shadow-[0.5rem_0.5rem] shadow-accent transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="flex flex-col gap-y-3 p-4 text-center">
        <Image
          src={img}
          width={288}
          height={160}
          alt={alt}
          loading="lazy"
          className="rounded-lg border-4 border-primary"
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="w-72 px-4">{description}</p>
        <p className="space-x-3 font-bold leading-[1.625rem]">
          <CardLink link={source} source={true} />
          <span>|</span>
          <CardLink link={visit} source={false} />
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
