import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserName } from "../Redux/User/selector";

export const Redirect = ({ children }) => {
  const history = useHistory();
  const selector = useSelector((state) => state);
  const name = getUserName(selector);

  useEffect(() => {
    if (name.length === 0) {
      history.push("/");
    }
  }, []);

  if (name.length === 0) {
    return <></>;
  } else {
    return children;
  }
};
