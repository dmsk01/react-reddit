import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export interface IUser {
  name?: string;
  iconImg?: string;
}

export const USER_REQUEST = "USER_REQUEST";

export type UserRequestAction = {
  type: typeof USER_REQUEST;
};

export const userRequest: ActionCreator<UserRequestAction> = () => ({
  type: USER_REQUEST,
});

export const USER_REQUEST_SUCCESS = "USER_REQUEST_SUCCESS";

export type UserRequestSuccessAction = {
  type: typeof USER_REQUEST_SUCCESS;
  data: IUser;
};

export const userRequestSuccess: ActionCreator<UserRequestSuccessAction> = (data: IUser) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});

export const USER_REQUEST_ERROR = "USER_REQUEST_ERROR";

export type UserRequestErrorAction = {
  type: typeof USER_REQUEST_ERROR;
  error: string;
};

export const userRequestError: ActionCreator<UserRequestErrorAction> = (error: string) => ({
  type: USER_REQUEST_ERROR,
  error,
});

export const userRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(userRequest());
  if (getState().token === "undefined" || !getState().token) return;
  axios
    .get("https://oauth.reddit.com/api/v1/me.json", {
      headers: {
        Authorization: `Bearer ${getState().token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(userRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
    })
    .catch((e) => {
      console.log("[useUserData.js - failed to load user name & avatar] ", e);
      dispatch(userRequestError(String(e)));
    });
};
