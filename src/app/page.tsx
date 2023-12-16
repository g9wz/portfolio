import Header from "@components/header";

export default function Main() {
  // copilot generated this 👍🏻
  const idk = [
    { id: "home", text: "Hey, I'm Khalil!" },
    { id: "about", text: "I'm Khalil, one more time!" },
    { id: "work", text: "Yup, still Khalil. You know the drill" },
    { id: "contact", text: "Still here. Still Khalil.." }
  ];

  return (
    <>
      <Header />
      {idk.map(({ id, text }) => {
        return (
          <section id={id} key={id}>
            <h1>{text} 👋🏻</h1>
          </section>
        );
      })}
    </>
  );
}
