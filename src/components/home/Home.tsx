import WaveEmoji from "./parts/WaveEmoji";
import Typewriter from "./parts/Typewriter";
import HomeIcons from "./parts/HomeIcons";

const Home = () => {
  return (
    <section id="home" className="flex-col gap-y-12">
      <h2 className="text-center text-2xl font-medium md:text-3xl lg:text-4xl">
        Hey<span className="text-accent">,</span> I'm Khalil{" "}
        <WaveEmoji emoji="👋🏻" />
      </h2>
      <Typewriter />
      <HomeIcons />
    </section>
  );
};

export default Home;
