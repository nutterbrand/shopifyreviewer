import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import classNames from 'classnames';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '@material-ui/core/Button';
import {RecommendationsSearchTerm} from './RecommendationsSearchTerm';
import GoogleSearch from '../assets/img/googleSearch.png';
import {SearchResult} from './SearchResult';
import _ from 'underscore';

const useStyles = makeStyles(productStyle);

export const KeywordSearchTerm = (props) => {
  const {keyIndex, products, isSignedUp, updateStatus} = props;
  const classes = useStyles();
  const keyword = products[ 0 ].keyword;
  const notTopTenAndNotSignedUp = keyIndex > 9 && !isSignedUp;
  const companyListings = _.where(products, {domain: 'www.blindsgalore.com'});
  const yourCompany = companyListings && companyListings[ 0 ];
  const blurClass = {[ classes.blur ]: notTopTenAndNotSignedUp};
  return (
      <div className={classes.keywordCard}>
        <GridContainer>
          <GridItem md={12} sm={12} className={classes.recsContainer}>
            <h3 className={classes.keywordTitle}>#{keyIndex + 1} Keyword: "{keyword}"</h3>
            {notTopTenAndNotSignedUp &&
            <Button size="large" color='secondary' className={classes.showButton} variant="contained"
                    onClick={() => updateStatus(true)}>SIGN UP TO SEE RESULTS</Button>}
            <div className={classNames(classes.recs, blurClass)}>
              <h4 className={classes.recTitle}>Recommendations:</h4>
              <RecommendationsSearchTerm products={products} companyListings={companyListings} yourCompany={yourCompany}
                               keyword={keyword}/>
            </div>
            <div className={classNames(classes.searchContainer, blurClass)}>
              <h4 className={classes.searchingResult}>{keyword}</h4>
              <img className={classes.googleSearch} src={GoogleSearch}/>
            </div>
          </GridItem>
          <GridItem md={12} sm={12} className={classNames(blurClass)}>
            <GridContainer className={classes.productRow}>
              {products.map((product, index) =>
                  <SearchResult key={index} index={index} product={product} yourCompany={yourCompany}
                           blurClass={blurClass}/>
              )}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
  );
};
