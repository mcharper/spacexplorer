import { makeStyles } from "@material-ui/core";

export const useLaunchDetailViewerStyles = makeStyles({
  detailView: {
    alignItems: "flex-start",
    display: "grid",
    justifyItems: "flex-start",
    gridTemplateAreas: `"headerArea headerArea"
    "imageArea vitalStatisticsArea "  
      "descriptionArea descriptionArea"`,
    padding: "0.5vw",
    marginRight: "2vw",
  },
  imageArea: {
    gridArea: "imageArea",
    textAlign: "left",
    "& img": {
      maxWidth: "97%",
      marginRight: "1vw",
    },
    "& caption": {
      color: "gray",
      float: "right",
      marginRight: "1vw",
      padding: "0.5vw",
    },
    "& #splash": {
      marginRight: "1vw",
    },
  },
  vitalStatisticsArea: {
    backgroundColor: "#edf2f4",
    border: "1px solid silver",
    gridArea: "vitalStatisticsArea",
    padding: "1vw",
    textAlign: "left",
    "& ul": {
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
    "& ul li": {
      lineHeight: "2",
      overflow: "hidden",
      textTransform: "capitalize",
      textOverflow: "ellipsis",
    },
    "& h3": {
      borderBottom: "1px solid silver",
      color: "silver",
      marginTop: "0",
      fontSize: "2rem",
    },
    "& .svg-inline--fa": {
      color: "gray",
      width: "2vw",
    },
  },
  descriptionArea: {
    textAlign: "left",
    gridArea: "descriptionArea",
  },
});
