import { Reducer } from "redux";
import { UPDATE_COMMENT } from "./comment/action";
import { SET_TOKEN } from "./token/action";

export type RootState = {
  commentText: string;
  token: string;
};

const initialState: RootState = {
  commentText: "",
  token: "",
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

    default:
      return state;
  }
};
