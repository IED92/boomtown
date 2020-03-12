import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box
} from "@material-ui/core";
import Gravatar from "react-gravatar";
import moment from "moment";
import styles from "./styles";

const ItemCard = props => {
  const { item, viewer } = props;
  const { tags } = item;
  const style = styles();

  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          image={"https://placedog.net/521"}
          title={item && item.title}
          className={style.cardMedia}
        />
        <CardContent className={style.cardContent}>
          <Box className={style.user}>
            <Gravatar
              size={60}
              email={
                viewer
                  ? viewer.email
                  : item && item.ownerid && item.ownerid.email
              }
              className={style.profilepic}
            />
            <Box className={style.userText}>
              <Typography>
                {viewer
                  ? viewer.fullname
                  : item && item.ownerid && item.ownerid.fullname}
              </Typography>
              <Typography className={style.created}>
                {moment(item.created).fromNow()}
              </Typography>
            </Box>
          </Box>
          <Typography className={style.title}>{item && item.title}</Typography>
          {tags &&
            tags.map(tag => (
              <Typography className={style.tags}>{tag.title}, </Typography>
            ))}
          <Typography>{item && item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" size="large" className={style.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
