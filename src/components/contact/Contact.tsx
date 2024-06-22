import { Form } from "./parts";

const Contact = () => {
  return (
    <section
      id="contact"
      className="z-0 -mx-5 -mt-20 min-h-screen bg-black px-5 py-44 text-white lg:py-64 xl:-mx-10 xl:px-10"
    >
      <h2 className="text-center text-4xl font-medium lg:text-[4.75rem] [&>span]:opacity-50">
        Let<span>’</span>s Have a Chat<span>.</span>
      </h2>

      <div className="relative mx-auto mt-10 h-[25rem] w-full max-w-[45rem] lg:mt-28 lg:h-[40rem]">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
