import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

import { applyMiddleware, createStore, Middleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import { rootReducer } from "./store/store";
import { composeWithDevTools } from "@redux-devtools/extension";
import { setToken } from "./store";

import "./main.global.scss";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching: ", action);

  const returnValue = next({ ...action, brand: "redux" });

  console.log("action after next: ", returnValue);
};

const ping: Middleware = (store) => (next) => (action) => {
  console.log("ping");
  next(action);
};
const pong: Middleware = (store) => (next) => (action) => {
  console.log("pong");
  next(action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ping, pong)));

function AppComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;

    dispatch(setToken(token));

    if (token) {
      localStorage.setItem("token", token);
    }
  }, []);

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
