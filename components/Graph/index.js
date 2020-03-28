import TriangleTooltip from "../TriangleTooltip";
import cn from "classnames";
import styles from "./index.module.css";

const Graph = ({ items, className }) => {
  const values = items.map(item => item.value);
  const max = Math.max(...values);

  return (
    <div className={cn(styles.graph, className)}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.graphColumn}>
          <TriangleTooltip label={item.value} aria-label={item.value}>
            <div
              className={styles.graphColumnContent}
              style={{
                height: (item.value / max) * 100 + "%"
              }}
              aria-hidden
            />
          </TriangleTooltip>
        </div>
      ))}
    </div>
  );
};

Graph.defaultProps = {
  items: []
};

export default Graph;
