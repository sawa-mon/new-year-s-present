import React from "react";
import { useHistory } from "react-router";

export const Comparisons = () => {
  const history = useHistory();

  return (
    <div>
      <div>Comparisons</div>
      <button onClick={() => history.push("/")}>HomePageへ</button>
    </div>
  );
};
