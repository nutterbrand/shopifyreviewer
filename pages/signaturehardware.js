import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CompanyLogo from "assets/img/signature.png";
import GoogleSearch from "assets/img/googleSearch.png";
import fetch from "isomorphic-unfetch";
import useSwr from "swr";
import _ from "underscore";
import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";
import Badge from "../components/Badge/Badge";

const useStyles = makeStyles(productStyle);

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [isSignedUp, updateStatus] = useState(false);
  const classes = useStyles();
  const { data, error } = useSwr("/api/shopping", fetcher);
  if (error) return <h6 className={classes.center}>Failed to load data</h6>;
  if (!data)
    return (
      <h6 className={classes.center}>Loading Your Marketing Analysis...</h6>
    );
  const groupedData = _.filter(
    _.groupBy(data, "keyword"),
    (product) => product.length > 3
  );
  const productsData = _.keys(groupedData);
  const getRecommendations = (data, keyword) => {
    const prices = _(data).pluck("extracted_price");
    const ratings = _.compact(_(data).pluck("rating"));
    const num_ratings = ratings ? ratings.length + 1 : 0;
    const min_price = _.min(data, (elem) => elem.extracted_price);
    const avg_price = Math.floor(
      _.reduce(prices, (memo, num) => memo + num, 0) / prices.length || 1
    );
    const company_listing = _.where(data, { source: "Signature Hard..." });
    let recommendations = [];
    if (company_listing.length) {
      const your_company = company_listing[0];
      recommendations = [
        `Your ad was in position #${your_company.position} among your competition.`,
      ];
      if (min_price.source === your_company.source) {
        recommendations = [
          ...recommendations,
          `You have the lowest price item advertised for this keyword $${min_price.extracted_price}.`,
        ];
      } else {
        recommendations = [
          ...recommendations,
          `${min_price.source} has the lowest price item: $${min_price.extracted_price},
                  while you have a price of $${your_company.extracted_price}. The average price is $${avg_price}.`,
        ];
      }
      if (!your_company.rating) {
        recommendations = [
          ...recommendations,
          `Add ratings to your product in your Google Shopping feed.`,
        ];
        if (num_ratings > 1) {
          recommendations = [
            ...recommendations,
            `There are ${num_ratings} companies that have ratings for products that match this keyword.`,
          ];
        }
      }
    } else {
      recommendations = [
        ...recommendations,
        "Your products did not show up for this keyword.",
        `Add the following keyword to your product description: "${keyword}"`,
        `Advertise a product near the avg price: $${avg_price} dollars.`,
      ];
    }
    return recommendations;
  };

  return (
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
      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <GridContainer className={classes.companyHeader}>
            <GridItem md={8} sm={12}>
              <img className={classes.headerImg} src={CompanyLogo} />
              <h3>Shopping Score Overview:</h3>
              <div className={classes.stat}>
                <Badge className={classes.badge} color="success">
                  --
                </Badge>{" "}
                of the time your company shows up for the{" "}
                <b className={classes.dollar}>top keywords</b> in your industry.
              </div>
              <div className={classes.stat}>
                <Badge className={classes.badge} color="warning">
                  --
                </Badge>{" "}
                of the time your company had the{" "}
                <b className={classes.dollar}>lowest price</b> compared to your
                competition.
              </div>
              <div className={classes.stat}>
                <Badge className={classes.badge} color="danger">
                  --
                </Badge>{" "}
                of the time your company ratings on products for{" "}
                <b className={classes.dollar}>top keywords</b>.
              </div>
            </GridItem>
            <GridItem md={4} sm={12}>
              <h2>
                Score: <b className={classes.statNum}>--</b>
              </h2>
              <p>
                We did a full on analysis on over a 100 of the most popular
                searches that bring customers to your site.
              </p>
              <p>
                We found quite a few areas we you can improve your Google
                advertising to get more customers buying on your site.
              </p>
            </GridItem>
          </GridContainer>
          {productsData.map((key, keyIndex) => {
            const products = groupedData[key];
            const keyword = products[0].keyword;
            const recommendations = getRecommendations(products, keyword);
            let notTopTenAndNotSignedUp = keyIndex > 9 && !isSignedUp;
            const blurClass = { [classes.blur]: notTopTenAndNotSignedUp };
            return (
              <>
                <div className={classes.keywordCard}>
                  <GridContainer>
                    <GridItem md={12} sm={12} className={classes.recsContainer}>
                      <h3 className={classes.keywordTitle}>
                        Keyword: "{keyword}"
                      </h3>
                      {notTopTenAndNotSignedUp && (
                        <Button
                          size="large"
                          color="secondary"
                          className={classes.showButton}
                          variant="contained"
                          onClick={() => updateStatus(true)}
                        >
                          SIGN UP TO SEE RESULTS
                        </Button>
                      )}
                      <div className={classNames(classes.recs, blurClass)}>
                        <h4 className={classes.recTitle}>Recommendations:</h4>
                        {recommendations.map((rec, i) => {
                          return (
                            <div className={classes.rec} key={i}>
                              <Icon
                                className={classes.recIcon}
                                fontSize="small"
                              >
                                info
                              </Icon>
                              {rec}
                            </div>
                          );
                        })}
                      </div>
                      <div
                        className={classNames(
                          classes.searchContainer,
                          blurClass
                        )}
                      >
                        <h4 className={classes.searchingResult}>{keyword}</h4>
                        <img
                          className={classes.googleSearch}
                          src={GoogleSearch}
                        />
                      </div>
                    </GridItem>
                    <GridItem md={12} sm={12} className={classNames(blurClass)}>
                      <GridContainer className={classes.productRow}>
                        {products.map((product, index) => {
                          return (
                            <div
                              key={index}
                              className={classes.productContainer}
                            >
                              <img
                                src={product.thumbnail}
                                className={classNames(
                                  classes.productImg,
                                  blurClass
                                )}
                              />
                              <div>
                                <div className={classes.productKeyword}>
                                  <b>
                                    #{index + 1}: {product.keyword}
                                  </b>
                                </div>
                                <a
                                  className={classes.productLink}
                                  href={classes.productLink}
                                >
                                  {product.source}
                                </a>
                                <div className={classes.dollar}>
                                  ${product.extracted_price}
                                </div>
                                <div className={classes.description}>
                                  <Rating
                                    value={parseInt(product.rating)}
                                    precision={0.5}
                                    size="small"
                                    readOnly
                                  />
                                  <div>{product.title}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {products.length > 5 && (
                          <i className={classes.more}>
                            There's {products.length - 5} more products, scroll
                            right...
                          </i>
                        )}
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
