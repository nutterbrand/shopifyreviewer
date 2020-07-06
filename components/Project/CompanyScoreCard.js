import React from 'react';
import GridItem from '../components/Grid/GridItem';
import CompanyLogo from '../assets/img/blindsgalore.jpg';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import classNames from 'classnames';
import GridContainer from '../components/Grid/GridContainer';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';
const useStyles = makeStyles(productStyle);

export const CompanyScoreCard = () => {
  const classes = useStyles();
  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.scoreHeader}>
            <img className={classes.headerImg} src={CompanyLogo}/>
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
            <h2>Summary</h2>
            <h4>We did a full on analysis on over a 100 of the most
              popular searches that bring customers to your site.
            </h4>
            <h4>We found quite a few areas we you can improve your
              Google advertising to get more customers buying on
              your site.
            </h4>
          </div>
        </GridItem>
      </GridContainer>
  );
}