import Header from "@components/header";
import Home from "@components/home";
import About from "@components/about";
import Work from "@components/work";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Work />
      <section id="contact">
        <h1 className="rounded-full bg-black/50 p-7 text-center text-3xl">
          Still here. Still Khalil.. 👋🏻
        </h1>
      </section>
    </>
  );
}
