import React from 'react';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import classNames from 'classnames';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import GoogleSearch from '../../assets/img/googleSearch.png';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {TabPanel} from './TabPanel';
import {KeyWordRecommendations} from './KeyWordRecommendations';
import {ShoppingResult} from './ShoppingResult';
import {OrganicResult} from './OrganicResult';
import {PaidAd} from './PaidAd';

const useStyles = makeStyles(productStyle);
const a11yProps = (i) => {
  id: `simple-tab-${i}`;
};

export const KeywordGroup = ({result, handleOpen, index, showAll}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const categories = [
    'shopping_results',
    'ads',
    'organic_results',
    'related_searches',
  ];
  const displayCategories = [];
  _.each(result, (value, key) => {
    if (Array.isArray(value) && value.length > 0) {
      displayCategories[ categories.indexOf(key) ] = {[ key ]: value};
    }
  });
  const filteredCategories = displayCategories.filter(Boolean);
  const getTabLabel = (cat) => cat.replace('_', ' ').toUpperCase();
  const renderTabPanel = (category) => {
    switch (category) {
      case categories[ 0 ]:
        return (
            <div className={classes.productRow}>
              {result[ category ].map((product) => (
                  <ShoppingResult product={product} key={product.position}/>
              ))}
            </div>
        );
      case categories[ 1 ]:
        return (
            <div className={classes.organicRow}>
              {result[ category ].map((product) => (
                  <PaidAd product={product} key={product.position}/>
              ))}
            </div>
        );
      case categories[ 2 ]:
        return (
            <div className={classes.organicRow}>
              {result[ category ].map((product) => (
                  <OrganicResult product={product} key={product.position}/>
              ))}
            </div>
        );
      case categories[ 3 ]:
        return (
            <div className={classes.relatedSearchRow}>
              {result[ category ].map((searchTerm) => (
                  <a className={classes.relatedSearchTerm} href={searchTerm.link} key={searchTerm}>
                    {searchTerm.query}
                  </a>
              ))}
            </div>
        );
      default:
        return null;
    }
  };
  return (
      <div
          className={classNames(classes.keywordCard, {
            [ classes.pointer ]: !showAll,
          })}
          key={result.id}
          onClick={() => !showAll && handleOpen()}
      >
        <GridContainer>
          <GridItem md={12} sm={12} className={classes.recsContainer}>
            <h3 className={classes.keywordTitle}>
              #{index + 1} Keyword: "{result.keyword}"
            </h3>
            <div
                className={classNames(classes.recs, {[ classes.blur ]: !showAll})}
            >
              <h4 className={classes.recTitle}>Recommendations:</h4>
              <KeyWordRecommendations result={result}/>
            </div>
            <div
                className={classNames(classes.searchContainer, {
                  [ classes.blur ]: !showAll,
                })}
            >
              <h4 className={classes.searchingResult}>{result.keyword}</h4>
              <img className={classes.googleSearch} src={GoogleSearch}/>
            </div>
            <div className={classNames({[ classes.blur ]: !showAll})}>
              <AppBar position="static" className={classes.resultsTabs}>
                <Tabs value={value} variant="fullWidth" onChange={handleChange}>
                  {_.map(filteredCategories, (prop, i) => (
                      <Tab key={i}
                           className={classes.tabLabel}
                           label={getTabLabel(Object.keys(prop)[ 0 ])}
                           {...a11yProps(i)}
                      />
                  ))}
                </Tabs>
              </AppBar>
              {_.map(filteredCategories, (prop, i) => (
                  <TabPanel key={i} value={value} index={i} className={classes.tabPanel}>
                    {renderTabPanel(Object.keys(prop)[ 0 ])}
                  </TabPanel>
              ))}
            </div>
          </GridItem>
        </GridContainer>
      </div>
  );
};
