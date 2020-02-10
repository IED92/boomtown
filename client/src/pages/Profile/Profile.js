import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Container } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard/";
import ItemsContainer from "../Items/ItemsContainer";

const Profile = ({ classes, items }) => {
  return (
    <div>
      <ProfileCard items={items} classes={classes} />;
      <ItemsContainer />
    </div>
  );
};

export default withStyles(styles)(Profile);
