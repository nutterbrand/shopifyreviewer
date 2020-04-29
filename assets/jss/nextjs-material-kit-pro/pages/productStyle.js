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
    position: 'absolute',
    top: '50%',
  },
  signUp: {
    position: 'absolute',
    right: '0',
    top: '6px',
  },
  companyHeader: {
    backgroundColor: 'White',
    marginTop: '100px',
    padding: '25px',
  },
  scoreHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: '30px',
  },
  statNumContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    width: '30%',
    height: '60px',
    fontFamily: 'Roboto',
    backgroundColor: '#f65a4e',
    color: '#f9f9f9',
    boxShadow: '0px 4px 2px -3px rgba(0,0,0,0.2)',
  },
  headerImg: {
    width: '30%',
    height: 'auto',
  },
  statContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '50px 15px 15px 15px',
  },
  stat: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    border: '1px solid #eeeeee',
    padding: '40px 25px',
    textAlign: 'center',
  },
  statCircle: {
    width: '80%',
    marginBottom: '30px',
  },
  statScore: {
    padding: '0',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  green: {
    color: '#4bb051',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  yellow: {
    color: '#ffa21a',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  red: {
    color: '#f65a4e',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  statDes: {
    margin: "25px 30px",
    borderRadius: '5px',
    border: '1px solid #eeeeee',
    padding: '40px 25px',
    backgroundColor: '#fffef9',
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
    position: 'absolute',
    right: '0',
    top: '0',
    margin: '15px',
  },
  recsContainer: {
    marginBottom: '25px',
  },
  recTitle: {
    marginTop: '0px',
  },
  recs: {
    width: '100%',
    padding: '20px 25px',
    borderRadius: '5px',
    border: '1px solid #eeeeee',
    backgroundColor: '#fffef9',
  },
  rec: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: "5px 0",
  },
  recIconPos: {
    marginRight: '10px',
    color: '#4bb051',
  },
  recIconNeu: {
    marginRight: '10px',
    color: '#ff9900',
  },
  recIconNeg: {
    marginRight: '10px',
    color: '#f44436',
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
    border: '1px solid #dfe1e5',
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
