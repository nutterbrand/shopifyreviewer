import {
  container,
  mlAuto,
  section,
  main,
  mainRaisedMargin,
  title,
  grayColor,
} from 'assets/jss/nextjs-material-kit-pro.js';

import tooltipsStyle from 'assets/jss/nextjs-material-kit-pro/tooltipsStyle.js';
import imagesStyles from 'assets/jss/nextjs-material-kit-pro/imagesStyles.js';
import customSelectStyle from 'assets/jss/nextjs-material-kit-pro/customSelectStyle.js';

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
  companyPage: {},
  center: {
    width: '100%',
    textAlign: 'center',
    marginTop: '450px',
  },
  signUp: {
    position: 'absolute',
    right: '0',
    top: '6px',
  },
  headerImg: {
    marginTop: '15px',
  },
  companyHeader: {
    backgroundColor: 'White',
    marginTop: '100px',
    padding: '25px',
  },
  stat: {
    marginBottom: '10px',
  },
  badge: {
    fontSize: '14px',
  },
  statNum: {
    color: '#f44436',
  },
  dollar: {
    color: '#5a8b5d',
  },
  keywordCard: {
    backgroundColor: 'White',
    margin: '50px -15px',
    padding: '40px 40px 60px 40px',
    overflowX: 'hidden',
  },
  keywordTitle: {
    fontWeight: 'Bold',
  },
  showButton: {
    position: "absolute",
    right: "0",
    top: "0",
    margin: "15px",
  },
  recsContainer: {
    marginBottom: '25px',
  },
  recTitle: {
    marginTop: '0px',
  },
  recs: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #eeeeee',
    backgroundColor: '#fffef4',
  },
  rec: {
    display: 'flex',
    alignItems: 'center',
  },
  recIcon: {
    marginRight: '10px',
    color: '#e15940',
  },
  searchContainer: {
    position: 'relative',
    height: '50px',
    marginTop: '20px',
  },
  searchingResult: {
    position: 'absolute',
    left: '50px',
    fontWeight: 'bold',
    height: '100%',
  },
  googleSearch: {
    height: '100%',
  },
  mainPrice: {},
  productRow: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowY: 'scroll',
  },
  productContainer: {
    flex: '0 0 auto',
    width: '200px',
    margin: '10px',
    padding: '0 0 20px 0',
    border: '2px solid #dfe1e5',
    borderRadius: '8px',
    textAlign: 'center',
  },
  productImg: {
    width: '100%',
    height: '200px',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  },
  productKeyword: {
    margin: '20px 5px 10px 5px',
    fontSize: '16px',
    lineHeight: '18px',
  },
  productLink: {
    display: 'block',
    color: '#190eab',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  description: {
    maxHeight: '200px',
    overflowY: 'auto',
    padding: '10px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  sectionGray: {
    background: grayColor[ 14 ],
  },
  blur: {
    filter: 'blur(5px)',
  },
  more: {
    position: 'absolute',
    bottom: '-35px',
    left: '10px',
  },
};

export default productStyle;
