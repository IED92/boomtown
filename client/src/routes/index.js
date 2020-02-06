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
import { ViewerContext } from "../context/ViewerProvider";
import PRoute from "../components/PrivateRoute";
import FullScreenLoader from "../components/FullScreenLoader";

export default ({ location }) => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      // if (loading) return <div>Loading...</div>;
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/welcome" name="home" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      }
      return (
        <Fragment>
          <Router>
            {window.location.pathname !== "/welcome" && <NavBar />}
            <Switch>
              <PRoute exact path="/items" component={Items} />
              <PRoute exact path="/share" component={Share} />
              <PRoute exact path="/profile" component={Profile} />
              <PRoute exact path="/profile:id" component={Profile} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Router>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
