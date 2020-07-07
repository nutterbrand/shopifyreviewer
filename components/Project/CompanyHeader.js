import React, {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import SearchHeader from '../../assets/img/searchHeader.svg';

const useStyles = makeStyles(productStyle);

export const CompanyHeader = ({onSearch, hasData}) => {
  const classes = useStyles();
  const router = useRouter();
  let valueObj = {domain: '', product: ''};
  const [paramValues, setParamValues] = useState(valueObj);
  const [inputValues, setInputValues] = useState(valueObj);
  useEffect(() => {
    let updatedValues = {...paramValues, ...router.query};
    if (
        router.query.hasOwnProperty('domain') ||
        router.query.hasOwnProperty('product')
    )
      setParamValues(updatedValues);
    setInputValues(updatedValues);
  }, [router]);

  useEffect(() => {
    if (!hasData && paramValues.domain) {
      onSearch(paramValues);
    }
  }, [paramValues.domain]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [ name ]: value});
  };
  const handleDomainSubmit = (e) => {
    onSearch(inputValues);
    Router.push({
      pathname: '/home',
      query: inputValues,
    });
    e.preventDefault();
  };
  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.headerForm}>
            <img className={classes.searchHeader} src={SearchHeader}/>
            <h2 className={classes.headerTitle}>
              Is your top ecommerce product being found on Google?
            </h2>
            <h3 className={classes.headerSub}>
              Put in your ecommerce site and top product to check
            </h3>
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleDomainSubmit}
            >
              <TextField
                  className={classes.domainSearch}
                  id="domainName"
                  name="domain"
                  placeholder="Search Your Company Website"
                  variant="outlined"
                  size="small"
                  value={inputValues.domain || paramValues.domain}
                  onChange={handleInputChange}
              />
              <TextField
                  className={classes.productSearch}
                  id="productName"
                  name="product"
                  placeholder="Search Your Product"
                  variant="outlined"
                  size="small"
                  value={inputValues.product || paramValues.product}
                  onChange={handleInputChange}
              />
              <Button className={classes.submit} type="submit">
                Search
              </Button>
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
