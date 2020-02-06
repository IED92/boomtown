import { makeStyles } from "@material-ui/core";

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

export default useStyles;
