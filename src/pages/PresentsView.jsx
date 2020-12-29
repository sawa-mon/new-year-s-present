import React from "react";
import { useHistory } from "react-router";
import { Presents } from "../components/Uikit/Presents";

export const PresentsView = () => {
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
      <Presents />
    </div>
  );
};
