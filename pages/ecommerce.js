import React, {useState, useEffect, useRef} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import {SearchAgainModal} from '../components/Project/SearchAgainModal';
import {EcommerceHeader} from '../components/Project/EcommerceHeader';
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
  const [productURL, updateProductURL] = useStickyState(null, 'product');
  const [domain, updateDomain] = useStickyState(null, 'domain');
  const [searchAgainModalOpen, toggleSearchAgainModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasSearched, updateSearchedAgain] = useState(true);
  const [shouldReset, reset] = useState(false);
  const scrollRef = useRef(null);

  const {
    error,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const domain = JSON.parse(window.localStorage.getItem('domain'));
      const product = JSON.parse(window.localStorage.getItem('product'));
      if (domain && product) {
        Router.push({
          pathname: '/ecommerce',
          query: {domain, product},
        });
      }
    }
  }, []);

  const makeRequest = requestUrl => {
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      console.log(data);
      setData(data);
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

  const resetQuery = () => {
    Router.push({
      pathname: '/ecommerce',
      query: null,
    });
  };

  const handleSearchAgainSubmit = keys => {
    resetQuery();
    const filteredDomain = filterDomain(domain);
    updateProductURL(null);
    toggleSearchAgainModal(false);
    setLoading(true);
    setData(null);
    const requestUrl = `${BASE_URL}multiple-keywords/${filteredDomain}/${productURL}/${keys.key1}/${keys.key2}`;
    makeRequest(requestUrl);
  };

  const handleOnChange = () => {
    localStorage.clear();
    setData(null);
    resetQuery();
    reset(true);
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
                  shouldReset={shouldReset}
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
                          <div>
                            <Button variant="contained"
                                    disableElevation
                                    className={classes.genSearchAgain}
                                    onClick={() => toggleSearchAgainModal(true)}>
                              Try a More Generic Search Again</Button>

                            <Button variant="contained"
                                    disableElevation
                                    className={classes.reset}
                                    onClick={handleOnChange}>
                              Reset</Button>
                          </div>
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
        <SearchAgainModal searchAgainModalOpen={searchAgainModalOpen} toggleSearchAgainModal={toggleSearchAgainModal}
                          handleSearchAgainSubmit={handleSearchAgainSubmit}/>
      </>
  );
}
