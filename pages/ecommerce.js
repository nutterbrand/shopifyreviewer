import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from '../components/Project/Header';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {ProductKeyWordsTable} from '../components/Project/ProductKeyWordsTable';

import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
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
    const {domain, productUrlValue} = values;
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    setLoading(true);
    setData(null);
    const makeRequest = () => {
      const requestUrl = `${BASE_URL}url-keyword/${filteredDomain}/${productUrlValue}`;
      fetch(requestUrl).then((response) => response.json()).then((data) => {
        console.log(data)
        setData(data);
        setLoading(false);
      });
    };
    makeRequest();
  };
  const handleOnChange = () => setData(null);
  return (
      <>
        {isLoading && <LoadingSpinner loadingImages={LOADING_IMAGES} loadingMessages={LOADING_MESSAGES}/>}
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              {!isLoading && <EcommerceHeader onSearch={handleOnSearch} onChange={handleOnChange} hasData={!!data}/>}
              {!!data && <div className={classes.keywordCard}>
                <ProductKeyWordsTable rows={data.result.keywords} productURL={data.result.url}/>
              </div>
              }
            </div>
          </div>
        </div>
      </>
  );
}
