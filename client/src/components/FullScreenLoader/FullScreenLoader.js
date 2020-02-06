import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  loader: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303030"
  },
  textContainer: {
    marginBottom: "20px"
  }
}));

export default function FullScreenLoader() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.loader}>
      <div className={classes.textContainer}>
        <Typography variant="h3" color="white">
          "For it is in giving, that we recieve."
        </Typography>
      </div>
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
}
