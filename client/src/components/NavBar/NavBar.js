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
import logo from "../../images/boomtown.svg";
import { NavLink, withRouter } from "react-router-dom";
import Menu from "../Menu";

const NavBar = ({ location }) => {
  const style = styles();
  console.log(location);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={style.navbar}>
          <NavLink to="/items" className={style.link}>
            <Button>
              <img src={logo} alt="boomtown" className={style.logo} />
            </Button>
          </NavLink>
          <Box className={style.share}>
            <AddCircleIcon />
            <Typography className={style.sharetext}>SHARE SOMETHING</Typography>
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar className={style.toolbar} />
      <Toolbar className={style.toolbar} />
    </>
  );
};

export default withRouter(NavBar);
