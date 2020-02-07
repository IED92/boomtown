import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import { ReactSVG } from "react-svg";
import logo from "../../images/boomtown.svg";
import { withRouter } from "react-router-dom";

const NavBar = ({ location }) => {
  const classes = styles();
  console.log(location);
  return (
    <div className={classes.NavBar}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <ReactSVG
            src={logo}
            wrapper="span"
            className="boomtown-logo"
            onClick={() => {
              console.log("wrapper onClick");
            }}
            style={{}}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </div>
  );
};

export default withRouter(NavBar);
