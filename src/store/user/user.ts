import { useEffect } from "react";
import { ActionCreator, AnyAction } from "redux";

export const SET_USER = "SET_USER";


export interface IUser {
  name?: string;
  iconImg?: string;
}

export const setUser: ActionCreator<AnyAction> = (payload) => ({
  type: SET_USER,
  payload,
});

