"use client";

import { useForm } from "@formcarry/react";

import Form from "./parts/Form";

const Contact = () => {
  const { state, submit } = useForm({
    id: process.env.NEXT_PUBLIC_FORMCARRY_KEY as string
  });

  return (
    <section id="contact" className="max-w-lg flex-col gap-y-14">
      {state.submitted ? (
        <h1 className="text-center text-3xl font-bold md:text-4xl xl:text-5xl">
          Contact Established<span className="text-accent">,</span>
          <br />
          Await Response :)
        </h1>
      ) : (
        <>
          <h1 className="w-full text-center text-3xl font-bold md:text-left md:text-4xl xl:text-5xl">
            Let's <span className="text-accent">Connect</span>.
          </h1>
          <Form onSubmit={submit} />
        </>
      )}
    </section>
  );
};

export default Contact;
