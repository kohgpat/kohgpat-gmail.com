import Title from "../../../../components/Title";
import Bar from "../../../../components/Bar";
import styles from "./index.module.css";

const ExpensesStatsItem = ({ categoryName, value, mappedValue, max }) => {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <Title as="h5" className={styles.categoryName}>
          {categoryName}
        </Title>
        <span className={styles.value}>{value}</span>
      </div>
      <Bar mappedValue={mappedValue} value={value} max={max} />
    </div>
  );
};

export default ExpensesStatsItem;
