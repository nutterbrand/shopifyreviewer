import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import _ from 'underscore';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {CompanyScoreCard} from './CompanyScoreCard.js';
import {Header} from './Header';
import {KeywordProducts} from './KeywordProducts';
import 'react-circular-progressbar/dist/styles.css';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {Recommendations} from './Recommendations';
import GoogleSearch from '../assets/img/googleSearch.png';
import {Product} from './Product';

const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());


const TabPanel = props => {
  const { children, value, index, ...other } = props;
  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
        )}
      </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function HomePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const {data, error} = useSwr('https://evening-retreat-22032.herokuapp.com/report/blindsgalore.com/', fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
  console.log(data);
  if (!data)
    return (
        <div className={classes.center}>
          <img className={classes.loadImg} src={CompanyLogo}/>
          <h3 className={classes.loadText}>
            Please Wait For a Moment While We Are Loading Your Marketing
            Analysis...
          </h3>
        </div>
    );
  return (
      <div>
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              <CompanyScoreCard/>
              {
                data.result.map(r => {
                  return <div className={classes.keywordCard}>
                    <GridContainer>
                      <GridItem md={12} sm={12} className={classes.recsContainer}>
                        <h3 className={classes.keywordTitle}>#{r.position} Keyword: "{r.keyword}"</h3>
                        <div className={classNames(classes.searchContainer)}>
                          <h4 className={classes.searchingResult}>{r.keyword}</h4>
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
                  </div>;
                })
              }
            </div>
          </div>
        </div>
      </div>
  );
}
