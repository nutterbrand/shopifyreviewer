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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadImg: {
    width: '300px',
  },
  loadText: {},
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
    fontSize: '30px',
    width: '30%',
    height: '50px',
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
  statImg: {
    margin: 'auto',
    width: '65%',
  },
  green: {
    color: '#4bb051',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  blue: {
    color: '#4842F5',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  red: {
    color: '#f65a4e',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  statScore: {
    padding: '0',
    marginTop: '40px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '55px',
  },
  statDes: {
    margin: '25px 30px',
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
    margin: '5px 0',
  },
  recGreen: {
    margin: '-5px 5px',
    color: '#4bb051',
  },
  recBlue: {
    margin: '-3px 5px',
    color: '#4842F5',
  },
  recRed: {
    margin: '-3px 5px',
    color: '#f65a4e',
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
  searchTermContainer: {
    width: '100%',
    margin: '10px',
    padding: '0 20px',
    border: '1px solid #dfe1e5',
    borderRadius: '8px',
    textAlign: 'left',
  },
  ad: {
    color: '#016720',
    border: '1px solid #016720',
    borderRadius: '5px',
    padding: '0 5px',
    margin: '0 10px 5px 0',
  },
  companyLink: {
    color: '#202124',
    fontSize: '22px',
    fontWeight: '500',
  },
  highlighted: {
    border: '1px solid #4bb051',
    boxShadow: '0 0 5px 5px #4bb051',
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
    cursor: 'pointer',
  },
  description: {
    maxHeight: '200px',
    overflowY: 'auto',
    padding: '10px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  rank: {
    position: 'absolute',
    top: '-10px',
    right: '50px',
    color: '#fff',
    backgroundColor: '#f65a4e',
    width: '140px',
    height: '40px',
    fontSize: '25px',
    lineHeight: '40px',
    textAlign: 'center',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
  },
  rankGreen: {
    backgroundColor: '#4bb051',
  },
  snippet: {
    padding: '10px 0',
    fontSize: '16px',
    lineHeight: '20px',
  },
  cpc: {
    backgroundColor: '#4bb051',
    padding: '8px',
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '20px',
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
