import Sidebar from "../../../../components/Sidebar";
import styles from "./index.module.css";

const ExpensesSidebar = ({ children }) => (
  <Sidebar secondary className={styles.sidebar}>{children}</Sidebar>
);

export default ExpensesSidebar;
