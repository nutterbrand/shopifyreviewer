import React from 'react';
import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';
const useStyles = makeStyles(productStyle);

export const CompanyHeader = () => {
  const classes = useStyles();
  return (
      <GridContainer className={classes.companyHeader}>
        <GridItem md={12} sm={12}>
          <div className={classes.statDes}>
            <h3>Summary</h3>
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