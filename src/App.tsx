import React from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";

import "./main.global.scss";
import { EIcons, Icon } from "./shared/Icon";
import { useToken } from "./hooks/useToken";

function AppComponent() {
  const [token] = useToken();

  return (
    <div>
      <Layout>
        <Header token={token}/>
        <Content>
          <CardsList />
          <Icon name={EIcons.warning} />
        </Content>
      </Layout>
    </div>
  );
}

export const App = hot(() => <AppComponent />);
