import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

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
      <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </CommentProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
