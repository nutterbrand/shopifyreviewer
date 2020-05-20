import React from 'react';
import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

export const LoadingPlaceholder = () => {
  const classes = useStyles();
  return (
      <GridContainer className={classes.loadingContainer}>
        <GridItem md={12} sm={12}>
          <img className={classes.loadingPlaceholder}
              //TODO: Update placeholder img
               src='https://leerob.io/static/images/loading-placeholder-with-sass/facebook.png'/>
        </GridItem>
      </GridContainer>
  );
};