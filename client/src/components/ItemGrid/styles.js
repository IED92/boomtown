import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "lightblue",
    "& .MuiButton-label": {
      color: "red"
    }
  },
  media: {}
});

export default useStyles;
