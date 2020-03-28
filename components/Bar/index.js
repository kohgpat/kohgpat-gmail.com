import TriangleTooltip from '../TriangleTooltip';
import styles from "./index.module.css";

const Bar = ({ mappedValue, value, max }) => (
  <div className={styles.bar}>
    <TriangleTooltip label={`${value} of ${Math.ceil(max)}`}>
      <div className={styles.barValue} style={{ width: mappedValue + "%" }} />
    </TriangleTooltip>
  </div>
);

export default Bar;
