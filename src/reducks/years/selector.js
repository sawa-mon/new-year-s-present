import { createSelector } from "reselect";

const YearsSelector = (state) => state.years;

export const getYearsNumber = createSelector(
  [YearsSelector],
  (state) => state.years
);
