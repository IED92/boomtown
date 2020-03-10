import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  IconButton,
  Input
} from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styles from "./styles";
import { ReactSVG } from "react-svg";
import logo from "../../images/boomtown.svg";
import { withRouter } from "react-router-dom";
import Menu from "../Menu";

const NavBar = ({ location }) => {
  const style = styles();
  console.log(location);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={style.navbar}>
          <ReactSVG
            src={logo}
            wrapper="span"
            className="boomtown-logo"
            beforeInjection={svg => {
              svg.classList.add("svg-class-name");
              svg.setAttribute("style", "width: 40px", "height: 40px");
            }}
            onClick={() => {
              console.log("wrapper onClick");
            }}
            style={{}}
          />
          <Box className={style.share}>
            <AddCircleIcon />
            <Typography className={style.sharetext}>SHARE SOMETHING</Typography>
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </>
  );
};

export default withRouter(NavBar);
