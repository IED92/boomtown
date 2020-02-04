import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import {
  TextField,
  withStyles,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import styles from "./styles.js";
import ItemCard from "../ItemCard";
import ShareItemForm from "../ShareItemForm";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

const ShareItemPreview = ({ classes }) => {
  return (
    <ItemPreviewContext.Consumer>
      {({ state }) => (
        <div className={classes.container}>
          <ItemCard item={state.item} classes={classes} />
        </div>
      )}
    </ItemPreviewContext.Consumer>
  );
};

export default withStyles(styles)(ShareItemPreview);
