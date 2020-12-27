import * as Actions from "./actions";
import initialState from "../Store/intialState";

export const YearsReducer = (state = initialState.year, action) => {
  switch (action.type) {
    case Actions.FETCH_YEAR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
