import React from 'react';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import classNames from 'classnames';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import GoogleSearch from '../assets/img/googleSearch.png';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {TabPanel} from './TabPanel';
import {ShoppingResult} from './ShoppingResult';
import {OrganicResult} from './OrganicResult';
import {PaidAd} from './PaidAd';

const useStyles = makeStyles(productStyle);
const a11yProps = i => {id: `simple-tab-${i}`;};

export const KeywordGroup = ({result, showAll}) => {
  console.log(result);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const categories = ['shopping_results', 'organic_results', 'related_searches', 'ads'];
  const filteredCategories = [];
  _.each(result, (value, key) => {
        if (Array.isArray(value) && value.length > 0) {
          filteredCategories.push({[ key ]: value});
        }
      },
  );
  const getTabLabel = (cat) => cat.replace('_', ' ').toUpperCase();
  const renderTabPanel = category => {
    switch (category) {
      case categories[ 0 ]:
        return <div className={classes.productRow}>
          {result[ category ].map(product => <ShoppingResult product={product}/>)}
        </div>;
      case categories[ 1 ]:
        return <div className={classes.organicRow}>
          {result[ category ].map(product => <OrganicResult product={product}/>)}
        </div>;
      case categories[ 2 ]:
        return <div className={classes.relatedSearchRow}>
          {result[ category ].map(
              searchTerm => <a className={classes.relatedSearchTerm}
                               href={searchTerm.link}>{searchTerm.query}</a>)}
        </div>;
      case categories[ 3 ]:
        return <div className={classes.organicRow}>
          {result[ category ].map(product => <PaidAd product={product}/>)}
        </div>;
      default:
        return null;
    }
  };
  return (
      <div className={classes.keywordCard} key={result.id}>
        <GridContainer>
          <GridItem md={12} sm={12} className={classes.recsContainer}>
            <h3 className={classes.keywordTitle}>#{result.position} Keyword: "{result.keyword}"</h3>
            <div className={classNames(classes.searchContainer, {[ classes.blur ]: !showAll})}>
              <h4 className={classes.searchingResult}>{result.keyword}</h4>
              <img className={classes.googleSearch} src={GoogleSearch}/>
            </div>
            <div className={classNames({[ classes.blur ]: !showAll})}>
              <AppBar position="static" className={classes.resultsTabs}>
                <Tabs value={value} variant="fullWidth" onChange={handleChange}>
                  {_.map(filteredCategories, (prop, i) =>
                      <Tab className={classes.tabLabel} label={getTabLabel(Object.keys(prop)[ 0 ])}
                           {...a11yProps(i)} />)
                  }
                </Tabs>
              </AppBar>
              {
                _.map(filteredCategories, (prop, i) =>
                    <TabPanel value={value} index={i} className={classes.tabPanel}>
                      {renderTabPanel(Object.keys(prop)[ 0 ])}
                    </TabPanel>,
                )
              }
            </div>
          </GridItem>
        </GridContainer>
      </div>
  );
};