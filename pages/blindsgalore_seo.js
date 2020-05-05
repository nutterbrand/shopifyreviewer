import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from 'components/Header/Header.js';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import _ from 'underscore';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {KeywordProducts} from './KeywordProducts';
import {CompanyScoreCard} from './CompanyScoreCard';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const {data, error} = useSwr('/api/get/search/1', fetcher);
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
  const groupedData = _.filter(
      _.groupBy(data, 'keyword'),
      (product) => product.length > 3,
  );
  const productsData = _.keys(groupedData);

  if (data) {
    console.log(data);
  }

  return (
      <div>
        <div className={classes.companyPage}>
          <Header
              fixed
              color="white"
              brand="Shopify Reviewer"
              links={
                <Button
                    color={isSignedUp ? 'primary' : 'secondary'}
                    variant="contained"
                    className={classes.signUp}
                    onClick={() => updateStatus(!isSignedUp)}
                >
                  {!isSignedUp ? 'Sign Up' : 'Account'}
                </Button>
              }
          />
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