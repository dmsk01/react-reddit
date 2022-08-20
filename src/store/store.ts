import { Reducer } from "redux";
import { UPDATE_COMMENT } from "./comment/action";
import { SET_TOKEN } from "./token/action";
import { IUser, SET_USER } from "./user/user";

export type RootState = {
  commentText: string;
  token: string;
  user: IUser;
};

const initialState: RootState = {
  commentText: "",
  token: "",
  user: {
    name: "Anonimous",
    iconImg: "",
  },
};

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.text,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
