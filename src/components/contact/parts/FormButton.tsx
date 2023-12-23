import PaperPlane from "~icons/circum/paperplane";

import styles from "../styles/FormButton.module.css";

const FormButton = () => {
  return (
    <button className={styles.button} type="submit">
      <div className={styles.wrapper}>
        <PaperPlane className={styles.icon} />
      </div>
      <span className={styles.text}>Send</span>
    </button>
  );
};

export default FormButton;
