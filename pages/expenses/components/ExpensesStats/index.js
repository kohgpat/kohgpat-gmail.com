import Title from '../../../../components/Title';
import List from '../../../../components/List';
import ListContent from '../../../../components/ListContent';
import ListItem from '../../../../components/ListItem';
import ExpensesStatsItem from '../ExpensesStatsItem';
import styles from './index.module.css';

const ExpensesStats = ({items}) => {
  const max = items
    .map(item => item.value)
    .reduce((acc, value) => (acc += value), 0);

  return (
    <div className={styles.stats}>
      <Title as="h3">Where your money go?</Title>

      <List>
        <ListContent>
          {items.map(item => (
            <ListItem key={item.id}>
              <ExpensesStatsItem
                categoryName={item.categoryName}
                value={item.value}
                mappedValue={(item.value / max) * 100}
                max={max}
              />
            </ListItem>
          ))}
        </ListContent>
      </List>
    </div>
  );
};

ExpensesStats.defaultProps = {
  items: [],
};

export default ExpensesStats;
