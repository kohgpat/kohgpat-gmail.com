import Head from "next/head";
import fetchGraphqlApi from "../../utils/fetchGraphqlApi";
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

export async function getServerSideProps() {
  const statsGroupedByPeriod = [
    { value: 155 },
    { value: 93 },
    { value: 80 },
    { value: 50 },
    { value: 39 },
    { value: 40 },
    { value: 50 },
    { value: 20 },
    { value: 50 },
    { value: 60 },
    { value: 100 },
    { value: 55 },
    { value: 93 },
    { value: 80 },
    { value: 50 },
    { value: 39 },
    { value: 40 },
    { value: 50 },
    { value: 20 },
    { value: 50 },
    { value: 60 },
    { value: 100 },
    { value: 55 },
    { value: 93 },
    { value: 80 },
    { value: 50 },
    { value: 39 },
    { value: 40 },
    { value: 50 },
    { value: 20 },
    { value: 50 },
    { value: 60 },
    { value: 100 },
    { value: 55 },
    { value: 93 },
    { value: 80 }
  ].map(stat => ({
    ...stat,
    value: Math.ceil(stat.value * Math.random())
  }));

  const statsGroupedByCategory = [
    {
      id: 1,
      categoryName: "Food and Drink",
      value: 872.4
    },
    {
      id: 2,
      categoryName: "Shopping",
      value: 1378.2
    },
    {
      id: 3,
      categoryName: "Housing",
      value: 928.5
    },
    {
      id: 4,
      categoryName: "Transportation",
      value: 420.7
    },
    {
      id: 5,
      categoryName: "Vehicle",
      value: 520.0
    }
  ].map(stat => ({
    ...stat,
    value: Math.ceil(stat.value * Math.random())
  }));

  const expensesByPeriod = [
    {
      id: 1,
      date: "Today",
      items: [
        {
          id: 1,
          categoryName: "Grocery",
          value: -326.8,
          createdAt: "5:12 pm",
          locationName: "Belanja di pasar"
        },
        {
          id: 2,
          categoryName: "Transportation",
          value: -15.0,
          createdAt: "4:10 pm",
          locationName: "Naik bus umum"
        },
        {
          id: 3,
          categoryName: "Housing",
          value: -185.75,
          createdAt: "2:55 pm",
          locationName: "Bayar Listrik"
        }
      ]
    },
    {
      id: 2,
      date: "Monday, 23 March 2020",
      items: [
        {
          id: 4,
          categoryName: "Food and Drink",
          value: -156.0,
          createdAt: "1:55 pm",
          locationName: "Makan Steak"
        },
        {
          id: 5,
          categoryName: "Entertainment",
          value: -35.2,
          createdAt: "10:30 am",
          locationName: "Nonton Bioskop"
        },
        {
          id: 6,
          categoryName: "Grocery",
          value: -65.5,
          createdAt: "10:12 pm",
          locationName: "Belanja di pasar"
        },
        {
          id: 7,
          categoryName: "Grocery",
          value: -100.8,
          createdAt: "9:02 pm",
          locationName: "Belanja di pasar"
        }
      ]
    }
  ];

  return {
    props: {
      statsGroupedByPeriod,
      statsGroupedByCategory,
      expensesByPeriod
    }
  };
}

export default Expenses;
