import { ActionCreator, AnyAction } from "redux";


export interface IUser {
  name?: string;
  iconImg?: string;
}

export const SET_USER = "SET_USER";

export const setUser: ActionCreator<AnyAction> = (payload) => ({
  type: SET_USER,
  payload,
});

