import React from "react";
import { Switch, Route } from "react-router";
import {
  Home,
  SignIn,
  PresentsView,
  Comparisons,
  LastYearsPresentsView,
  OneLastYearsPresentsView,
} from "./pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      {/* <Auth> */}
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/presentsview"} component={PresentsView} />
      <Route
        exact
        path={"/lastyearspresentsview"}
        component={LastYearsPresentsView}
      />
      <Route
        exact
        path={"/onelastyearspresentsview"}
        component={OneLastYearsPresentsView}
      />
      <Route exact path={"/comparisons"} component={Comparisons} />
      {/* </Auth> */}
    </Switch>
  );
};

export default Router;
