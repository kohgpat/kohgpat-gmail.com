import ExpensesListItemIcon from "../ExpensesListItemIcon";
import styles from "./index.module.css";

const ExpensesListItem = ({ categoryName, value, createdAt, locationName }) => (
  <div className={styles.item}>
    <ExpensesListItemIcon categoryName={categoryName} className={styles.icon} />
    
    <div className={styles.content}>
      <div className={styles.main}>
        <h1 className={styles.categoryName}>{categoryName}</h1>
        <h2 className={styles.value}>{value}</h2>
      </div>
      <div className={styles.meta}>
        <div className={styles.createdAt}>{createdAt}</div>
        <div className={styles.metaSeparator}>·</div>
        <div className={styles.locationName}>{locationName}</div>
      </div>
    </div>
  </div>
);

export default ExpensesListItem;
