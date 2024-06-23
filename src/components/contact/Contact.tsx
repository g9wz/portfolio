import { Form } from "./parts";

const Contact = () => {
  return (
    <section
      id="contact"
      className="padding-b-gone -mt-20 bg-foreground pb-16 pt-36 text-background lg:pb-32 lg:pt-48"
    >
      <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-28">
        <h2 className="text-center text-4xl font-medium lg:text-[4.75rem] [&>span]:opacity-50">
          Let<span>’</span>s Have a Chat<span>.</span>
        </h2>

        <div className="relative h-[25rem] w-full max-w-[45rem] lg:h-[40rem]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
