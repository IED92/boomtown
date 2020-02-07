import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Container } from "@material-ui/core";
import ProfileCard from "../../components/ProfileCard/";

const Profile = ({ classes, users }) => {
  return <ProfileCard />;
};

export default withStyles(styles)(Profile);
