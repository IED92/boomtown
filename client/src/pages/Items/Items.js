import React from "react";
import { Box, Container, withStyles } from "@material-ui/core/";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid/";

const Items = ({ items }) => {
  const style = styles();
  return (
    <Container
      disableGutters="false"
      maxWidth="false"
      className={style.container}
    >
      <ItemGrid items={items} />
    </Container>
  );
};

export default Items;
