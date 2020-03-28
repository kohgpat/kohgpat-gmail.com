import cn from "classnames";
import styles from "./index.module.css";

const Sidebar = ({ children, secondary }) => (
  <aside className={cn(styles.sidebar, secondary && styles.sidebarSecondary)}>
    {children}
  </aside>
);

export default Sidebar;
