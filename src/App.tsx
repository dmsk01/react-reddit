import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import "./main.global.scss";

import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(() => {}, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState("");

  const CommentProvider = commentContext.Provider;
  const TokenProvider = tokenContext.Provider;
  return (
    <Provider store={store}>
      <TokenProvider value={token}>
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
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
