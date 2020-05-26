import React from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

export const PaidAd = props => {
  const {product} = props;
  const classes = useStyles();
  return (
      <div className={classNames(classes.searchTermContainer)}>
        <h4><a className={classes.productLink} href={classes.url}>{product.title}</a></h4>
        <span className={classes.ad}>Ad</span>
        <a className={classes.companyLink} href={classes.link}>{product.domain}{product.displayed_link}</a>
        <div className={classes.snippet}>
          <div>{product.description}</div>
        </div>
      </div>
  );
};