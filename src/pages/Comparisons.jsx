import React from "react";
import { useHistory } from "react-router";
import { LastYearsPresents } from "../components/Uikit/LastYearsPresents";
import { Presents } from "../components/Uikit/Presents";

export const Comparisons = () => {
  const history = useHistory();
  return (
    <div>
      <div>Comparisons</div>
      <button onClick={() => history.push("/")}>HomePageへ</button>
      <LastYearsPresents />
      <Presents />
    </div>
  );
};
