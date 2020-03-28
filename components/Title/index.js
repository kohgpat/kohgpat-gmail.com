import cn from "classnames";
import styles from "./index.module.css";

const Title = ({ children, as, className }) => {
  let Comp;

  switch (as) {
    case "h2": {
      Comp = "h2";
      break;
    }
    case "h3": {
      Comp = "h3";
      break;
    }
    case "h4": {
      Comp = "h4";
      break;
    }
    case "h5": {
      Comp = "h5";
      break;
    }
    case "h6": {
      Comp = "h6";
      break;
    }
    default: {
      Comp = "h1";
      break;
    }
  }

  return <Comp className={cn(styles.title, className)}>{children}</Comp>;
};

export default Title;
