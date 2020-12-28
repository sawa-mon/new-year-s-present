import React from "react";
import { Switch, Route } from "react-router";
// import { Auth } from "./Auth";
import {
  Home,
  SignIn,
  Presents,
  Comparisons,
  LastYearsPresents,
} from "./pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      {/* <Auth> */}
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/presents"} component={Presents} />
      <Route exact path={"/lastyearspresents"} component={LastYearsPresents} />
      <Route exact path={"/comparisons"} component={Comparisons} />
      {/* </Auth> */}
    </Switch>
  );
};

export default Router;
