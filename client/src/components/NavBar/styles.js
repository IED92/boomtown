import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    paddingLeft: 40,
    width: "100%",
    justifyContent: "space-between"
  },
  share: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  sharetext: {
    marginLeft: 10,
    marginRight: 20
  }
});

export default useStyles;
