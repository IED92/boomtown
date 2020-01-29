import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./theme";
import AppRoutes from "./routes";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
/**
 * @TODO: Wrap your app with the Item Preview Provider
 *
 * import ItemPreviewProvider from './context/ItemPreviewProvider'
 *
 * Wrap this component around your app to access Item Preview Context API.
 */
/**
 * @TODO: Wrap your app with the Viewer Context
 *
 * import ViewerProvider from './context/ViewerProvider'
 *
 * Below in your <App />, wrap the <ViewerProvider /> component around
 * the <BrowserRouter /> component so the router is aware of whether a
 * user is currently logged in and who that user is.
 */
// @TODO: Remove this import once you have your router working below
// -------------------------------
import "./index.css";
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Router>
          <AppRoutes />
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
