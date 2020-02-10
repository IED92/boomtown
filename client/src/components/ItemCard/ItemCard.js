import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";

const ItemCard = props => {
  const { item } = props;
  const style = styles();

  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          image={"http://place-puppy.com/400x250"}
          title={item && item.title}
          className={style.cardMedia}
        />
        <CardContent className={style.cardContent}>
          <Gravatar
            email={
              (item && item.ownerid.email && item.ownerid.email) || item.email
            }
            className={style.profile}
          />
          <Typography>{item.created}</Typography>
          <Typography>{item && item.title}</Typography>
          <Typography>{item && item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" className={style.borrowButton}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
