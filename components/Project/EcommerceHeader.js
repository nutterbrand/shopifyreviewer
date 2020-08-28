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

export const EcommerceHeader = ({onSearch, onChange, loadingTable}) => {
  const router = useRouter();
  const classes = useStyles();
  const defaultInput = {domain: '', product: ''};
  const [inputValues, setInputValues] = useState(defaultInput);
  const [productUrls, setUrls] = useState([]);
  const [products, setProducts] = useState([]);
  const [displayProduct, setDisplayingProduct] = useState();
  const [productUrl, setProductUrl] = useState('');
  const [isLoading, updateLoading] = useState(false);

  useEffect(() => {
    let updatedValues = {...inputValues, ...router.query};
    if (
        router.query.hasOwnProperty('domain') &&
        router.query.hasOwnProperty('product')
    ) {
      handleUrlRequest(updatedValues.domain);
      setInputValues(updatedValues);
      setProductUrl(updatedValues.product);
      onSearch(updatedValues);
    }
  }, [router]);

  useEffect(() => {
    if (productUrls.length > 0) {
      setProductUrl(router.query?.product || productUrls[ 0 ]);
      if (router.query?.product) {
        setDisplayingProduct(
            products.find(p => p.handle === router.query.product));
      } else {
        setDisplayingProduct(products[ 0 ]);
      }
    }
  }, [productUrls, products]);

  useEffect(() => {
    setDisplayingProduct(products.find(p => p.handle === productUrl));
  }, [productUrl]);

  const handleInputChange = e => {
    const {name, value} = e.target;
    onChange();
    Router.push({
      pathname: '/ecommerce',
      query: null,
    });
    setInputValues({...inputValues, [ name ]: value});
    setUrls([]);
    setProductUrl('');
  };

  // const findHandle = title => products.find(p => p.title === title).handle;

  const handleUrlRequest = domain => {
    updateLoading(true);
    const inputDomain = typeof domain === 'string' || domain instanceof String ? domain : inputValues.domain;
    const filteredDomain = filterDomain(inputDomain);
    const requestUrl = `https://evening-retreat-22032.herokuapp.com/urls-json/${filteredDomain}`;
    fetch(requestUrl).then((response) => response.json()).then((data) => {
      setUrls(data.result.products.map(p => p.handle));
      setProducts(data.result.products);
      updateLoading(false);
    });
  };

  if (loadingTable) return null;
  return (
      <>
        <GridContainer className={classNames(classes.companyHeader,
            {[ classes.moveLeft ]: !!displayProduct},
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
                {!isLoading && !!productUrls.length && (
                    <div className={classes.autoContainer}>
                      <Autocomplete
                          className={classes.productUrlAuto}
                          id="product-urls"
                          value={productUrl}
                          onChange={(e, productUrl) => setProductUrl(productUrl)}
                          inputValue={inputValues.product}
                          onInputChange={(e, productUrl) =>
                              setInputValues({
                                ...inputValues,
                                product: productUrl,
                              })
                          }
                          options={productUrls}
                          getOptionLabel={(option) => option}
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
        {displayProduct &&
        <div className={classes.displaySection}>
          <div>
            <div className={classes.displayPrice}>${displayProduct.variants[ 0 ].price}</div>
            <img className={classes.displayImg} src={displayProduct.images[ 0 ].src}/>
          </div>
          <div>
            <div className={classes.displayDesContainer}>{ReactHtmlParser(displayProduct.body_html)}</div>
          </div>
        </div>
        }
      </>
  );
};
