import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { rootReducer } from "./store/store";
import { composeWithDevTools } from "@redux-devtools/extension";
import { setToken } from "./store";

import "./main.global.scss";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;

    dispatch(setToken(token));

    if (token) {
      localStorage.setItem("token", token);
    }
  }, []);
  // useEffect(() => {
  //   if (window.__token__ && typeof window.__token__ !== "undefined" && window.__token__ !== undefined) {
  //     dispatch(setToken(window.__token__));
  //   }
  // }, []);

  return (
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
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
// function rootReducer(rootReducer: any, arg1: StoreEnhancer<{}, {}>) {
//   throw new Error("Function not implemented.");
// }
