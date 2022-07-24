import React from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";

import "./main.global.scss";
import { EIcons, Icon } from "./shared/Icon";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { usePostsData } from "./hooks/usePostsData";
import {
  postsContext,
  PostsContextProvider,
} from "./shared/context/postsContext";

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <PostsContextProvider>
              <CardsList />
            </PostsContextProvider>
            <Icon name={EIcons.warning} />
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
