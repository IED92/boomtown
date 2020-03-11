import React from "react";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Mutation } from "react-apollo";
import { NavLink, Link } from "react-router-dom";
import { VIEWER_QUERY, LOGOUT_MUTATION } from "../../apollo/queries";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import styles from "./styles";

export default function NavMenu() {
  const style = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Mutation
      mutation={LOGOUT_MUTATION}
      refetchQueries={[{ query: VIEWER_QUERY }]}
    >
      {logout => (
        <>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/profile" className={style.link}>
              <MenuItem onClick={handleClose} className={style.item}>
                <FingerprintIcon className={style.icon} />
                <Typography className={style.text}>Profile</Typography>
              </MenuItem>
            </Link>
            <NavLink
              to="/home"
              onClick={logout}
              underline="none"
              className={style.link}
            >
              <MenuItem onClick={handleClose} className={style.item}>
                <PowerSettingsNewIcon className={style.icon} />
                <Typography className={style.text}>Logout</Typography>
              </MenuItem>
            </NavLink>
          </Menu>
        </>
      )}
    </Mutation>
  );
}
