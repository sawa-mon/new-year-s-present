export const FETCH_OPPONENT = "FETCH_OPPONENT";
export const fetchOpponentsAction = (opponentsData) => {
  return {
    type: "FETCH_OPPONENT",
    payload: {
      name: opponentsData.name,
      birthdayYear: opponentsData.birthdayYear,
    },
  };
};
