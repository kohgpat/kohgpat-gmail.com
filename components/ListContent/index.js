import styles from "./index.module.css";

const ListContent = ({ children }) => (
  <ul className={styles.listContent}>{children}</ul>
);

export default ListContent;
