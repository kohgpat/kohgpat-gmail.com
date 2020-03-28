import styles from "./index.module.css";

const ListItem = ({ children }) => (
  <li className={styles.listItem}>{children}</li>
);

export default ListItem;
