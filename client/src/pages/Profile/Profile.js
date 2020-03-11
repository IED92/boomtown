import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Typography } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard/";
import ItemsContainer from "../Items/ItemsContainer";

const Profile = ({ classes, items }) => {
  return (
    <div>
      <ProfileCard items={items} classes={classes} />;
      <Typography>Shared Items</Typography>
      <ItemsContainer />
    </div>
  );
};

export default withStyles(styles)(Profile);
