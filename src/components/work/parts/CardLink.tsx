import styles from "../styles/CardLink.module.css";

const CardLink = ({ link, source }: { link: string; source: boolean }) => {
  return source ? (
    <a href={link} target="_blank" rel="noopener" className={styles.link}>
      Source
    </a>
  ) : (
    <a href={link} target="_blank" rel="noopener" className={styles.link}>
      Visit
    </a>
  );
};

export default CardLink;
