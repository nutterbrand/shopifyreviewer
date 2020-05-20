import React from 'react';
import {useRouter} from 'next/router';
import _ from 'underscore';
import {makeStyles} from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {CompanyScoreCard} from './CompanyScoreCard.js';
import {Header} from './Header';
import {SimpleLoading} from './SimpleLoading';
import {KeywordGroup} from './KeywordGroup';
import {LoadingPlaceholder} from './LoadingPlaceholder';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const classes = useStyles();
  const router = useRouter();
  const showAll = _.has(router.query, 'show');
  const {data, error} = useSwr('https://evening-retreat-22032.herokuapp.com/report/blindsgalore.com/', fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
  if (!data) return <SimpleLoading/>;
  console.log(data.result);
  return (
      <>
        <Header/>
        <div className={classes.companyPage}>
          <div className={classes.section}>
            <div className={classes.container}>
              <CompanyScoreCard/>
              <LoadingPlaceholder/>
              {
                data.result.map(result => <KeywordGroup result={result} key={result.keyword} showAll={showAll}/>)
              }
            </div>
          </div>
        </div>
      </>
  );
}
