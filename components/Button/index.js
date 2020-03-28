import cn from "classnames";
import styles from "./index.module.css";

const Button = ({ children, type, className }) => (
  <button type={type} className={cn(styles.button, className)}>
    {children}
  </button>
);

Button.defaultProps = {
  type: "submit"
};

export default Button;
