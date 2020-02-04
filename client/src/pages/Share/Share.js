import React from "react";
import { Container, withStyles, Grid } from "@material-ui/core";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ classes, tags }) => {
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <div className={classes.preview}>
            <ShareItemPreview />
          </div>
          <Container maxWidth="lg" className={classes.root}>
            <span>
              <h1>Share.</h1>
              <h1>Grow.</h1>
              <h1>Prosper.</h1>
            </span>
            <ShareItemForm tags={tags} />
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Share);
