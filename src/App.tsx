import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { PostsContextProvider } from "./shared/context/postsContext";

import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { rootReducer, setToken } from "./store";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import "./main.global.scss";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;
    dispatch(setToken(token));
    if (token && token !== undefined) {
      localStorage.setItem("token", token);
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Content>
        <PostsContextProvider>
          <CardsList />
        </PostsContextProvider>
      </Content>
    </Layout>
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
