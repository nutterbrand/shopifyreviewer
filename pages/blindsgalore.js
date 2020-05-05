import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import _ from 'underscore';
import Button from '@material-ui/core/Button';
import Header from 'components/Header/Header.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CompanyLogo from 'assets/img/blindsgalore.jpg';
import fetch from 'isomorphic-unfetch';
import useSwr from 'swr';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import {KeywordProducts} from './KeywordProducts';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(productStyle);
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const { data, error } = useSwr("/api/get/shopping/blindsgalore.com", fetcher);
  if (error) return <span className={classes.center}>Failed to load data</span>;
  if (!data)
    return (
      <div className={classes.center}>
        <img className={classes.loadImg} src={CompanyLogo} />
        <h3 className={classes.loadText}>
          Please Wait For a Moment While We Are Loading Your Marketing
          Analysis...
        </h3>
      </div>
    );
  const groupedData = _.filter(
    _.groupBy(data, "keyword"),
    (product) => product.length > 3
  );
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
              color={isSignedUp ? "primary" : "secondary"}
              variant="contained"
              className={classes.signUp}
              onClick={() => updateStatus(!isSignedUp)}
            >
              {!isSignedUp ? "Sign Up" : "Account"}
            </Button>
          }
        />
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer className={classes.companyHeader}>
              <GridItem md={12} sm={12}>
                <div className={classes.scoreHeader}>
                  <img className={classes.headerImg} src={CompanyLogo} />
                  <div className={classes.statNumContainer}>Score: 22%</div>
                </div>
                <div className={classes.statContainer}>
                  <div className={classes.stat}>
                    <CircularProgressbarWithChildren
                        value={33} strokeWidth={5}
                        className={classes.statCircle}
                        styles={buildStyles({
                          rotation: 0.5,
                          strokeLinecap: 'butt',
                          textSize: '24px',
                          pathTransitionDuration: 0.5,
                          pathColor: '#4bb051',
                          textColor: '#4bb051',
                          trailColor: '#eeeeee',
                        })}>
                      <img className={classes.statImg}
                           src="https://henrymetricstory.s3-us-west-1.amazonaws.com/keyword.svg"/>
                    </CircularProgressbarWithChildren>
                    <span className={classNames(classes.green, classes.statScore)}>33%</span>
                    <h4>of the time your company shows up for the <span className={classes.green}>top keywords</span> in
                      your industry.
                    </h4>
                  </div>
                  <div className={classes.stat}>
                    <CircularProgressbarWithChildren
                        value={16} strokeWidth={5}
                        className={classes.statCircle}
                        styles={buildStyles({
                          rotation: 0.5,
                          strokeLinecap: 'butt',
                          textSize: '24px',
                          pathTransitionDuration: 0.5,
                          pathColor: '#4842F5',
                          textColor: '#4842F5',
                          trailColor: '#eeeeee',
                        })}>
                      <img className={classes.statImg}
                           src="https://henrymetricstory.s3-us-west-1.amazonaws.com/price.svg"/>
                    </CircularProgressbarWithChildren>
                    <span className={classNames(classes.blue, classes.statScore)}>16%</span>
                    <h4>of the time your company had the <span className={classes.blue}>lowest price</span> compared
                      to your competition.
                    </h4>
                  </div>
                  <div className={classes.stat}>
                    <CircularProgressbarWithChildren
                        value={8} strokeWidth={5}
                        className={classes.statCircle}
                        styles={buildStyles({
                          rotation: 0.5,
                          strokeLinecap: 'butt',
                          textSize: '24px',
                          pathTransitionDuration: 0.5,
                          pathColor: '#f65a4e',
                          textColor: '#f65a4e',
                          trailColor: '#eeeeee',
                        })}>
                      <img className={classes.statImg}
                           src="https://henrymetricstory.s3-us-west-1.amazonaws.com/ratings.svg"/>
                    </CircularProgressbarWithChildren>
                    <span className={classNames(classes.red, classes.statScore)}>8%</span>
                    <h4>of the time your company had <span className={classes.red}>ratings</span> on products for top
                      keywords.
                    </h4>
                  </div>
                </div>
                <div className={classes.statDes}>
                  <h2><b>Summary</b></h2>
                  <h4><b>We did a full on analysis on over a 100 of the most
                    popular searches that bring customers to your site.</b>
                  </h4>
                  <h4><b>We found quite a few areas we you can improve your
                    Google advertising to get more customers buying on
                    your site.</b>
                  </h4>
                </div>
              </GridItem>
            </GridContainer>
            {productsData.map((key, keyIndex) => (
              <KeywordProducts
                key={key}
                keyIndex={keyIndex}
                products={groupedData[key]}
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
