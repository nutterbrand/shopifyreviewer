import React, {useState} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
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
import Badge from '../components/Badge/Badge';
import {Recommendations} from './Recommendations';
import {Product} from './Product';

const useStyles = makeStyles(productStyle);

const fetcher = url => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const {data, error} = useSwr('/api/shopping', fetcher);
  if (error) return <h6 className={classes.center}>Failed to load data</h6>;
  if (!data) return <h6 className={classes.center}>Loading Your Marketing Analysis...</h6>;
  const groupedData = _.filter(_.groupBy(data, 'keyword'), product => product.length > 3);
  const productsData = _.keys(groupedData);

  return (
      <div className={classes.companyPage}>
        <Header fixed color="white" brand="Shopify Reviewer"
                links={
                  <Button color={isSignedUp ? 'primary' : 'secondary'} variant="contained"
                          className={classes.signUp} onClick={() => updateStatus(!isSignedUp)}>
                    {!isSignedUp ? 'Sign Up' : 'Account'}</Button>}/>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer className={classes.companyHeader}>
              <GridItem md={8} sm={12}>
                <img className={classes.headerImg} src={CompanyLogo}/>
                <h3>Shopping Score Overview:</h3>
                <div className={classes.stat}>
                  <Badge className={classes.badge} color="success">32%</Badge> of the time your company
                  shows up for the <b className={classes.dollar}>top keywords</b> in your industry.
                </div>
                <div className={classes.stat}>
                  <Badge className={classes.badge} color="warning">16%</Badge> of the time your company
                  had the <b className={classes.dollar}>lowest price</b> compared to your competition.
                </div>
                <div className={classes.stat}>
                  <Badge className={classes.badge} color="danger">4%</Badge> of the time your company
                  ratings on products for <b className={classes.dollar}>top keywords</b>.
                </div>
              </GridItem>
              <GridItem md={4} sm={12}>
                <h2>Score: <b className={classes.statNum}>22%</b></h2>
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
              const notTopTenAndNotSignedUp = keyIndex > 9 && !isSignedUp;
              const blurClass = {[ classes.blur ]: notTopTenAndNotSignedUp};
              return (
                  <>
                    <div className={classes.keywordCard}>
                      <GridContainer>
                        <GridItem md={12} sm={12} className={classes.recsContainer}>
                          <h3 className={classes.keywordTitle}>#{keyIndex + 1} Keyword: "{keyword}"</h3>
                          {notTopTenAndNotSignedUp &&
                          <Button size="large" color='secondary' className={classes.showButton} variant="contained"
                                  onClick={() => updateStatus(true)}>SIGN UP TO SEE RESULTS</Button>}
                          <div className={classNames(classes.recs, blurClass)}>
                            <h4 className={classes.recTitle}>Recommendations:</h4>
                            <Recommendations products={products} keyword={keyword}/>
                          </div>
                          <div className={classNames(classes.searchContainer, blurClass)}>
                            <h4 className={classes.searchingResult}>{keyword}</h4>
                            <img className={classes.googleSearch} src={GoogleSearch}/>
                          </div>
                        </GridItem>
                        <GridItem md={12} sm={12} className={classNames(blurClass)}>
                          <GridContainer className={classes.productRow}>
                            {products.map((product, index) =>
                                <Product index={index} product={product} blurClass={blurClass}/>
                              )}
                            {products.length > 5 &&
                            <i className={classes.more}>There's {products.length - 5} more products, scroll
                              right...</i>}
                          </GridContainer>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </>
              );
            })}
          </div>
        </div>
      </div>
  );
};
