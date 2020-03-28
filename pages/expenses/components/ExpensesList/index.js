import List from "../../../../components/List";
import ListTopbar from "../../../../components/ListTopbar";
import ListContent from "../../../../components/ListContent";
import ListItem from "../../../../components/ListItem";
import Title from "../../../../components/Title";
import ExpensesListItem from "../ExpensesListItem";
import styles from "./index.module.css";

const ExpensesList = ({ items }) => (
  <div className={styles.expensesList}>
    {items.map(period => (
      <List key={period.id} className={styles.list}>
        <ListTopbar>
          <Title as="h3">{period.date}</Title>
        </ListTopbar>

        <ListContent>
          {period.items.map(item => (
            <ListItem key={item.id}>
              <ExpensesListItem
                categoryName={item.categoryName}
                value={item.value}
                createdAt={item.createdAt}
                locationName={item.locationName}
              />
            </ListItem>
          ))}
        </ListContent>
      </List>
    ))}
  </div>
);

ExpensesList.defaultProps = {
  items: []
};

export default ExpensesList;
