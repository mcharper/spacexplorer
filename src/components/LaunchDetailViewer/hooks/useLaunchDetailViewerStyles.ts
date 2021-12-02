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
  },
  imageArea: {
    gridArea: "imageArea",
    "& img": {
      maxWidth: "20vw",
    },
  },
  vitalStatisticsArea: {
    textAlign: "left",
    gridArea: "vitalStatisticsArea",
  },
  descriptionArea: {
    textAlign: "left",
    gridArea: "descriptionArea",
  },
});
