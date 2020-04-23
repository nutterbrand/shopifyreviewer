import React, {useState} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Header from 'components/Header/Header.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import GoogleSearch from 'assets/img/googleSearch.png';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import _ from 'underscore';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';

const useStyles = makeStyles(productStyle);

const fetcher = url => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const {data, error} = useSwr('/api/shopping', fetcher);
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  const groupedData = _.filter(_.groupBy(data, 'keyword'), product => product.length > 3);
  const productsData = _.keys(groupedData);
  const getRecommendations = (data, keyword) => {
    const prices = _(data).pluck('extracted_price');
    const ratings = _.compact(_(data).pluck('rating'));
    const num_ratings = ratings ? ratings.length + 1 : 0;
    const min_price = _.min(data, elem => elem.extracted_price);
    const avg_price = Math.floor(
        _.reduce(prices, (memo, num) => memo + num, 0) /
        prices.length || 1,
    );
    const company_listing = _.where(data, {source: 'Blindsgalore.com'});
    let recommendations = [];
    if (company_listing.length) {
      const your_company = company_listing[ 0 ];
      recommendations = [`Your ad was in position #${your_company?.position} among your competition.`];
      if (min_price.source === your_company.source) {
        recommendations = [
          ...recommendations,
          `You have the lowest price item advertised for this keyword $${min_price.extracted_price}.`];
      } else {
        recommendations = [
          ...recommendations,
          `${min_price.source} has the lowest price item: $${min_price.extracted_price},
                  while you have a price of $${your_company.extracted_price}. The average price is $${avg_price}.`];
      }
      if (!your_company.rating) {
        recommendations = [
          ...recommendations,
          `Add ratings to your product in your Google Shopping feed.`];
        if (num_ratings > 1) {
          recommendations = [
            ...recommendations,
            `There are ${num_ratings} companies that have ratings for products that match this keyword.`];
        }
      }
    } else {
      recommendations = [
        ...recommendations,
        'Your products did not show up for this keyword.',
        `Add the following keyword to your product description: "${keyword}"`,
        `Advertise a product near the avg price: $${avg_price} dollars.`,
      ];
    }
    return recommendations;
  };

  return (
      <div className={classes.productPage}>
        <Header fixed color="white" brand="Shopify Reviewer"
                links={
                  <Button color={isSignedUp ? 'primary' : 'secondary'} variant="contained"
                          className={classes.signUp} onClick={() => updateStatus(!isSignedUp)}>
                    {!isSignedUp ? 'Sign Up' : 'Account'}</Button>}/>
        <div className={classNames(classes.section)}>
          <div className={classes.container}>
            <GridContainer className={classes.productHeader}>
              <GridItem md={7} sm={12}>
                <img className={classes.headerImg} src={CompanyLogo}/>
                <h3>Shopping Score Overview:</h3>
                <div className={classes.stat}>
                  <b className={classes.statNum}>23%</b> of the time your company
                  shows up for the top keywords in your industry.
                </div>
                <div className={classes.stat}>
                  <b className={classes.statNum}>11%</b> of the time your company
                  had the lowest price compared to your competition.
                </div>
                <div className={classes.stat}>
                  <b className={classes.statNum}>4%</b> of the time your company
                  ratings on products for top keywords.
                </div>
              </GridItem>
              <GridItem md={5} sm={12}>
                <h2>Score: <b className={classes.statNum}>12%</b></h2>
                <p>We did a full on analysis on over a 100 of the most
                  popular searches that bring customers to your site.</p>
                <p>We found quite a few areas we you can improve your
                  Google advertising to get more customers buying on
                  your site.</p>
              </GridItem>
            </GridContainer>
            {productsData.map((key, keyIndex) => {
              const products = groupedData[ key ];
              const keyword = products[ 0 ].keyword;
              const recommendations = getRecommendations(products, keyword);
              const shouldBlurClass = {[ classes.blur ]: keyIndex > 9 && !isSignedUp};
              return <div className={classes.keywordHeader}>
                <GridContainer>
                  <GridItem md={12} sm={12} className={classes.recsContainer}>
                    <h3 className={classes.keywordTitle}>Keyword: "{keyword}"</h3>
                    <h4 className={classNames(shouldBlurClass)}><b>Recommendations:</b></h4>
                    {recommendations.map((rec, i) => {
                      return <div key={i} className={classNames(shouldBlurClass)}>{rec}</div>;
                    })}
                    <div className={classNames(classes.searchContainer, shouldBlurClass)}>
                      <h4 className={classes.searchingResult}>{keyword}</h4>
                      <img className={classes.googleSearch} src={GoogleSearch}/>
                    </div>
                  </GridItem>
                  <GridItem md={12} sm={12} className={classNames(shouldBlurClass)}>
                    <GridContainer className={classes.productRow}>
                      {products.map((product, index) => {
                        return (
                            <div key={index} className={classes.productContainer}>
                              <img src={product.thumbnail} className={classNames(classes.productImg, shouldBlurClass)}/>
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
                      })}
                      {products.length > 5 &&
                      <i className={classes.more}>There's {products.length - 5} more products, scroll right...</i>}
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </div>;
            })}
          </div>
        </div>
      </div>
  );
}
