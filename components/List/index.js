import cn from "classnames";
import styles from "./index.module.css";

const List = ({ children, className }) => (
  <div className={cn(styles.list, className)}>{children}</div>
);

export default List;
