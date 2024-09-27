import ContactForm from "./components/contact-form";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="padding-b-gone -mt-20 bg-foreground pb-16 pt-36 text-background lg:pb-32 lg:pt-72"
    >
      <div className="flex flex-col items-center justify-center gap-y-10 lg:gap-y-28">
        <h2
          className="text-center text-4xl font-medium lg:text-[4.75rem] [&>span]:opacity-50"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Let<span>’</span>s Have a Chat<span>.</span>
        </h2>

        <div
          className="relative h-[30rem] w-full max-w-[45rem] lg:h-[35rem]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
