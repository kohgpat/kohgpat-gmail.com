import cn from "classnames";
import styles from "./index.module.css";

const ExpensesListItemIcon = ({ categoryName, className }) => {
  return (
    <div
      className={cn({
        [styles.icon]: true,
        [styles.iconGrocery]: categoryName === "Grocery",
        [styles.iconTransportation]: categoryName === "Transportation",
        [styles.iconHousing]: categoryName === "Housing",
        [styles.iconFoodAndDrink]: categoryName === "Food and Drink",
        [styles.iconEntertainment]: categoryName === "Entertainment",
        [className]: className,
      })}
    />
  );
};

export default ExpensesListItemIcon;
