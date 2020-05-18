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

const useStyles = makeStyles(productStyle);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const KeywordGroup = ({result}) => {
  console.log(result)
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
          </GridItem>
          <AppBar position="static" className={classes.resultsTabs}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Shopping Results" {...a11yProps(0)} />
              <Tab label="Organic Results" {...a11yProps(1)} />
              <Tab label="Related Searches" {...a11yProps(2)} />
              <Tab label="Paid Ads" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Shopping Results
          </TabPanel>
          <TabPanel value={value} index={1}>
            Organic Results
          </TabPanel>
          <TabPanel value={value} index={2}>
            Related Searches
          </TabPanel>
          <TabPanel value={value} index={3}>
            Paid Ads
          </TabPanel>
        </GridContainer>
      </div>
  );
};