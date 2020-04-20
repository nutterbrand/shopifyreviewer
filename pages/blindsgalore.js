/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

import imgHeader from "assets/img/blindsgalore.jpg";

import fetch from "isomorphic-unfetch";
import useSwr from "swr";

import _ from "underscore";
import ProductBox from "../components/ProductBox/ProductBox";

const useStyles = makeStyles(productStyle);

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlindsgalorePage(props) {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();

  const { data, error } = useSwr("/api/shopping", fetcher);

  if (error) return <div>Failed to load users</div>;
  // if (Object.keys(data).length === 0) return <div>Loading...</div>;
  if (!data) return <div>Loading...</div>;

  const groupedData = _.groupBy(data, "keyword");

  console.log(groupedData);

  return (
    <div className={classes.productPage}>
      <Header
        brand="Shopify Reviewer"
        links={<HeaderLinks dropdownHoverColor="white" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />
      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <GridContainer
            style={{
              backgroundColor: "white",
              marginTop: "20px",
              marginBottom: "50px",
            }}
            className={classes.productHeader}
          >
            <GridItem md={9} sm={9}>
              <img
                src={imgHeader}
                style={{ paddingTop: "25px", paddingLeft: "20px" }}
              ></img>
              <hr></hr>
              <h4
                style={{
                  paddingLeft: "22px",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Shopping Score Overview:{" "}
              </h4>
              <ul style={{ fontSize: "20px", fontWeight: "300" }}>
                <li style={{ paddingBottom: "10px" }}>
                  <b style={{ color: "red" }}>23%</b> of the time your company
                  shows up for the top keywords in your industry.{" "}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <b style={{ color: "red" }}>11%</b> of the time your company
                  had the lowest price compared to your competition.
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <b style={{ color: "red" }}>4%</b> of the time your company
                  ratings on products for top keywords.
                </li>
              </ul>
            </GridItem>
            <GridItem md={3} sm={3}>
              <h2>
                Score: <b style={{ color: "red" }}>12%</b>
              </h2>
              <hr></hr>
            </GridItem>
          </GridContainer>
          {Object.keys(groupedData) &&
            Object.keys(groupedData).map((key, i) => {
              const data = groupedData[key];
              const keyword = data[0].keyword;
              const prices = _(data).pluck("extracted_price");
              const ratings = _.compact(_(data).pluck("rating"));
              const num_ratings = ratings ? ratings.length + 1 : 0;
              const title = _(data).pluck("title");

              const min_price = _.min(data, function (elem) {
                return elem.extracted_price;
              });

              const max_price = _.max(data, function (elem) {
                return elem.extracted_price;
              });

              const avg_price = Math.floor(
                _.reduce(prices, (memo, num) => memo + num, 0) /
                  prices.length || 1
              );

              const company_listing = _.where(data, {
                source: "Blindsgalore.com",
              });

              let sentences = [];
              if (company_listing.length) {
                const your_company = company_listing[0];
                let sentence =
                  "Your ad was in position #" +
                  your_company.position +
                  " among your competition.";
                sentences.push(sentence);
                if (min_price.source === your_company.source) {
                  sentence =
                    "You have the lowest price item advertised for this keyword $" +
                    min_price.extracted_price +
                    ".";
                  sentences.push(sentence);
                } else {
                  sentence =
                    min_price.source +
                    " has the lowest price item: $" +
                    min_price.extracted_price +
                    " while you have a price of $" +
                    your_company.extracted_price +
                    ".";
                  " The average price is $" + avg_price + ".";
                  sentences.push(sentence);
                }
                if (!your_company.rating) {
                  sentence =
                    "Add ratings to your product in your Google Shopping feed.";
                  if (num_ratings > 1) {
                    sentence +=
                      "There are " +
                      num_ratings +
                      " companies that have ratings for products that match this keyword.";
                  }
                  sentences.push(sentence);
                }
              } else {
                let sentence =
                  "Your products did not show up for this keyword.";
                sentences.push(sentence);

                sentence =
                  "Add the following keyword to your product description: '" +
                  keyword +
                  "'.";
                sentences.push(sentence);

                sentence =
                  "Advertise a product near the avg price: $" +
                  avg_price +
                  " dollars.";
                sentences.push(sentence);
              }

              const summary = {
                company_listing,
                min_price,
                max_price,
                avg_price,
                num_ratings,
                sentences,
              };

              console.log(keyword + "summary: ");
              console.log(summary);

              return (
                <div className={classes.relatedProducts}>
                  {data.length > 3 && (
                    <div className={classes.productHeader} product>
                      <div className={classes.container}>
                        <h2
                          className={classes.keywordTitle}
                          style={{ paddingBottom: "10px", fontSize: "30px" }}
                        >
                          Keyword: "{keyword}"
                        </h2>
                        <GridContainer>
                          <GridItem md={12} sm={12}>
                            <p
                              style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                marginLeft: "20px",
                              }}
                            >
                              Suggestions:
                            </p>
                            <ul style={{ fontSize: "20px", fontWeight: "350" }}>
                              {sentences.map((val, index) => {
                                return (
                                  <li style={{ paddingTop: "10px" }}>{val}</li>
                                );
                              })}
                            </ul>
                          </GridItem>
                        </GridContainer>
                      </div>
                    </div>
                  )}
                  <GridContainer>
                    {data.length > 3 &&
                      data.map((value, index) => {
                        if (index > 3) {
                          return;
                        }
                        return (
                          <GridItem sm={6} md={3}>
                            <Card product>
                              <CardHeader image>
                                <a href="#">
                                  <img
                                    src={value.thumbnail}
                                    alt="cardProduct"
                                  />
                                </a>
                              </CardHeader>
                              <CardBody>
                                <h6
                                  className={classNames(
                                    classes.cardCategory,
                                    classes.textRose
                                  )}
                                >
                                  #{index + 1}: {value.keyword}
                                </h6>
                                <h4 className={classes.cardTitle}>
                                  {value.source}
                                </h4>
                                <h4 className={classes.cardTitle}>
                                  ${value.extracted_price}
                                </h4>

                                <div className={classes.cardDescription}>
                                  <Rating
                                    name="read-only"
                                    value={value.rating}
                                    precision={0.5}
                                    size="small"
                                    style={{ alignContent: "center" }}
                                    readOnly
                                  />
                                  <br></br>
                                  {value.title}
                                </div>
                              </CardBody>
                              <CardFooter
                                className={classes.justifyContentBetween}
                              >
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
      <Footer
        // theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a href="" target="_blank" className={classes.block}>
                    Shopify Reviewer
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="" target="_blank" className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="" target="_blank" className={classes.block}>
                    Terms and Conditions
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a href="" target="_blank" className={classes.aClasses}>
                ShopifyReviewer
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
