import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import classNames from 'classnames';
import Badge from '../components/Badge/Badge';

const useStyles = makeStyles(productStyle);
export const SearchResult = (props) => {
  const {index, product, yourCompany, blurClass} = props;
  const classes = useStyles();
  return (
      <div key={index} className={classNames(classes.searchTermContainer)}>
        <h3><a className={classes.productLink} href={classes.url}>{product.title}</a></h3>
        <span className={classes.ad}>Ad</span>
        <a className={classes.companyLink} href={classes.productLink}>{product.domain}{product.relative_url}</a>
        <div className={classes.snippet}>
          <div>{product.snippet}</div>
        </div>
        <h3 className={classNames(classes.rank, {[ classes.rankGreen ]: product.rank_absolute <= 10})}>Rank:
          #{product.rank_absolute} </h3>
        <Badge className={classes.cpc}><b>CPC: ${( product.cpc ).toFixed(2)} </b></Badge>
      </div>
  );
};