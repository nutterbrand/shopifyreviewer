import _ from 'underscore';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
const useStyles = makeStyles(productStyle);

export const Recommendations = (props) => {
  const {data, keyword} = props;
  const classes = useStyles();
  const prices = _(data).pluck('extracted_price');
  const ratings = _.compact(_(data).pluck('rating'));
  const num_ratings = ratings ? ratings.length + 1 : 0;
  const min_price = _.min(data, elem => elem.extracted_price);
  const avg_price = Math.floor(
      _.reduce(prices, (memo, num) => memo + num, 0) /
      prices.length || 1,
  );
  const company_listing = _.where(data, {source: 'Blindsgalore.com'});
  if (company_listing.length) {
    const your_company = company_listing[ 0 ];
    return (
        <>
          <div className={classes.rec}>
            <Icon className={classes.recIconPos} fontSize="small">info</Icon>
            Your ad was in position <b className={classes.recIconPos}> #${your_company.position}</b> among your
            competition.
          </div>
          {min_price.source === your_company.source ?
              <div className={classes.rec}>
                <Icon className={classes.recIconPos} fontSize="small">info</Icon>
                You have the lowest price item advertised for this keyword
                <b className={classes.recIconPos}> ${min_price.extracted_price}.</b>
              </div> :
              <div className={classes.rec}><Icon className={classes.recIconNeg} fontSize="small">info</Icon>
                <b className={classes.recIconNeg}>{min_price.source}</b> has the lowest price item:
                <b className={classes.recIconPos}> ${min_price.extracted_price}</b>, while you have a
                price of <b className={classes.recIconNeg}> ${your_company.extracted_price}.</b>
                The average price is <b className={classes.recIconNeu}> ${avg_price}</b>.
              </div>
          }
          {
            !your_company.rating &&
            <div className={classes.rec}><Icon className={classes.recIconPos} fontSize="small">info</Icon>
              Add ratings to your product in your Google Shopping feed.
            </div>
          }
          {
            !your_company.rating && num_ratings > 1 &&
            <div className={classes.rec}><Icon className={classes.recIconPos} fontSize="small">info</Icon>
              There are <b className={classes.recIconPos}>{num_ratings}</b> companies that have ratings for
              products that match this keyword.
            </div>
          }
        </>
    );

  } else {
    return (
        <>
          <div className={classes.rec}><Icon className={classes.recIconNeg} fontSize="small">info</Icon>
            Your products did not show up for this keyword.
          </div>
          <div className={classes.rec}><Icon className={classes.recIconPos} fontSize="small">add_circle</Icon>
            Add the following keyword to your product description: <b
                className={classes.recIconPos}> "{keyword}"</b>
          </div>
          <div className={classes.rec}><Icon className={classes.recIconPos} fontSize="small">monetization_on</Icon>
            Advertise a product near the avg price: <b className={classes.recIconPos}> ${avg_price} dollars</b>.
          </div>
        </>
    );
  }
};
