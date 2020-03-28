import styles from "./index.module.css";

const MainTopbar = ({ top, bottom }) => (
  <div className={styles.topbar}>
    <div className={styles.topbarTop}>{top}</div>
    <div className={styles.topbarBottom}>{bottom}</div>
  </div>
);

export default MainTopbar;
