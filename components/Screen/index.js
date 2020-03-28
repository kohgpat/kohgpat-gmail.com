import styles from "./index.module.css";

const Screen = ({ children }) => (
  <div className={styles.screen}>{children}</div>
);

export default Screen;
