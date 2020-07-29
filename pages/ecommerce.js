import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {HeaderShopify} from '../components/Project/HeaderShopify';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {ProductKeyWordsTable} from '../components/Project/ProductKeyWordsTable';

import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import Download1 from '../assets/img/download_1.svg';
import Download2 from '../assets/img/download_1.svg';
import Download3 from '../assets/img/download_1.svg';
import Avatar from '@material-ui/core/Avatar';
import {CreateAdModal} from '../components/Project/CreateAdModal';
import {EmailModal} from '../components/Project/EmailModal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(productStyle);

const LOADING_IMAGES = [Download1, Download2, Download3];
const LOADING_MESSAGES = [
  'Analyzing Shopify Store...',
  'Getting Keywords...',
  'Displaying Keywords...',
];
const BASE_URL = 'https://evening-retreat-22032.herokuapp.com/';
export default function HomePage() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [ad, setAd] = useState();
  const [productURL, updateProductURL] = useState();
  const [postData, updatePostData] = useState();
  const [domain, updateDomain] = useState();
  const [createAdModalOpen, toggleAdModal] = useState(false);
  const [emailModalOpen, toggleEmailModal] = useState(false);
  const [keywords, updateKeywords] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const makeRequest = requestUrl => {
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      console.log(data);
      setData(data);
      setAd(data.result[ 0 ]);
      setLoading(false);
    });
  };

  const handleOnSearch = (values) => {
    const {domain, productUrlValue} = values;
    updateProductURL(productUrlValue);
    const filteredDomain = domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];
    updateDomain(filteredDomain);
    setLoading(true);
    setData(null);
    const requestUrl = `${BASE_URL}product-keyword/${filteredDomain}/${productUrlValue}`;
    makeRequest(requestUrl);
  };

  const handleSearchAgain = () => {
    setLoading(true);
    setData(null);
    const requestUrl = `${BASE_URL}product-url/${domain}/${productURL}`;
    makeRequest(requestUrl);
  };
  const handleOnChange = () => setData(null);
  const handleCreateAd = (selected) => {
    updateKeywords(selected);
    toggleAdModal(true);
  };
  const reset = () => {
    setData(null);
  };

  return (
      <>
        {isLoading && (
            <LoadingSpinner
                loadingImages={LOADING_IMAGES}
                loadingMessages={LOADING_MESSAGES}
            />
        )}
        <HeaderShopify/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              <EcommerceHeader
                  onSearch={handleOnSearch}
                  onSearchAgain={handleSearchAgain}
                  onChange={handleOnChange}
                  loadingTable={isLoading}
                  hasData={!!data}
              />
              {!!data && (
                  <div className={classes.keywordCard}>
                    {
                      data.result.length < 1 ? <div className={classes.noResult}>
                        <h4>Sorry, there aren't any keyword results for {productURL}...</h4>
                        <Button variant="contained"
                                disableElevation
                                className={classes.searchAgain}
                                onClick={handleSearchAgain}>Search Again</Button>
                      </div> : <>
                        <h3 className={classes.headerAvatar}>
                          <Avatar className={classes.greenAvatar}>3</Avatar> Pick the 5
                          best keywords to add your site.
                        </h3>
                        <ProductKeyWordsTable
                            rows={data.result}
                            productURL={productURL}
                            createAd={handleCreateAd}
                        />
                      </>
                    }
                  </div>
              )}
            </div>
          </div>
        </div>
        {ad && (
            <CreateAdModal
                ad={ad}
                createAdModalOpen={createAdModalOpen}
                keywords={keywords}
                toggleAdModal={toggleAdModal}
                toggleEmailModal={toggleEmailModal}
                updatePostData={updatePostData}
            />
        )}
        <EmailModal
            emailModalOpen={emailModalOpen}
            toggleEmailModal={toggleEmailModal}
            postData={postData}
            domain={domain}
            url={productURL}
            reset={reset}
        />
      </>
  );
}
