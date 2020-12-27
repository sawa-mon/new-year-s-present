import React from "react";
import { useHistory } from "react-router";

export const LastYearsPresents = () => {
  const history = useHistory();

  return (
    <div>
      <div>LastYearsPresents</div>
      <button onClick={() => history.push("/")}>Homeへ</button>
    </div>
  );
};
