import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import Rating from '@material-ui/lab/Rating';
import classNames from 'classnames';

const useStyles = makeStyles(productStyle);

export const Product = (props) => {
  const {index, product, yourCompany, blurClass} = props;
  const classes = useStyles();
  return (
      <div key={index} className={classNames(classes.productContainer,
          {[ classes.highlighted ]: yourCompany && yourCompany.source === product.source})}>
        <img src={product.thumbnail} className={classNames(classes.productImg, blurClass)}/>
        <div>
          <div className={classes.productKeyword}>
            <b>#{index + 1}: {product.keyword}</b>
          </div>
          <a className={classes.productLink} href={classes.productLink}>{product.source}</a>
          <div className={classes.dollar}>${product.extracted_price}</div>
          <div className={classes.description}>
            <Rating value={parseInt(product.rating)} precision={0.5} size="small" readOnly/>
            <div>{product.title}</div>
          </div>
        </div>
      </div>
  );
};