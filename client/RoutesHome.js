import React from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() =>
  import("./containers/HomeContainers/HomePage")
);

const RoutesHome = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
};

export default RoutesHome;
