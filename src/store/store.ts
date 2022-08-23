import { Reducer } from "redux";
import { UpdateCommentAction, UPDATE_COMMENT } from "./comment/action";
import { SetTokenAction, SET_TOKEN } from "./token/action";
import { UserRequestAction, UserRequestErrorAction, UserRequestSuccessAction, USER_REQUEST, USER_REQUEST_ERROR, USER_REQUEST_SUCCESS } from "./user/action";
import { userReducer, UserState } from "./user/reducer";

export type RootState = {
  commentText: string;
  token: string;
  user: UserState;
};

const initialState: RootState = {
  commentText: "",
  token: "",
  user: {
    loading: false,
    error: "",
    data: {},
  },
};

export type MyActions = UpdateCommentAction | SetTokenAction | UserRequestAction | UserRequestSuccessAction | UserRequestErrorAction;

export const rootReducer: Reducer<RootState, MyActions> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case USER_REQUEST:
    case USER_REQUEST_SUCCESS:
    case USER_REQUEST_ERROR:
      return {
        ...state,
        user: userReducer(state.user, action),
      };

    default:
      return state;
  }
};
