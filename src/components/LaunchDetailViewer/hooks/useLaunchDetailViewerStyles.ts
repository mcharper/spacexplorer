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
    "& img": {
      maxWidth: "97%",
      marginRight: "1vw",
    },
  },
  vitalStatisticsArea: {
    backgroundColor: "#edf2f4",
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
    },
    "& h3": {
      borderBottom: "2px solid silver",
      marginTop: "0",
      fontSize: "1rem",
    },
    "& .svg-inline--fa": {
      color: "silver",
      width: "2vw",
    },
  },
  descriptionArea: {
    textAlign: "left",
    gridArea: "descriptionArea",
  },
});
