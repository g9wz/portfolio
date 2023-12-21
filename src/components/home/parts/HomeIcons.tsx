import styles from "../styles/HomeIcon.module.css";

import Résumé from "~icons/line-md/text-box";
import Email from "~icons/line-md/email";

const HomeIcons = () => {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-6">
      <a href="#" className={styles.icon}>
        <Résumé className="h-6 w-6" /> Résumé
      </a>
      <a href="#contact" className={styles.icon}>
        <Email className="h-6 w-6" /> Contact
      </a>
    </div>
  );
};

export default HomeIcons;
