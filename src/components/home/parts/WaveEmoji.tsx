import styles from "../styles/WaveEmoji.module.css";

const WaveEmoji = ({ emoji }: { emoji: string }) => {
  return <span className={styles.wave}>{emoji}</span>;
};

export default WaveEmoji;
