import React, {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import SearchHeader from '../../assets/img/searchHeader.svg';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(productStyle);

export const EcommerceHeader = ({onSearch, hasData}) => {
  const classes = useStyles();
  let valueObj = {domain: '', product: ''};
  const [inputValues, setInputValues] = useState(valueObj);
  const [productUrls, setUrls] = useState([]);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [ name ]: value});
  };

  const handleDomainSubmit = e => {
    onSearch(inputValues);
    e.preventDefault();
  };

  const handleUrlRequest = e => {
    e.preventDefault();
    // const requestUrl = `https://evening-retreat-22032.herokuapp.com/urls/${inputValues.domain}`;
    const requestUrl = `https://evening-retreat-22032.herokuapp.com/urls/woodencork.com`;
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      setUrls(data.result.urls);
    });
  };

  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.headerForm}>
            <img className={classes.searchHeader} src={SearchHeader}/>
            <h2 className={classes.headerTitle}>
              Is your top ecommerce product being found on Google?
            </h2>
            <form
                className={classes.formTwo}
                noValidate
                autoComplete="off"
                onSubmit={handleDomainSubmit}
            >
              <h3 className={classes.headerAvatar}>
                <Avatar className={classes.greenAvatar}>1</Avatar>
                Enter Your Shopify Domain
              </h3>
              <div>
                <TextField
                    className={classes.domainSearch}
                    id="domainName"
                    name="domain"
                    placeholder="Search Your Company Website"
                    variant="outlined"
                    size="small"
                    value={'woodencork.com'}
                    onChange={handleInputChange}
                />
                <Button className={classes.submit} onClick={handleUrlRequest}>
                  Next
                </Button>
              </div>
              {!!productUrls.length &&
              <>
                <h3 className={classes.headerAvatar}>
                  <Avatar className={classes.greenAvatar}>2</Avatar>
                  Selected Your Product Page
                </h3>
                <div className={classes.autoContainer}>
                  <Autocomplete
                      className={classes.productUrlAuto}
                      size="large"
                      id="product-urls"
                      options={productUrls}
                      getOptionLabel={option => option}
                      renderInput={(params) => <TextField {...params} variant="outlined"/>}
                  />
                  <Button className={classes.autoSubmit} type="submit">
                    Search
                  </Button>
                </div>
              </>}
            </form>
          </div>
          {hasData && (
              <div className={classes.statDes}>
                <h3>Summary</h3>
                <h4>
                  Your customers are searching for your products. Are you being
                  found?
                </h4>
                <h4>
                  We automatically analyze the competition on 20 keywords on
                  Shopping, Paid Search Ads, Organic, and even related keywords for
                  your top product.
                </h4>
                <h4>The results will load in as you are reading the page.</h4>
              </div>
          )}
        </GridItem>
      </GridContainer>
  );
};
