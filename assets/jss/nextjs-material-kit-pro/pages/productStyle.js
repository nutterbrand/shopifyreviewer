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
  signUp:{
    position: "absolute",
    right: "0",
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
  dollar: {
    color: "#5a8b5d",
  },
  keywordHeader:{
    backgroundColor: "White",
    margin: "50px -15px",
    padding: "40px",
  },
  keywordTitle: {
    fontWeight: "Bold",
  },
  suggestionsContainer: {
    marginBottom: "25px",
  },
  mainPrice: {

  },
  productRow: {
    display: "flex",
    flexWrap: "nowrap",
    overflowY: "auto",
  },
  productContainer: {
    flex: "0 0 auto",
    width: "200px",
    margin: "10px",
    padding: "0 0 20px 0",
    border: "2px solid #dfe1e5",
    borderRadius: "8px",
    textAlign: "center",
  },
  productImg: {
    width: "100%",
    height: "200px",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
  },
  productKeyword: {
    margin: "20px 5px 10px 5px",
    fontSize: "16px",
    lineHeight: "18px",
  },
  productLink: {
    color: "#190eab",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    maxHeight: "200px",
    overflowY: "auto",
    padding: "10px",
    fontSize: "12px",
    lineHeight: "16px"
  },
  sectionGray: {
    background: grayColor[14],
  },
  blurryText: {
  color: "transparent",
  textShadow: "0 0 5px rgba(0,0,0,0.5)",
},
};

export default productStyle;
