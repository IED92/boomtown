import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    marginLeft: 10
  },
  item: {
    color: "black",
    "&:hover": {
      color: "#f9a825"
    }
  }
});

export default useStyles;
