import React, { useState } from "react";
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
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState("");

  const CommentProvider = commentContext.Provider;
  return (
    <tokenContext.Provider value={token}>
      <CommentProvider
        value={{ value: commentValue, onChange: setCommentValue }}
      >
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
      </CommentProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
