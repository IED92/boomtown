import { withStyles, Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ItemCard from "../ItemCard";

// TODO: Figure out why this file throws an erro:
// "TypeError: items.map is not a function"

const ItemGrid = ({ items }) => {
  return (
    <Grid>
      {items.map(item => (
        <Grid item key={item.id}>
          <ItemCard
            title={item.title}
            imageurl={item.imageurl}
            description={item.description}
            created={item.created}
            tags={item.tags}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ItemGrid);
