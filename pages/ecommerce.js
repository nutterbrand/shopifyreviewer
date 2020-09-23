import React, {useState, useEffect, useRef} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {CreateAdModal} from '../components/Project/CreateAdModal';
import {SearchAgainModal} from '../components/Project/SearchAgainModal';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
import {EmailModal} from '../components/Project/EmailModal';
import {HeaderShopify} from '../components/Project/HeaderShopify';
import {LoadingSpinner} from '../components/Project/LoadingSpinner';
import {ProductKeyWordsTable} from '../components/Project/ProductKeyWordsTable';
import {filterDomain, useStickyState} from '../components/Project/helpers/helper';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import Download1 from '../assets/img/download_1.svg';
import Download2 from '../assets/img/download_1.svg';
import Download3 from '../assets/img/download_1.svg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Router from 'next/router';

const useStyles = makeStyles(productStyle);

const LOADING_IMAGES = [Download1, Download2, Download3];
const LOADING_MESSAGES = [
  'Analyzing Shopify Store...',
  'Getting Keywords...',
  'Displaying Keywords...',
];
const BASE_URL = 'https://evening-retreat-22032.herokuapp.com/';
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

export default function HomePage() {
  const classes = useStyles();
  const [data, setData] = useStickyState(null, 'data');
  const [ad, setAd] = useState();
  const [productURL, updateProductURL] = useStickyState(null, 'product');
  const [postData, updatePostData] = useState();
  const [domain, updateDomain] = useStickyState(null, 'domain');
  const [createAdModalOpen, toggleAdModal] = useState(false);
  const [emailModalOpen, toggleEmailModal] = useState(false);
  const [searchAgainModalOpen, toggleSearchAgainModal] = useState(false);

  const [keywords, updateKeywords] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasSearched, updateSearchedAgain] = useState(true);
  const scrollRef = useRef(null);

  const {
    error,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  useEffect(() => {
    updateSearchedAgain(!createAdModalOpen && !emailModalOpen);
  }, [createAdModalOpen, emailModalOpen]);

  const makeRequest = requestUrl => {
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      console.log(data);
      setData(data);
      setAd(data.result[ 0 ]);
      setLoading(false);
      scrollToRef(scrollRef);
    });
  };

  const handleOnSearch = values => {
    const {domain, product} = values;
    updateProductURL(product);
    updateSearchedAgain(true);
    const filteredDomain = filterDomain(domain);
    updateDomain(filteredDomain);
    setLoading(true);
    setData(null);
    const requestUrl = `${BASE_URL}product-keyword/${filteredDomain}/${product}`;
    makeRequest(requestUrl);
  };

  const handleSearchAgainSubmit = keys => {
    Router.push({
      pathname: '/ecommerce',
      query: null,
    });
    const filteredDomain = filterDomain(domain);
    updateProductURL(null);
    toggleSearchAgainModal(false);
    setLoading(true);
    setData(null);
    const requestUrl = `${BASE_URL}multiple-keywords/${filteredDomain}/${productURL}/${keys.key1}/${keys.key2}`;
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
        <HeaderShopify isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout}
                       user={user}/>
         <div className={classes.companyPage}>
              <div className={classes.section}>
                <div className={classes.container}>
                  <EcommerceHeader
                      onSearch={handleOnSearch}
                      onChange={handleOnChange}
                      loadingTable={isLoading}
                  />
                  <div ref={scrollRef}></div>
                  {!!data && (
                      <GridContainer className={classes.keywordCard}>
                        <GridItem md={12} sm={12}>
                          {
                            data.result.length > 0 && hasSearched && <div className={classes.fixNoResult}>
                              <h4 className={classes.headerSearch}>
                                <Avatar className={classes.yellowAvatar}>👀</Avatar> Not seeing the keywords you are
                                expecting?
                              </h4>
                              <Button variant="contained"
                                      disableElevation
                                      className={classes.genSearchAgain}
                                      onClick={() => toggleSearchAgainModal(true)}>
                                Try a More Generic Search Again</Button>
                            </div>
                          }
                          {
                            data.result.length < 1 ? <div className={classes.noResult}>
                              <h4>Sorry, there aren't any keyword results for {productURL}...</h4>
                              <Button variant="contained"
                                      disableElevation
                                      className={classes.searchAgain}
                                      onClick={() => toggleSearchAgainModal(true)}>Search Again</Button>
                            </div> : <>
                              <h3 className={classes.headerAvatar}>
                                <Avatar className={classes.greenAvatar}>3</Avatar> Pick the 5
                                best keywords to add your site.
                              </h3>
                              <ProductKeyWordsTable
                                  rows={data.result}
                                  productURL={productURL}
                                  login={loginWithRedirect}
                                  user={user}
                              />
                            </>
                          }
                        </GridItem>
                      </GridContainer>
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
        <SearchAgainModal searchAgainModalOpen={searchAgainModalOpen} toggleSearchAgainModal={toggleSearchAgainModal}
                          handleSearchAgainSubmit={handleSearchAgainSubmit}/>
      </>
  );
}
