import Graph from "../../../../components/Graph";
import styles from "./index.module.css";

const ExpensesGraph = ({ items }) => (
  <Graph items={items} className={styles.graph} />
);

export default ExpensesGraph;
