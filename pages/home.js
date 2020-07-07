import React, {useState} from 'react';
import {useRouter} from 'next/router';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from '../components/Project/Header';
import {CompanyHeader} from '../components/Project/CompanyHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {KeywordGroup} from '../components/Project/KeywordGroup';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import ProductLoading from '../assets/img/productLoading.svg';

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
  const handleOnSearch = (values) => {
    for (let i = 0; i < 100; i++) window.clearInterval(i);
    const {domain, product} = values;
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    setLoading(true);
    setData(null);
    const makeRequest = () => {
      const reqestUrl = `${BASE_URL}${
          product ? 'keyword/' : 'domain/'
      }${filteredDomain}/${product}`;
      fetch(reqestUrl).then((response) => response.json()).then((data) => {
        setData(data);
        setLoading(false);
        if (data?.result?.length > 15) {
          clearInterval(requestInterval);
        }
      });
    };
    makeRequest();
    const requestInterval = setInterval(makeRequest, 5000);
  };
  return (
      <>
        {isLoading && (
            <LoadingSpinner
                loadingImages={LOADING_IMAGES}
                loadingMessages={LOADING_MESSAGES}
            />
        )}
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              {!isLoading && (
                  <CompanyHeader onSearch={handleOnSearch} hasData={!!data}/>
              )}
              {data?.result?.map((result, i) => (
                  <KeywordGroup
                      result={result}
                      handleOpen={handleOpen}
                      key={result.keyword}
                      index={i}
                      showAll={i < 5 || showAll}
                  />
              ))}
              <div
                  className={classes.placeHolderContainer}
                  onClick={handleOpen}
              >
                <LinearProgress color="primary"/>
                <h3 className={classes.placeHolderTitle}>
                  #{data?.result?.length + 1} Keyword: "{data?.keywords[ data?.result?.length + 1 ]?.keyword}"
                </h3>
                <div className={classes.productLoadingContainer}>
                  <img className={classes.productLoading} src={ProductLoading}/>
                  <h4>Loading Products...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modalContainer}
        >
          <div className={classes.modal}>
            <h3>
              Want to see the full list? Download Keyword Genius to see the full
              list and add automatically advertise for those keywords
            </h3>
            <Button
                color="primary"
                className={classes.downloadBtn}
                variant="contained"
                size="large"
                target="_"
                href="https://apps.shopify.com/keyword-genius"
            >
              Download Here
            </Button>
          </div>
        </Modal>
      </>
  );
}
