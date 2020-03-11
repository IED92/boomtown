import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import ItemCard from "../ItemCard";

const ItemGrid = ({ items }) => {
  const style = styles();
  return (
    <Grid
      className={style.grid}
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={6}
    >
      {items &&
        items.map(item => (
          <Grid className={style.grid} xs={4} item key={item.id}>
            <ItemCard item={item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ItemGrid;
