import { FormEvent } from "react";

import FormButton from "../parts/FormButton";

import styles from "../styles/Form.module.css";

const Form = ({
  onSubmit
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      onSubmit={onSubmit}
      method="post"
      className="flex w-full flex-col gap-y-14"
    >
      <div className={styles.div}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="off"
          required={true}
          className={styles.input}
        />
      </div>
      <div className={styles.div}>
        <textarea
          name="message"
          placeholder="Your Message"
          required={true}
          className={styles.textarea}
        />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
