import React from "react";
import { useHistory } from "react-router";

export const SignIn = () => {
  const history = useHistory();

  return (
    <div>
      <div>SignIn</div>
      <button onClick={() => history.push("/")}>HomePageへ</button>
    </div>
  );
};
