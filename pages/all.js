import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from '../components/Project/Header';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {ProductGroup} from '../components/Project/ProductGroup';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

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
const BASE_URL =
    'https://evening-retreat-22032.herokuapp.com/shopify/woodencork.com/';
export default function HomePage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const makeRequest = () => {
    const reqestUrl = `${BASE_URL}`;
    fetch(reqestUrl).then((response) => response.json()).then((data) => {
      setData(data);
      setLoading(false);
      console.log(data);
    });
  };

  useEffect(() => {
    makeRequest();
  }, []);

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
              {data?.result?.map((result, i) => (
                  <ProductGroup result={result} handleOpen={handleOpen} index={i}/>
              ))}
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
