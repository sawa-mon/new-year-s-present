import * as Actions from "./actions";
import initialState from "../store/intialState";

export const OpponentsReducer = (state = initialState.opponents, action) => {
  switch (action.type) {
    case Actions.FETCH_OPPONENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
