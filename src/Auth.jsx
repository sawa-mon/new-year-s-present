import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "./firebase/index";

export const Auth = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  }, [auth.user]);

  if (!auth.user) {
    return <></>;
  } else {
    return children; //もしサインインしていたら子要素(RouterのRoute(Home)を返す)
  }
};
