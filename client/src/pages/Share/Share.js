import React from "react";
import { Container, Box } from "@material-ui/core";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ viewer, tags }) => {
  const style = styles();
  return (
    <Container maxWidth="lg" className={style.container}>
      <Box className={style.leftbox}>
        <ShareItemPreview viewer={viewer} />
      </Box>
      <Box className={style.rightbox}>
        <ShareItemForm tags={tags} />
      </Box>
    </Container>
  );
};

export default Share;
