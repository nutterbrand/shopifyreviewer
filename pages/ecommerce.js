import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {Header} from '../components/Project/Header';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
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
              {data?.result?.map((result, i) => (
                  i < 200 && <div className={classes.keywordCard} key={i}>
                    <h3 className={classes.headerAvatar}><Avatar className={classes.blueAvatar}>
                      {i + 1} </Avatar><b>{result.keyword}</b></h3>
                    <div className={classes.recs}>
                      <div className={classes.keyRec}><Icon className={classes.recRed}>star</Icon>
                        <h4>Volume: {result.volume}</h4>
                      </div>
                      <div className={classes.keyRec}><Icon className={classes.recRed}>star</Icon>
                        <h4>Competition: {result.competition}</h4>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
}
