import { useEffect, useState } from "react";
import Head from "next/head";
import Screen from "../../components/Screen";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import Main from "../../components/Main";
import SidebarCurrentUser from "../../components/SidebarCurrentUser";
import SidebarNavigation from "../../components/SidebarNavigation";
import MainTopbar from "../../components/MainTopbar";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import SaveMoreMoney from "../../components/SaveMoreMoney";
import ExpensesUsers from "./components/ExpensesUsers";
import ExpensesList from "./components/ExpensesList";
import ExpensesGraph from "./components/ExpensesGraph";
import ExpensesSidebar from "./components/ExpensesSidebar";
import ExpensesStats from "./components/ExpensesStats";
import { UPDATE_STATS_INTERVAL } from "../../constants/expenses";
import {
  getStatsGroupedByPeriod,
  getStatsGroupedByCategory,
  getExpensesByPeriod
} from "../../utils/expenses";

const Expenses = ({
  statsGroupedByPeriod,
  statsGroupedByCategory,
  expensesByPeriod
}) => (
  <Screen>
    <Head>
      <title>PFA - Expenses</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Sidebar>
      <SidebarCurrentUser
        currentUser={{ name: "Alice", email: "alice@wonderland.com" }}
      />
      <SidebarNavigation />
    </Sidebar>

    <Content>
      <Main>
        <MainTopbar
          top={
            <>
              <Title>Expenses</Title>
              <ExpensesUsers
                users={[
                  { id: 1, name: "Alice" },
                  { id: 2, name: "Bob" },
                  { id: 3, name: "Queen" }
                ]}
              />
            </>
          }
          bottom={<Subtitle>01 - 25 March, 2020</Subtitle>}
        ></MainTopbar>

        <ExpensesGraph items={statsGroupedByPeriod} />
        <ExpensesList items={expensesByPeriod} />
      </Main>

      <ExpensesSidebar>
        <ExpensesStats items={statsGroupedByCategory} />
        <SaveMoreMoney />
      </ExpensesSidebar>
    </Content>
  </Screen>
);

const ExpensesPage = ({
  statsGroupedByPeriod,
  statsGroupedByCategory,
  expensesByPeriod
}) => {
  const [state, setState] = useState({
    statsGroupedByPeriod,
    statsGroupedByCategory,
    expensesByPeriod
  });

  const fetchStats = () => {
    setState({
      statsGroupedByPeriod: getStatsGroupedByPeriod(),
      statsGroupedByCategory: getStatsGroupedByCategory(),
      expensesByPeriod: getExpensesByPeriod()
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchStats();
    }, UPDATE_STATS_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Expenses
      statsGroupedByPeriod={state.statsGroupedByPeriod}
      statsGroupedByCategory={state.statsGroupedByCategory}
      expensesByPeriod={state.expensesByPeriod}
    />
  );
};

export async function getServerSideProps() {
  const statsGroupedByPeriod = getStatsGroupedByPeriod();
  const statsGroupedByCategory = getStatsGroupedByCategory();
  const expensesByPeriod = getExpensesByPeriod();

  return {
    props: {
      statsGroupedByPeriod,
      statsGroupedByCategory,
      expensesByPeriod
    }
  };
}

export default ExpensesPage;
