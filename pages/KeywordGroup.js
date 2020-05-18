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
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </GridContainer>
      </div>
  );
};