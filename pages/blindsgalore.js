import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import _ from 'underscore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {KeywordProducts} from './KeywordProducts';
import {CompanyScoreCard} from './CompanyScoreCard.js';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const [domainName, updateSearch] = useState('');
  const classes = useStyles();
  const {data, error} = useSwr('/api/get/shopping/blindsgalore.com', fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
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
  const groupedData = _.filter(_.groupBy(data, 'keyword'), (product) => product.length > 3);
  const productsData = _.keys(groupedData);
  const handleChange = event => updateSearch(event.target.value);
  const handleSubmit = () => {
    //TODO: Make Call to BE API
    updateSearch('');
  };
  return (
      <div>
        <div className={classes.companyPage}>
          <div className={classes.header}>
            <h4>Shopify Reviewer</h4>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField className={classes.domain} id="domain" placeholder='Enter Your Company Website'
                         variant="outlined" size="small" value={domainName} onChange={handleChange}/>
              <Button
                  className={classes.submit}
                  onClick={handleSubmit}>
                Submit
              </Button>
            </form>
            <Button
                variant="contained"
                className={classes.signUp}
                onClick={() => updateStatus(!isSignedUp)}>
              Sign Up
            </Button>
          </div>
          <div className={classes.section}>
            <div className={classes.container}>
              <CompanyScoreCard/>
              {productsData.map((key, keyIndex) => (
                  <KeywordProducts
                      key={key}
                      keyIndex={keyIndex}
                      products={groupedData[ key ]}
                      isSignedUp={isSignedUp}
                      updateStatus={updateStatus}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
