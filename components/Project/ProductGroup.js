import React from "react";
import _ from "underscore";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";
import classNames from "classnames";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import GoogleSearch from "../../assets/img/googleSearch.png";

const useStyles = makeStyles(productStyle);

export const ProductGroup = ({ result, index }) => {
  const classes = useStyles();

  const description = result.body_html.replace(/(<([^>]+)>)/gi, "");

  if (result.keywords.length === 0) {
    return <></>;
  }

  return (
    <div>
      <GridContainer className={classes.recsContainer}>
        <GridItem md={12} sm={12}>
          <h3 className={classes.keywordTitle}>Product: "{result.title}"</h3>
          <GridContainer>
            <GridItem md={6} sm={6}>
              <div className={classNames(classes.recs)}>
                <h4 className={classes.recTitle}>Recommendations:</h4>
                <img
                  style={{ width: "500px", height: "500px" }}
                  src={result.image}
                />
              </div>
            </GridItem>
            <GridItem md={6} sm={6}>
              <div className={classNames(classes.searchContainer)}>
                <h4 className={classes.searchingResult}>{result.title}</h4>
                <img className={classes.googleSearch} src={GoogleSearch} />
              </div>
              <div className={classes.relatedSearchRow}>
                {result.keywords.slice(0, 50)?.map((keyword, i) => (
                  <a className={classes.relatedSearchTerm} href="#">
                    {keyword.keyword}
                  </a>
                ))}
              </div>
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
        </GridItem>
      </GridContainer>
    </div>
  );
};
