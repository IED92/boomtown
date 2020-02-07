import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ItemCard from "../ItemCard";

const ItemGrid = ({ items }) => {
  const classes = styles();
  return (
    <Grid>
      {items &&
        items.map(item => (
          <Grid className={classes.itemsGrid} item key={item.id}>
            <ItemCard item={item} classes={classes} />
          </Grid>
        ))}
    </Grid>
  );
};

// export default withStyles(styles)(ItemGrid);
export default ItemGrid;
