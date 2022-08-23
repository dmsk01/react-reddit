import { ActionCreator } from "redux";

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
