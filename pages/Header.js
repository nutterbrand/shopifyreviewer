import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(productStyle);

export const Header = () => {
  const classes = useStyles();
  const [values, setValues] = useState({domain: '', product: ''});
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [ name ]: value});
  };
  const handleDomainSubmit = (event) => {
    //TODO: Make Call to BE API To get data
    setValues({...values, domain: ''});
    event.preventDefault();
  };
  return (
      <>
        <div className={classes.header}>
          <h4>Shopify Reviewer</h4>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={handleDomainSubmit}>
            <TextField className={classes.domain} id="domainName" name='domain' placeholder='Enter Your Company Website'
                       variant="outlined" size="small" value={values.domain} onChange={handleInputChange}/>
            <Button className={classes.submit} type="submit">SUBMIT</Button>
          </form>
        </div>
      </>
  );
};