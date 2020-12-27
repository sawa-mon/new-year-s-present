export const FETCH_YEAR = "FETCH_YEAR";
export const fetchYearsAction = (year) => {
  return {
    type: "FETCH_YEAR",
    payload: {
      year: year.year,
      month: year.month,
      day: year.day,
      week: year.week,
    },
  };
};
