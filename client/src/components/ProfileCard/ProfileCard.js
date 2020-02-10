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

const ProfileCard = props => {
  const { items, classes } = props;
  const { id } = items;
  console.log(items);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.text}>
          <div className={classes.intro}>
            <Typography>
              <Gravatar
                email={(items && items.email) || "No email"}
                className={classes.profile}
              />
            </Typography>
            <div>
              <Typography>
                {(items && items.fullname) || "No Name provided"}
              </Typography>
              <Typography>
                {items && moment(items.created).fromNow()}
              </Typography>
            </div>
          </div>
          <Typography className={classes.title}>
            {items && items.title}
          </Typography>
          {/* <div className={classes.tagsContainer}>
            {items.tags &&
              items.tags.map(tag => {
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
          <Typography>{items && items.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ProfileCard);
