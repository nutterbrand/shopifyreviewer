import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(productStyle);

export const Header = (props) => {
  const [domainName, updateSearch] = useState('');
  const handleChange = event => updateSearch(event.target.value);
  const handleSubmit = (event) => {
    //TODO: Make Call to BE API
    updateSearch('');
    event.preventDefault();
  };
  const classes = useStyles();

  return (
      <div className={classes.header}>
        <h4>Shopify Reviewer</h4>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField className={classes.domain} id="domain" placeholder='Enter Your Company Website'
                     variant="outlined" size="small" value={domainName} onChange={handleChange}/>
          <Button className={classes.submit} type="submit">SUBMIT</Button>
        </form>
        <Button variant="contained" className={classes.signUp}>Sign Up</Button>
      </div>
  );
};