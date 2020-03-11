import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "500px",
    minWidth: "360px",
    maxHeight: "600px"
  },
  cardMedia: {
    height: "275px",
    width: "100%"
  },
  profilepic: {
    borderRadius: 50,
    marginRight: 20
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30
  },
  created: {
    color: "grey"
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  tags: {
    fontSize: 18,
    color: "grey",
    marginBottom: 10
  }
});

export default useStyles;
