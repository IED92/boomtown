import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import ItemCard from "../ItemCard";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

const ShareItemPreview = ({ viewer }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => <ItemCard item={state} viewer={viewer} />}
    </ItemPreviewContext.Consumer>
  );
};

export default withStyles(styles)(ShareItemPreview);
