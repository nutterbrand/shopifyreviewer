import React, {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import classNames from 'classnames';
import ReactHtmlParser from 'react-html-parser';
import {filterDomain} from './helpers/helper';
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import SearchHeader from '../../assets/img/searchHeader.svg';

const useStyles = makeStyles(productStyle);

export const EcommerceHeader = ({onSearch, onChange, loadingTable, shouldReset}) => {
  const router = useRouter();
  const classes = useStyles();
  const defaultInput = {domain: '', product: ''};
  const [inputValues, setInputValues] = useState(defaultInput);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, updateLoading] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setInputValues(defaultInput);
      setProducts([]);
      setProduct(null);
    }
  }, [shouldReset]);

  useEffect(() => {
    let updatedValues = {...inputValues, ...router.query};
    if (
        router.query.hasOwnProperty('domain') &&
        router.query.hasOwnProperty('product')
    ) {
      handleUrlRequest(updatedValues.domain);
      setInputValues(updatedValues);
      onSearch(updatedValues);
    }
  }, [router]);

  useEffect(() => {
    if (products.length > 0) {
      setProduct(products.find(p => p.handle === router.query.product));
    }
  }, [products]);

  useEffect(() => {
    setInputValues({...inputValues, product: product?.handle});
  }, [product]);

  const handleInputChange = e => {
    const {name, value} = e.target;
    onChange();
    Router.push({
      pathname: '/ecommerce',
      query: null,
    });
    setInputValues({...inputValues, [ name ]: value});
    setProducts([]);
    setProduct(null);
  };

  const handleUrlRequest = domain => {
    updateLoading(true);
    const inputDomain = typeof domain === 'string' || domain instanceof String ? domain : inputValues.domain;
    const filteredDomain = filterDomain(inputDomain);
    const requestUrl = `https://evening-retreat-22032.herokuapp.com/urls-json/${filteredDomain}`;
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      setProducts(data.result.products);
      updateLoading(false);
    });
  };

  if (loadingTable) return null;
  return (
      <>
        <GridContainer className={classNames(classes.companyHeader,
            {[ classes.moveLeft ]: !!product},
        )}>
          <GridItem md={12} sm={12}>
            <div className={classes.headerForm}>
              <img className={classes.searchHeader} src={SearchHeader}/>
              <h2 className={classes.headerTitle}>
                Get your top Shopify products found on Google Search
              </h2>
              <h4>
                <b>
                  In less than 2 min, create a high converting campaign for your product
                </b>
              </h4>
              <div className={classes.formTwo}>
                <h3 className={classes.headerAvatar}>
                  <Avatar className={classes.greenAvatar}>1</Avatar>
                  What is your Shopify site?
                </h3>
                <div>
                  <TextField
                      className={classes.domainUrl}
                      id="domainName"
                      name="domain"
                      placeholder="allbirds.com"
                      variant="outlined"
                      size="small"
                      value={inputValues.domain}
                      onChange={handleInputChange}
                  />
                  {!!inputValues.domain && (
                      <Button className={classes.submit} onClick={handleUrlRequest}>
                        Next
                      </Button>
                  )}
                </div>
                <h3 className={classes.headerAvatar}>
                  <Avatar className={classes.greenAvatar}>2</Avatar> Select one of your products
                </h3>
                {isLoading && <div>
                  <h4>Loading Product Urls</h4>
                  <LinearProgress/>
                </div>
                }
                {!isLoading && !!products.length && (
                    <div className={classes.autoContainer}>
                      <Autocomplete
                          className={classes.productUrlAuto}
                          disableClearable
                          id="product-urls"
                          value={product}
                          onChange={(e, product) => {
                            setProduct(product);
                            setInputValues({
                              ...inputValues,
                              product: product?.handle,
                            });
                          }}
                          inputValue={products.find(p => p.handle === inputValues.product)?.title}
                          options={products}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => (
                              <TextField
                                  {...params}
                                  className={classes.productUrlTextField}
                                  variant="outlined"
                              />
                          )}
                      />
                      {!!inputValues.product && (
                          <Button className={classes.autoSubmit} onClick={() => {
                            Router.push({
                              pathname: '/ecommerce',
                              query: inputValues,
                            });
                          }}>
                            Search
                          </Button>
                      )}
                    </div>
                )}
              </div>
            </div>
          </GridItem>
        </GridContainer>
        {product &&
        <div className={classes.displaySection}>
          <div>
            <div className={classes.displayPrice}>${product.variants[ 0 ]?.price}</div>
            <img className={classes.displayImg} src={product.images[ 0 ]?.src}/>
          </div>
          <div>
            <div className={classes.displayDesContainer}>{ReactHtmlParser(product.body_html)}</div>
          </div>
        </div>
        }
      </>
  );
};
