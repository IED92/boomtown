import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles
} from "@material-ui/core";
import Gravatar from "react-gravatar";
import styles from "./styles";
import moment from "moment";
import Items from "../../pages/Items/Items";

const ProfileCard = props => {
  const { item, classes } = props;

  console.log(item);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.text}>
          <div className={classes.intro}>
            <Typography>
              {/* <Gravatar
                email={
                  (item && item.itemowner.email && item.itemowner.email) ||
                  item.email
                }
                className={classes.profile}
              /> */}
            </Typography>
            <div>
              <Typography>
                {(item && item.ownerid && item.ownerid.fullname) || "Your Name"}
              </Typography>
              <Typography>{item && moment(item.created).fromNow()}</Typography>
            </div>
          </div>
          <Typography className={classes.title}>
            {item && item.title}
          </Typography>
          {/* <div className={classes.tagsContainer}>
            {item.tags &&
              item.tags.map(tag => {
                return (
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    key={tag.id}
                    className={classes.tags}
                  >
                    {tag.title}
                  </Typography>
                );
              })}
          </div> */}
          <Typography>{item && item.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ProfileCard);
