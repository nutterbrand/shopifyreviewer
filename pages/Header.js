import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

export const Header = ({onSearch}) => {
  const classes = useStyles();
  const router = useRouter();
  const [values, setValues] = useState({domain: 'woodencork.com', product: 'irish whiskey'});
  useEffect(() => {
    if (router.query.hasOwnProperty('domain') || router.query.hasOwnProperty('product'))
      setValues({...values, ...router.query});
  }, [router]);
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [ name ]: value});
  };
  const handleDomainSubmit = (event) => {
    onSearch(values);
    event.preventDefault();
  };
  return (
      <>
        <div className={classes.header}>
          <h4>Shopify Reviewer</h4>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleDomainSubmit}>
            <TextField className={classes.domainSearch} id="domainName" name='domain'
                       placeholder='Search Your Company Website'
                       variant="outlined" size="small" value={values.domain} onChange={handleInputChange}/>
            <TextField className={classes.productSearch} id="productName" name='product'
                       placeholder='Search Your Product'
                       variant="outlined" size="small" value={values.product} onChange={handleInputChange}/>

            <Button className={classes.submit} type="submit">SUBMIT</Button>
          </form>
        </div>
      </>
  );
};