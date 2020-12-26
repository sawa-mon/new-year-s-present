import React from "react";
import { Switch, Route } from "react-router";
import { Auth } from "./Auth";
import { Home, SignIn } from "./pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      {/* <Auth> */}
      <Route exact path={"(/)?"} component={Home} />
      {/* </Auth> */}
    </Switch>
  );
};

export default Router;
