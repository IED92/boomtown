import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ItemCard from "../ItemCard";

const ItemGrid = ({ items }) => {
  const classes = styles();
  return (
    <Grid>
      {items.map(item => (
        <Grid item key={item.id}>
          <ItemCard
            owner={item.ownerid}
            title={item.title}
            image={item.imageurl}
            description={item.description}
            created={item.created}
            tags={item.tags}
            classes={classes}
          />
        </Grid>
      ))}
    </Grid>
  );
};

// export default withStyles(styles)(ItemGrid);
export default ItemGrid;
