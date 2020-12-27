import { createSelector } from "reselect";

const YearsSelector = (state) => state.years;

export const getYearNumber = createSelector(
  [YearsSelector],
  (state) => state.name
);
