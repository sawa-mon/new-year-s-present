import { createSelector } from "reselect";

const OpponentsSelector = (state) => state.opponents;

export const getOpponentsName = createSelector(
  [OpponentsSelector],
  (state) => state.name
);
export const getOpponentsBirthdayYear = createSelector(
  [OpponentsSelector],
  (state) => state.birthdayYear
);
