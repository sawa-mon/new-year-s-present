import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getYearsNumber } from "../reducks/years/selector";

export const Presents = () => {
  const selecter = useSelector((state) => state);
  const history = useHistory();
  const yearsNumber = getYearsNumber(selecter);
  console.log(yearsNumber);

  return (
    <div>
      <div>Presents</div>
      <button onClick={() => history.push("/")}>ホーム画面に戻る</button>
      <h2>{yearsNumber}</h2>
    </div>
  );
};
