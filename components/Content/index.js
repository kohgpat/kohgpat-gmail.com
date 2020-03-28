import styles from "./index.module.css";

const Content = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

export default Content;
