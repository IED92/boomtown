import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

const ItemCard = props => {
  const { title, imageurl, description, created, tags, owner, classes } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          image="http://place-puppy.com/400x250"
          title="placeholder"
          className={classes.media}
        />
        <CardContent className={classes.text}>
          <Typography>{owner.fullname + " " + created}</Typography>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" className={classes.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

// class ItemCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     console.log("ItemCard: ", this.props);
//     const {
//       title,
//       imageurl,
//       description,
//       created,
//       tags,
//       owner,
//       classes
//     } = this.props;

//     return (
//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             image="http://place-puppy.com/400x250"
//             title="placeholder"
//             className={classes.media}
//           />
//           <CardContent className={classes.text}>
//             <Typography>{owner.fullname + " " + created}</Typography>
//             <Typography>{title}</Typography>
//             <Typography>{description}</Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="large" className={classes.button}>
//             Borrow
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }
// }

export default ItemCard;
