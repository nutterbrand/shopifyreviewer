import React, {useState} from 'react';
import {useRouter} from 'next/router';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from './Header';
import {CompanyHeader} from './CompanyHeader';
import {LoadingSpinner} from './LoadingSpinner';
import {KeywordGroup} from './KeywordGroup';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import GridContainer from '../components/Grid/GridContainer';
import PlaceHolder from '../assets/img/placeHolder.png';

const useStyles = makeStyles(productStyle);

const LOADING_IMAGES = [
  'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_1.png',
  'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_2.png',
  'https://henrymetricstory.s3-us-west-1.amazonaws.com/load_3.png',
];
const LOADING_MESSAGES = [
  'Downloading Shopify Product Page...',
  'Analyzing Competitors...',
  'Building Landing Page...',
];
const BASE_URL = 'https://evening-retreat-22032.herokuapp.com/';
export default function HomePage() {
  const classes = useStyles();
  const router = useRouter();
  const showAll = _.has(router.query, 'show');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnSearch = values => {
    const {domain, product} = values;
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    setLoading(true);
    setData(null);
    fetch(`${BASE_URL}${product ? 'keyword/' : 'domain/'}${filteredDomain}/${product}`).
        then(response => response.json()).
        then(data => {
          setData(data);
          setLoading(false);
        });
  };
  const placeHolderArr = new Array(30);
  placeHolderArr.fill(0);
  return (
      <>
        {isLoading &&
        <LoadingSpinner loadingImages={LOADING_IMAGES} loadingMessages={LOADING_MESSAGES}/>}
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              {!isLoading && <CompanyHeader onSearch={handleOnSearch} hasData={!!data}/>}
              {
                data?.result?.map(
                    (result, i) => <KeywordGroup result={result} handleOpen={handleOpen} key={result.keyword} index={i}
                                                 showAll={i < 4 || showAll}/>)
              }
              {
                data?.result?.length < 4 &&
                placeHolderArr.map(i => <img className={classes.placeHolder} src={PlaceHolder} onClick={handleOpen}/>)
              }
            </div>
          </div>
        </div>
        <Modal open={open} onClose={handleClose} className={classes.modalContainer}>
          <div className={classes.modal}>
            <h3>Want to see the full list? Download Keyword Genius to see the full list and add automatically advertise
              for those keywords</h3>
            <Button color="primary" className={classes.downloadBtn} variant="contained" size="large" target="_"
                    href='https://apps.shopify.com/keyword-genius'>
              Download Here</Button>
          </div>
        </Modal>
      </>
  );
}
