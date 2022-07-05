import React from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";

import "./main.global.scss";
import { CardsList } from "./shared/CardsList";

function AppComponent() {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </div>
  );
}

export const App = hot(AppComponent);
