import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout, Post } from "./shared/components";

import { PostsContextProvider } from "./shared/context/postsContext";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer, setToken } from "./store";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { BrowserRouter, Route } from "react-router-dom";

import "./main.global.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;
    store.dispatch(setToken(token));
    if (token && token !== undefined) {
      localStorage.setItem("token", token);
    }
  }, []);

  return (
    <Layout>
      {mounted && (
        <BrowserRouter>
          <Header />
          <Content>
            <PostsContextProvider>
              <CardsList />
              <Route exact path="/posts/:id">
                <Post />
              </Route>
            </PostsContextProvider>
          </Content>
        </BrowserRouter>
      )}
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
