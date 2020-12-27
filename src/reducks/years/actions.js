export const SAVE_YEAR = "SAVE_YEAR";
export const saveYearsAction = (years) => {
  return {
    type: "SAVE_YEAR",
    payload: {
      year: years.year,
      month: years.month,
      day: years.day,
      week: years.week,
    },
  };
};
