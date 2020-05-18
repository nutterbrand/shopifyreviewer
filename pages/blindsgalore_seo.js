import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from 'components/Header/Header.js';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {KeywordSearchTerm} from './KeywordSearchTerm';
import {CompanyScoreCard} from './CompanyScoreCard.js';
import 'react-circular-progressbar/dist/styles.css';
import _ from 'underscore';
import {SimpleLoading} from './SimpleLoading';
const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const {data, error} = useSwr('/api/get/search/1', fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
  if (!data) return <SimpleLoading/>;
  const groupedData = _.filter(_.groupBy(data, 'keyword'))
  const productsData = _.keys(groupedData);
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
                  <KeywordSearchTerm
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
