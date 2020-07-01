import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

export const Header = () => {
  const classes = useStyles();
  return (
      <div className={classes.header}>
        <h4>Shopify Reviewer</h4>
      </div>
  );
};