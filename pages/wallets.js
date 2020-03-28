import Head from "next/head";
import Screen from "../components/Screen";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Main from "../components/Main";
import MainTopbar from "../components/MainTopbar";
import SidebarCurrentUser from "../components/SidebarCurrentUser";
import SidebarNavigation from "../components/SidebarNavigation";
import Title from "../components/Title";
import UnderConstruction from "../components/UnderConstruction";

const Wallets = () => (
  <Screen>
    <Head>
      <title>PFA - Wallets</title>
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
              <Title>Wallets</Title>
            </>
          }
        ></MainTopbar>

        <UnderConstruction />
      </Main>
    </Content>
  </Screen>
);

export default Wallets;
