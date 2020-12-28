import { db } from "../../firebase/index";
import initialState from "../store/intialState";
import { push } from "connected-react-router";
import { fetchOpponentsAction } from "./actions";

export const fatchOpponents = () => {
  return async (dispatch) => {
    const add = db
      .collection("opponents")
      .doc()
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshots) => {
          const opponents = snapshots.data();
          const opponentsData = {
            name: opponents.name,
            birthdayYear: opponents.birthdayYear,
            birthdayMonth: opponents.birthdayMonth,
            number: opponents.number,
          };
          dispatch(fetchOpponentsAction(opponentsData));
        });
      });
  };
};
