import * as Actions from "./actions";
import initialState from "../store/intialState";

export const YearsReducer = (state = initialState.years, action) => {
  switch (action.type) {
    case Actions.SAVE_YEAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
