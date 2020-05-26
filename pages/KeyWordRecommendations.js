import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import _ from 'underscore';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

export const KeyWordRecommendations = (props) => {
  const {products, companyListings, yourCompany, keyword} = props;
  const classes = useStyles();
  const prices = _(products).pluck('extracted_price');
  const ratings = _.compact(_(products).pluck('rating'));
  const numRatings = ratings ? ratings.length + 1 : 0;
  const minPrice = _.min(products, elem => elem.extracted_price);
  const avgPrice = Math.floor(_.reduce(prices, (memo, num) => memo + num, 0) / prices.length || 1);
  if (companyListings.length) {
    const isTop5 = yourCompany.position <= 5;
    const isTop5Class = classNames({[ classes.recGreen ]: isTop5}, {[ classes.recRed ]: !isTop5});
    return (
        <>
          <div className={classes.rec}>
            <Icon className={isTop5Class} fontSize="small">{isTop5 ? 'thumb_up' : 'thumb_down'}</Icon>
            Your ad was in position<b className={isTop5Class}> #{yourCompany.position}</b> among your
            competition.
          </div>
          {minPrice.source === yourCompany.source ?
              <div className={classes.rec}>
                <Icon className={classes.recGreen} fontSize="small">monetization_on</Icon>
                You have the lowest price item advertised for this keyword
                <b className={classes.recGreen}> ${minPrice.extracted_price}.</b>
              </div> :
              <div className={classes.rec}>
                <Icon className={classes.recBlue} fontSize="small">monetization_on</Icon>
                <b className={classes.recBlue}> {minPrice.source} </b>has the lowest price item:
                <b className={classes.recBlue}> ${minPrice.extracted_price}</b>, while you have a
                price of <b className={classes.recBlue}> ${yourCompany.extracted_price}.</b>
                The average price is <b className={classes.recBlue}> ${avgPrice}.</b>
              </div>
          }
          {
            !yourCompany.rating &&
            <div className={classes.rec}><Icon className={classes.recGreen} fontSize="small">stars</Icon>
              Add ratings to your product in your Google Shopping feed.
            </div>
          }
          {
            !yourCompany.rating && numRatings > 1 &&
            <div className={classes.rec}><Icon className={classes.recBlue} fontSize="small">vpn_key</Icon>
              There are <b className={classes.recBlue}>{numRatings}</b> companies that have ratings for
              products that match this keyword.
            </div>
          }
        </>
    );
  } else {
    return (
        <>
          <div className={classes.rec}><Icon className={classes.recRed} fontSize="small">info</Icon>
            Your products did not show up for this keyword.
          </div>
          <div className={classes.rec}><Icon className={classes.recGreen} fontSize="small">add_circle</Icon>
            Add the following keyword to your product description:<b className={classes.recGreen}>"{keyword}".</b>
          </div>
          <div className={classes.rec}><Icon className={classes.recGreen} fontSize="small">monetization_on</Icon>
            Advertise a product near the avg price: <b className={classes.recGreen}> ${avgPrice} dollars.</b>
          </div>
        </>
    );
  }
};
