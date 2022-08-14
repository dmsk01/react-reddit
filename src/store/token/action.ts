import { useEffect } from "react";
import { ActionCreator, AnyAction } from "redux";

export const SET_TOKEN = "SET_TOKEN";

export const setToken: ActionCreator<AnyAction> = (text) => ({
  type: SET_TOKEN,
  text: text,
});

export const saveToken = () => {
  useEffect(() => {
    
  },[])
}