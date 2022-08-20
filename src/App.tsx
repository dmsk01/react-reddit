import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Content, Header, CardsList, Layout } from "./shared/components";

import { PostsContextProvider } from "./shared/context/postsContext";

import { Action, applyMiddleware, createStore, Middleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import { rootReducer, RootState } from "./store/store";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk, { ThunkAction } from "redux-thunk";
import { setToken, setUser } from "./store";

import "./main.global.scss";
import { useUserData } from "./hooks/useUserData";

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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch({ type: "START" });

  setTimeout(() => {
    dispatch({ type: "FINISH" });
  }, 2000);
};

function AppComponent() {
  const dispatch = useDispatch();
  useUserData();
  // const [data] = useUserData();
  // console.log(data);

  useEffect(() => {
    const token = window.__token__;
    dispatch(setToken(token));
    //@ts-ignore
    dispatch(timeout());
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
