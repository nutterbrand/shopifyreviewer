import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

export const Recommendations = (props) => {
  const {products, keyword} = props;
  const classes = useStyles();
  const prices = _(products).pluck('extracted_price');
  const ratings = _.compact(_(products).pluck('rating'));
  const num_ratings = ratings ? ratings.length + 1 : 0;
  const min_price = _.min(products, elem => elem.extracted_price);
  const avg_price = Math.floor(
      _.reduce(prices, (memo, num) => memo + num, 0) /
      prices.length || 1,
  );
  const company_listing = _.where(products, {source: 'Blindsgalore.com'});
  if (company_listing.length) {
    const your_company = company_listing[ 0 ];
    const isTop5 = your_company.position <= 5;
    const isTop5Class = classNames({[ classes.recIconGreen ]: isTop5}, {[ classes.recIconRed ]: !isTop5});
    return (
        <>
          <div className={classes.rec}>
            <Icon className={isTop5Class} fontSize="small">{isTop5 ? 'thumb_up' : 'thumb_down'}</Icon>
            Your ad was in position<b className={isTop5Class}> #{your_company.position}</b> among your
            competition.
          </div>
          {min_price.source === your_company.source ?
              <div className={classes.rec}>
                <Icon className={classes.recIconGreen} fontSize="small">monetization_on</Icon>
                You have the lowest price item advertised for this keyword
                <b className={classes.recIconGreen}> ${min_price.extracted_price}.</b>
              </div> :
              <div className={classes.rec}>
                <Icon className={classes.recIconYellow} fontSize="small">monetization_on</Icon>
                <b className={classes.recIconYellow}> {min_price.source} </b>has the lowest price item:
                <b className={classes.recIconYellow}> ${min_price.extracted_price}</b>, while you have a
                price of <b className={classes.recIconYellow}> ${your_company.extracted_price}.</b>
                The average price is <b className={classes.recIconYellow}> ${avg_price}.</b>
              </div>
          }
          {
            !your_company.rating &&
            <div className={classes.rec}><Icon className={classes.recIconGreen} fontSize="small">stars</Icon>
              Add ratings to your product in your Google Shopping feed.
            </div>
          }
          {
            !your_company.rating && num_ratings > 1 &&
            <div className={classes.rec}><Icon className={classes.recIconYellow} fontSize="small">vpn_key</Icon>
              There are <b className={classes.recIconYellow}>{num_ratings}</b> companies that have ratings for
              products that match this keyword.
            </div>
          }
        </>
    );

  } else {
    return (
        <>
          <div className={classes.rec}><Icon className={classes.recIconRed} fontSize="small">info</Icon>
            Your products did not show up for this <b className={classes.recIconRed}> keyword. </b>
          </div>
          <div className={classes.rec}><Icon className={classes.recIconGreen} fontSize="small">add_circle</Icon>
            Add the following keyword to your product description:<b className={classes.recIconGreen}>"{keyword}".</b>
          </div>
          <div className={classes.rec}><Icon className={classes.recIconGreen} fontSize="small">monetization_on</Icon>
            Advertise a product near the avg price: <b className={classes.recIconGreen}> ${avg_price} dollars.</b>
          </div>
        </>
    );
  }
};
