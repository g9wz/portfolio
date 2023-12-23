import WorkCard from "./parts/WorkCard";

import workData from "./data/work";

const Work = () => {
  return (
    <section id="work" className="flex-col">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        My <span className="text-accent">Work</span>s!
      </h1>
      <ul className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-10 pt-10 lg:grid-cols-2 xl:grid-cols-3">
        {workData.map(
          ({ source, visit, title, description, img, alt }, index) => (
            <li key={index}>
              <WorkCard
                source={source}
                visit={visit}
                title={title}
                description={description}
                img={img}
                alt={alt}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Work;
