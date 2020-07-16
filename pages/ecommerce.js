import React, {useState} from 'react';
import {useRouter} from 'next/router';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from '../components/Project/Header';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {KeywordGroup} from '../components/Project/KeywordGroup';

import LinearProgress from '@material-ui/core/LinearProgress';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import ProductLoading from '../assets/img/productLoading.svg';
import Download1 from '../assets/img/download_1.svg';
import Download2 from '../assets/img/download_1.svg';
import Download3 from '../assets/img/download_1.svg';

const useStyles = makeStyles(productStyle);

const LOADING_IMAGES = [Download1, Download2, Download3];
const LOADING_MESSAGES = [
  'Downloading Shopify Product Page...',
  'Analyzing Competitors...',
  'Building Landing Page...',
];
const BASE_URL = 'https://evening-retreat-22032.herokuapp.com/';
export default function HomePage() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleOnSearch = values => {
    for (let i = 0; i < 100; i++) window.clearInterval(i);
    const {domain, productUrlValue} = values;
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    setLoading(true);
    setData(null);
    const makeRequest = () => {
      const requestUrl = `${BASE_URL}url-keyword/${filteredDomain}/${productUrlValue}`;
      fetch(requestUrl).then((response) => response.json()).then((data) => {
        setData(data);
        console.log(data)
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
              <EcommerceHeader onSearch={handleOnSearch} hasData={!!data}/>
              {/*{data?.result?.map((result, i) => (*/}
              {/*    <KeywordGroup result={result} key={result.keyword} index={i} showAll={i < 5 }/>*/}
              {/*))}*/}
              {/*{data?.keywords && data.result.length < 20 &&*/}
              {/*<div className={classes.placeHolderContainer}>*/}
              {/*  <LinearProgress color="primary"/>*/}
              {/*  <h3 className={classes.placeHolderTitle}>*/}
              {/*    #{data?.result?.length + 1} Keyword: "{data?.keywords[ data?.result?.length + 1 ]?.keyword}"*/}
              {/*  </h3>*/}
              {/*  <div className={classes.productLoadingContainer}>*/}
              {/*    <img className={classes.productLoading} src={ProductLoading}/>*/}
              {/*    <h4>Loading Products...</h4>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*}*/}
            </div>
          </div>
        </div>
      </>
  );
}
