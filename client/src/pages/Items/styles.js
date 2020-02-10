import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "lightblue",
    "& .MuiButton-label": {
      color: "red"
    }
  },
  cardMedia: {
    height: "250px",
    width: "100%"
  }
});

export default useStyles;
