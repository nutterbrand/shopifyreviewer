import React from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

export const OrganicResult = props => {
  const {product} = props;
  const classes = useStyles();
  return (
      <div className={classNames(classes.searchTermContainer)}>
        <h3><a className={classes.productLink} href={classes.url}>{product.title}</a></h3>
        <a className={classes.companyLink} href={classes.link}>{product.domain}{product.displayed_link}</a>
        <div className={classes.snippet}>
          <div>{product.snippet}</div>
        </div>
      </div>
  );
};