import React from "react";
import { Container, withStyles } from "@material-ui/core/";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid/";

const Items = ({ classes, items }) => {
  return (
    <Container maxWidth="lg" className={classes.root}>
      <ItemGrid items={items} />
    </Container>
  );
};

export default withStyles(styles)(Items);
