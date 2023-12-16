export default function Home() {
  // copilot generated this 👍🏻
  const idk = [
    "Hey, I'm Khalil!",
    "I'm Khalil, one more time!",
    "Yup, still Khalil. You know the drill",
    "Still here. Still Khalil.."
  ];
  return (
    <>
      {idk.map((text, index) => {
        return (
          <section key={index}>
            <h1>{text} 👋🏻</h1>
          </section>
        );
      })}
    </>
  );
}
