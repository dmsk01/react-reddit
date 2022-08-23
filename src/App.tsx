import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { PostsContextProvider } from "./shared/context/postsContext";

import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { rootReducer, setToken } from "./store";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { useUserData } from "./hooks/useUserData";

import "./main.global.scss";

// const logger: Middleware = (store) => (next) => (action) => {
//   console.log("dispatching: ", action);

//   const returnValue = next({ ...action, brand: "redux" });

//   console.log("action after next: ", returnValue);
// };

// const ping: Middleware = (store) => (next) => (action) => {
//   console.log("ping");
//   next(action);
// };
// const pong: Middleware = (store) => (next) => (action) => {
//   console.log("pong");
//   next(action);
// };

// const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
//   dispatch({ type: "START" });

//   setTimeout(() => {
//     dispatch({ type: "FINISH" });
//   }, 2000);
// };
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const dispatch = useDispatch();
  useUserData();

  useEffect(() => {
    const token = localStorage.getItem("token") || window.__token__;
    dispatch(setToken(token));
    if (token) {
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
