import React from 'react';
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
const a11yProps = (index) => {id: `simple-tab-${index}`;};

export const KeywordGroup = ({result}) => {
  console.log(result);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
      <div className={classes.keywordCard}>
        <GridContainer>
          <GridItem md={12} sm={12} className={classes.recsContainer}>
            <h3 className={classes.keywordTitle}>#{result.position} Keyword: "{result.keyword}"</h3>
            <div className={classNames(classes.searchContainer)}>
              <h4 className={classes.searchingResult}>{result.keyword}</h4>
              <img className={classes.googleSearch} src={GoogleSearch}/>
            </div>
            <AppBar position="static" className={classes.resultsTabs}>
              <Tabs value={value} onChange={handleChange}>
                <Tab className={classes.tabLabel}  label="Shopping Results" {...a11yProps(0)} />
                <Tab className={classes.tabLabel}  label="Organic Results" {...a11yProps(1)} />
                <Tab className={classes.tabLabel}  label="Related Searches" {...a11yProps(2)} />
                <Tab className={classes.tabLabel}  label="Paid Ads" {...a11yProps(3)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
              <div className={classes.productRow}>
                {
                  result.shopping_results.map(product => <ShoppingResult product={product}/>)
                }
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={classes.organicRow}>
                {
                  result.organic_results.map(product => <OrganicResult product={product}/>)
                }
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3>Searches Related to {result.keyword}</h3>
              <div className={classes.relatedSearchRow}>
              {
                result.related_searches.map(
                    searchTerm => <a className={classes.relatedSearchTerm} href={searchTerm.link}>{searchTerm.query}</a>)

              }
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className={classes.organicRow}>
                {
                  result.ads.map(product => <PaidAd product={product}/>)
                }
              </div>
            </TabPanel>
          </GridItem>
        </GridContainer>
      </div>
  );
};