import Header from "@components/header";
import Home from "@components/home";

export default function Main() {
  // copilot generated this 👍🏻
  const idk = [
    { id: "about", text: "I'm Khalil, one more time!" },
    { id: "work", text: "Yup, still Khalil. You know the drill" },
    { id: "contact", text: "Still here. Still Khalil.." }
  ];

  return (
    <>
      <Header />
      <Home />
      {idk.map(({ id, text }) => {
        return (
          <section id={id} key={id}>
            <h1 className="rounded-full bg-black/50 p-7 text-center text-3xl">
              {text} 👋🏻
            </h1>
          </section>
        );
      })}
    </>
  );
}
