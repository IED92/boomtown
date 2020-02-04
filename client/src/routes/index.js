import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";

export default () => {
  console.log(window);
  return (
    <Fragment>
      <Router>
        {window.location.pathname !== "/welcome" && <NavBar />}
        <Switch>
          <Route exact path="/items" component={Items} />
          <Route exact path="/welcome" component={Home} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile:id" component={Profile} />
          <Redirect from="*" to="/items" />
        </Switch>
      </Router>
    </Fragment>
  );
};
