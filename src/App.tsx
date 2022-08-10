import React from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./strore/store";
import { composeWithDevTools } from "@redux-devtools/extension";

import "./main.global.scss";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  const TokenProvider = tokenContext.Provider;
  return (
    <Provider store={store}>
      <TokenProvider value={token}>
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
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
// function rootReducer(rootReducer: any, arg1: StoreEnhancer<{}, {}>) {
//   throw new Error("Function not implemented.");
// }
