import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(productStyle);

export const DisplayProduct = ({product}) => {
  const classes = useStyles();
  return (
      <GridContainer className={classes.displaySection}>
        <GridItem md={12} sm={12}>
          <h3 className={classes.displayTitle}>{product.title}</h3>
          <div className={classes.displayPrice}>${product.variants[ 0 ].price}</div>
          <img className={classes.displayImg} src={product.images[ 0 ].src}/>
          <div className={classes.displayDesContainer}>{ReactHtmlParser(product.body_html)}</div>
          <div className={classes.chipContainer}>
            {product.tags.map(tag => <Chip className={classes.adKeywordChip} key={tag} label={tag}/>)}
          </div>
        </GridItem>
      </GridContainer>
  );
};
