import cn from "classnames";
import styles from "./index.module.css";

const Subtitle = ({ children, className }) => {
  return <span className={cn(styles.subtitle, className)}>{children}</span>;
};

export default Subtitle;
