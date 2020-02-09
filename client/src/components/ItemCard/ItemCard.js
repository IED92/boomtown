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
// import styles from "./styles";

const ItemCard = props => {
  const { item, classes } = props;
  console.log(props);
  console.log(item);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          image={(item && item.imageurl) || "http://place-puppy.com/400x250"}
          title={item && item.title}
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <Gravatar
            email={
              (item && item.ownerid.email && item.ownerid.email) || item.email
            }
            className={classes.profile}
          />
          <Typography>{item.created}</Typography>
          <Typography>{item && item.title}</Typography>
          <Typography>{item && item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" className={classes.borrowButton}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
