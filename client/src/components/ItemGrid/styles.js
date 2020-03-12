import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    color: "lightblue",
    "& .MuiButton-label": {
      color: "red"
    }
  },
  grid: {
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    paddingTop: 100
  }
});

export default useStyles;
