import { Form } from "./parts";

import { Button } from "@/components/global";

const Contact = () => {
  return (
    <section
      id="contact"
      className="padding-b-gone -mt-20 bg-black pb-16 pt-36 text-white lg:pb-32 lg:pt-48"
    >
      <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-28">
        <h2 className="text-center text-4xl font-medium lg:text-[4.75rem] [&>span]:opacity-50">
          Let<span>’</span>s Have a Chat<span>.</span>
        </h2>

        <div className="relative h-[25rem] w-full max-w-[45rem] lg:h-[40rem]">
          <Form />
        </div>

        <Button href="mailto:me@khalil.im" variant="light">
          me@khalil.im
        </Button>
      </div>
    </section>
  );
};

export default Contact;
