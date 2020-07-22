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
  placeHolderContainer: {
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: '#fff',
    margin: '50px 0',
    paddingBottom: '40px',
    overflowX: 'hidden',
  },
  productLoadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  productLoading: {
    width: '200px',
    marginTop: '40px',
  },
  placeHolderTitle: {
    margin: '40px 0 0 40px',
    fontWeight: 'Bold',
    zIndex: '2',
  },
  loadImg: {
    width: '300px',
  },
  loadingContainer: {
    marginTop: '50px',
    backgroundColor: '#fff',
  },
  loadingPlaceholder: {
    width: '100%',
  },
  loadingSpinnerContainer: {
    position: 'relative',
    width: '500px',
    height: '600px',
  },
  loadingSpinnerImage: {
    display: 'none',
    position: 'absolute',
    top: '0',
    width: '100%',
  },
  loadingSpinnerProgress: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  shown: {
    display: 'block',
  },
  loadText: {},
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '70px',
    padding: '0 10%',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '2',
    boxShadow: '0 2px 5px -1px rgba(0,0,0,0.3)',
  },
  domainSearch: {
    width: '55%',
    '& div': {
      borderRadius: '4px 4px 4xp 4px',
      '& input': {
        padding: '8.5px 15px',
      },
    },
    marginRight: '10px',
  },
  productSearch: {
    width: '27%',
    '& div': {
      borderRadius: '4px 4px 4xp 4px',
      '& input': {
        padding: '8.5px 15px',
      },
    },
    marginRight: '10px',
  },
  submit: {
    backgroundColor: '#4bb051',
    height: '36px',
    color: '#ffffff',
    width: '125px',
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  signUp: {
    backgroundColor: '#4842F5',
    color: '#ffffff',
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnGroup: {
    margin: '0 25px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  modalNavBtn: {
    width: '250px',
    backgroundColor: '#4bb051',
    color: '#ffffff',
  },
  adModal: {
    width: '1200px',
    height: '800px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 2px -1px rgba(0,0,0,0.2)',
    padding: '0 30px',
  },
  adForm: {
    margin: '25px',
    display: 'flex',
    flexDirection: 'row',
  },
  adTitle: {
    margin: '75px 25px 25px 25px',
  },
  adFormSection: {
    width: '100%',
  },
  adField: {
    width: '90%',
    marginBottom: '25px',
  },
  adKeywordChip: {
    margin: '0 10px 5px 0',
    backgroundColor: '#27a0ff',
    color: '#ffffff',
  },
  emailModal: {
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    height: '450px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 2px -1px rgba(0,0,0,0.2)',
    padding: '0 30px',
  },
  downloadBtn: {
    '&:hover': {
      color: 'white',
    },
  },
  downloadLinkBtn:{
    width: '400px',
    margin: '0 auto',
    backgroundColor: '#4bb051',
    color: '#ffffff',
    '&:hover': {
      color: '#4bb051',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0',
  },
  formTwo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0',
  },
  companyHeader: {
    backgroundColor: '#fff',
    margin: '100px 0 0 0',
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
  searchHeader: {
    height: '300px',
    position: 'absolute',
    top: '0',
    right: '5%',
  },
  qCircle: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '50%',
    height: '400px',
    background: '#fafafa',
    borderRadius: '0 0 400px 0',
  },
  headerForm: {
    margin: '45px 30px',
  },
  headerTitle: {
    width: '60%',
    fontWeight: 'bold',
    marginTop: '0',
    marginBottom: '15px',
  },
  headerSub: {
    marginBottom: '25px',
  },
  statDes: {
    margin: '25px 30px',
    borderRadius: '5px',
    border: '1px solid #eeeeee',
    padding: '0 25px 15px 25px',
    backgroundColor: '#fffef9',
  },
  keywordCard: {
    backgroundColor: '#fff',
    margin: '50px 0',
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
  keyRec: {
    display: 'flex',
    alignItems: 'center',
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
  tabLabel: {
    width: '20%',
  },
  tabPanel: {
    padding: '0',
  },
  productRow: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowY: 'scroll',
  },
  organicRow: {
    height: '500px',
    overflowX: 'scroll',
  },
  relatedSearchRow: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #dfe1e5',
    padding: '10px 20px',
  },
  relatedSearchTerm: {
    display: 'block',
    width: '45%',
    color: '#190eab',
    fontWeight: 'bold',
    margin: '5px 0',
    cursor: 'pointer',
  },
  productContainer: {
    flex: '0 0 auto',
    width: '200px',
    margin: '0 20px 0 0',
    padding: '0 0 20px 0',
    border: '1px solid #dfe1e5',
    borderRadius: '8px',
    textAlign: 'center',
  },
  searchTermContainer: {
    margin: '0 0 30px 0',
    padding: '0 20px 15px 20px',
    border: '1px solid #dfe1e5',
    borderRadius: '8px',
    textAlign: 'left',
  },
  exDesContainer: {
    margin: '30px 0',
    padding: '20px',
    border: '1px solid #bddfe6',
    borderRadius: '8px',
    color: '#76a4b3',
    textAlign: 'left',
    backgroundColor: '#f8ffff',
  },
  downloadDesContainer: {
    margin: '15px 0 25px 0',
    padding: '20px',
    border: '1px solid #bddfe6',
    borderRadius: '8px',
    color: '#76a4b3',
    textAlign: 'left',
    backgroundColor: '#f8ffff',
  },
  phoneIcon: {
    fontSize: '18px',
    margin: '-3px 4px',
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
    fontSize: '18px',
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
    objectFit: 'contain',
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
  resultsTabs: {
    margin: '20px 0 10px 0',
    backgroundColor: '#fff',
    color: '#4842F5',
    boxShadow: 'none',
    zIndex: '0',
  },
  pointer: {
    cursor: 'pointer',
  },
  email: {
    width: '515px',
  },
  submitEmail: {
    backgroundColor: '#4bb051',
    height: '40px',
    color: '#ffffff',
    width: '125px',
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  productGroupImg: {
    width: '100%',
    minHeight: '400px',
    margin: '50px 0',
    objectFit: 'cover',
  },
  productSearchWords: {
    position: 'absolute',
    top: '50px',
    right: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '400px',
    overflowY: 'scroll',
    borderRadius: '8px',
    border: '1px solid #dfe1e5',
    padding: '10px 10px',
  },
  keywordChip: {
    margin: '5px 10px',
  },
  headerAvatar: {
    display: 'flex',
    margin: '35px 0 15px 0',
    alignItems: 'center',
  },
  greenAvatar: {
    backgroundColor: '#4bb051',
    color: '#ffffff',
    margin: '0 15px 0 0',
  },
  blueAvatar: {
    backgroundColor: '#27a0ff',
    color: '#ffffff',
    margin: '0 15px 0 0',
  },
  productUrlAuto: {
    width: '75%',
    marginRight: '10px',
  },
  productUrlTextField: {
    '& div': {
      height: '36px',
      '& input': {
        marginTop: '-10px',
      },
    },
  },
  autoContainer: {
    display: 'flex',
  },
  autoSubmit: {
    backgroundColor: '#4bb051',
    color: '#ffffff',
    width: '175px',
    '&:hover': {
      backgroundColor: 'none',
    },
  },
};

export default productStyle;
