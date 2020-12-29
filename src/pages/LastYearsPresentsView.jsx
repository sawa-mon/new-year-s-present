import React from "react";
import { useHistory } from "react-router";
import { LastYearsPresents } from "../components/Uikit/LastYearsPresents";

export const LastYearsPresentsView = () => {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        ホームに戻る
      </button>
      <LastYearsPresents />
    </div>
  );
};
