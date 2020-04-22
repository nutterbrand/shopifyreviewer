import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";

import imgHeader from "assets/img/blindsgalore.jpg";
import fetch from "isomorphic-unfetch";
import useSwr from "swr";

import _ from "underscore";
import ProductBox from "../components/ProductBox/ProductBox";

const useStyles = makeStyles(productStyle);

const fetcher = url => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const classes = useStyles();
  const { data, error } = useSwr("/api/shopping", fetcher);
  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  const groupedData = _.groupBy(data, "keyword");
  const productData = Object.keys(groupedData);

  const getSuggestions = (data, keyword) => {
    const prices = _(data).pluck('extracted_price');
    const ratings = _.compact(_(data).pluck('rating'));
    const num_ratings = ratings ? ratings.length + 1 : 0;
    const min_price = _.min(data, elem => elem.extracted_price);
    const max_price = _.max(data, elem => elem.extracted_price);
    const avg_price = Math.floor(
        _.reduce(prices, (memo, num) => memo + num, 0) /
        prices.length || 1,
    );
    const company_listing = _.where(data, {source: 'Blindsgalore.com'});
    let suggestions = [];
    if (company_listing.length) {
      const your_company = company_listing[ 0 ];
      suggestions = [`Your ad was in position #${your_company?.position} among your competition.`];

      if (min_price.source === your_company.source) {
        suggestions = [
          ...suggestions,
          `You have the lowest price item advertised for this keyword $${min_price.extracted_price}.`];
      } else {
        suggestions = [
          ...suggestions,
          `${min_price.source} has the lowest price item: $${min_price.extracted_price},
                  while you have a price of $${your_company.extracted_price}. The average price is $${avg_price}.`];
      }
      if (!your_company.rating) {
        suggestions = [
          ...suggestions,
          `Add ratings to your product in your Google Shopping feed.`];
        if (num_ratings > 1) {
          suggestions = [
            ...suggestions,
            `There are ${num_ratings} companies that have ratings for products that match this keyword.`];
        }
      }
    } else {
      suggestions = [
        ...suggestions,
        'Your products did not show up for this keyword.',
        `Add the following keyword to your product description: "${keyword}"`,
        `Advertise a product near the avg price: $${avg_price} dollars.`,
      ];
    }
    return suggestions;
  }

  return (
    <div className={classes.productPage}>
      <Header fixed color="white" brand="Shopify Reviewer"/>
      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <GridContainer className={classes.productHeader}>
            <GridItem md={9} sm={3}>
              <img src={imgHeader} />
              <h4>Shopping Score Overview:</h4>
              <ul>
                <li>
                  <b>23%</b> of the time your company
                  shows up for the top keywords in your industry.
                </li>
                <li>
                  <b>11%</b> of the time your company
                  had the lowest price compared to your competition.
                </li>
                <li>
                  <b>4%</b> of the time your company
                  ratings on products for top keywords.
                </li>
              </ul>
            </GridItem>
            <GridItem md={3} sm={1}>
              <h2>
                Score: <b>12%</b>
              </h2>
            </GridItem>
          </GridContainer>
          {productData &&
            productData.map((key, i) => {
              const data = groupedData[key];
              const keyword = data[0].keyword;
              const suggestions = getSuggestions(data, keyword);

              const moreThanRow = data.length > 3;
              return (
                <div className={classes.relatedProducts}>
                  {moreThanRow && (
                    <div className={classes.productHeader} product>
                      <div className={classes.container}>
                        <h2 className={classes.keywordTitle}>Keyword: "{keyword}"</h2>
                        <GridContainer>
                          <GridItem md={12} sm={12}>
                            <p> Suggestions: </p>
                            <ul>
                              {suggestions.map(suggestion => <li>{suggestion}</li>)}
                            </ul>
                          </GridItem>
                        </GridContainer>
                      </div>
                    </div>
                  )}
                  <GridContainer>
                    {moreThanRow &&
                      data.map( (value, index) => {
                        return (
                          <GridItem sm={6} md={3}>
                            <Card product>
                              <CardHeader image>
                                <img src={value.thumbnail} alt="cardProduct"/>
                              </CardHeader>
                              <CardBody>
                                <h6 className={classNames(classes.cardCategory, classes.textRose)}>
                                  #{index + 1}: {value.keyword}
                                </h6>
                                <h4 className={classes.cardTitle}>{value.source}</h4>
                                <h4 className={classes.cardTitle}>${value.extracted_price}</h4>

                                <div className={classes.cardDescription}>
                                  <Rating
                                    name="read-only"
                                    value={value.rating}
                                    precision={0.5}
                                    size="small"
                                    readOnly
                                  />
                                  <span>{value.title}</span>
                                </div>
                              </CardBody>
                              <CardFooter className={classes.justifyContentBetween}>
                                <div></div>
                              </CardFooter>
                            </Card>
                          </GridItem>
                        );
                      })}
                  </GridContainer>
                </div>
              );
            })}
          <ProductBox />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
