import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import classNames from 'classnames';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import GoogleSearch from '../../assets/img/googleSearch.png';

const useStyles = makeStyles(productStyle);

export const ProductGroup = ({result, index}) => {
  const classes = useStyles();
  const description = result.body_html.replace(/(<([^>]+)>)/gi, '');
  if (result.keywords.length === 0) {
    return <></>;
  }

  return (
      <div className={classes.keywordCard}>
        <GridContainer className={classes.recsContainer}>
          <GridItem md={12} sm={12}>
            <div className={classNames(classes.searchContainer)}>
              <h4 className={classes.searchingResult}>{result.title}</h4>
              <img className={classes.googleSearch} src={GoogleSearch}/>
            </div>
            <GridContainer>
              <GridItem md={5} sm={5}>
                <img className={classes.productGroupImg} src={result.image}/>
              </GridItem>
              <GridItem md={7} sm={7}>
                <div className={classes.productSearchWords}>
                  {result.keywords.slice(0, 50)?.map((keyword, i) => (
                      <Chip
                          className={classes.keywordChip}
                          avatar={<Avatar>{i + 1}</Avatar>}
                          label={keyword.keyword}
                          clickable
                          color="primary"
                          onDelete={() => console.log('Deleting')}
                          deleteIcon={<DoneIcon/>}
                          variant="outlined"
                      />
                  ))}
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem md={12} sm={12}>
            <div className={classNames(classes.searchTermContainer)}>
              <h4>
                <a className={classes.productLink} href={classes.url}>
                  {result.title} | We Ship the Best Alcohol for the Best
                  Price. We offer a great selection with 3 day shipping.
                </a>
              </h4>
              <span className={classes.ad}>Ad</span>
              <a className={classes.companyLink} href={classes.link}>
                www.woodencork.com
              </a>
              <div className={classes.snippet}>
                <div>{description}</div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
  );
};
