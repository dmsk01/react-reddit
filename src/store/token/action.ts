import { useEffect } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { MyActions, RootState } from "../store";

export const SET_TOKEN = "SET_TOKEN";

export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token: token,
});

export const saveToken = (): ThunkAction<void, RootState, unknown, MyActions> => (dispatch) => {
  useEffect(() => {
    if (window.__token__ && typeof window.__token__ !== "undefined" && window.__token__ !== undefined) {
      dispatch(setToken(window.__token__));
    }
  }, []);
};
