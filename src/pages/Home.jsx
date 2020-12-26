import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { SignIn } from "./SignIn";

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <div>Home</div>
      <button onClick={() => history.push("/signin")}>SignInPageへ</button>
    </div>
  );
};
