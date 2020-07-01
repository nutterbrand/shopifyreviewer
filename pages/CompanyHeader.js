import React, {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import SearchHeader from '../assets/img/searchHeader.svg';

const useStyles = makeStyles(productStyle);

export const CompanyHeader = ({onSearch, hasData}) => {
  const classes = useStyles();
  const router = useRouter();
  const [values, setValues] = useState({domain: '', product: ''});
  useEffect(() => {
    if (router.query.hasOwnProperty('domain') || router.query.hasOwnProperty('product'))
      setValues({...values, ...router.query});
  }, [router]);

  useEffect(() => {
    if (!hasData && values.domain) {
      onSearch(values);
    }
  }, [values.domain, values.product]);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [ name ]: value});
  };
  const handleDomainSubmit = (event) => {
    onSearch(values);
    Router.push({
      pathname: '/home',
      query: values,
    });
    event.preventDefault();
  };
  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.headerForm}>
            <img className={classes.searchHeader} src={SearchHeader}/>
            <h2 className={classes.headerTitle}>Is your top Shopify product being found on Google?</h2>
            <h3 className={classes.headerSub}>Plug in your domain and product to check</h3>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={handleDomainSubmit}>
              <TextField className={classes.domainSearch} id="domainName" name='domain'
                         placeholder='Search Your Company Website'
                         variant="outlined" size="small" value={values.domain} onChange={handleInputChange}/>
              <TextField className={classes.productSearch} id="productName" name='product'
                         placeholder='Search Your Product'
                         variant="outlined" size="small" value={values.product} onChange={handleInputChange}/>

              <Button className={classes.submit} type="submit">Search</Button>
            </form>
          </div>
          {hasData && <div className={classes.statDes}>
            <h3>Summary</h3>
            <h4>We did a full on analysis on over a 100 of the most
              popular searches that bring customers to your site.
            </h4>
            <h4>We found quite a few areas we you can improve your
              Google advertising to get more customers buying on
              your site.
            </h4>
          </div>}
        </GridItem>
      </GridContainer>
  );
};