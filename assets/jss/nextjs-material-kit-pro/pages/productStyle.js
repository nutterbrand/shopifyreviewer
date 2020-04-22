import {
  container,
  mlAuto,
  section,
  main,
  mainRaisedMargin,
  title,
  grayColor,
} from "assets/jss/nextjs-material-kit-pro.js";

import tooltipsStyle from "assets/jss/nextjs-material-kit-pro/tooltipsStyle.js";
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";
import customSelectStyle from "assets/jss/nextjs-material-kit-pro/customSelectStyle.js";

const productStyle = {
  mlAuto,
  main,
  ...imagesStyles,
  ...customSelectStyle,
  ...tooltipsStyle,
  container: {
    ...container,
  },
  mainRaisedMargin: {
    ...mainRaisedMargin,
  },
  section: {
    ...section,
  },
  title: {
    ...title,
  },
  productPage: {

  },
  headerImg: {
    marginTop: "15px",
  },
  productHeader: {
    backgroundColor: "White",
    marginTop: "100px",
    padding: "25px",
  },
  stat: {
    marginBottom: "5px",
  },
  statNum: {
    color: "#e15940",
  },
  keywordTitle: {
    fontWeight: "Bold",
  },
  sectionGray: {
    background: grayColor[14],
  },
  mainPrice: {

  },
};

export default productStyle;
