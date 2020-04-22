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
    zIndex: 2,
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
  keywordTitle: {
    fontWeight: "Bold",
  },
  productHeader: {
    backgroundColor: "White",
  },
  sectionGray: {
    background: grayColor[14],
  },
  mainPrice: {

  },
  productPage: {

  }
};

export default productStyle;
