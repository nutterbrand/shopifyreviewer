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

import fetch from "isomorphic-unfetch";
import useSwr from "swr";

import _ from "lodash";
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

  // var groupedData = _.mapValues(_.groupBy(data, "keyword"), (clist) =>
  //   clist.map((users) => _.omit(data, "keyword"))
  // );

  const groupedData = _.groupBy(data, "keyword");

  console.log(groupedData);

  const images = [
    {
      original: product3,
      thumbnail: product3,
    },
    {
      original: product4,
      thumbnail: product4,
    },
    {
      original: product1,
      thumbnail: product1,
    },
    {
      original: product2,
      thumbnail: product2,
    },
  ];
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
      {/* <Parallax
        image={require("assets/img/bg_blindsgalore.jpg")}
        filter="dark"
        className={classes.pageHeader}
      >
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}>
              <Button color="black" className={classes.floatRight}>
                <ShoppingCart /> 0 items
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          {Object.keys(groupedData).map((key) => {
            const item = groupedData[key];
            return <ProductBox data={item} />;
          })}
          <ProductBox />
          {/* <div className={classNames(classes.features, classes.textCenter)}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="2 Days Delivery"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={LocalShipping}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Refundable Policy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Popular Item"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Favorite}
                  iconColor="rose"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div> */}
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

// BlindsgalorePage.getInitialProps = async function () {
//   const res = await fetch("http://localhost:3000/api/users");
//   const data = await res.json();
//   return {
//     domain: "blindsgalore.com",
//   };

//   // fetch(`http://localhost:3000/api/shopping`)
//   //   .then(function (response) {
//   //     console.log(response.json());
//   //     return response.json();
//   //   })
//   //   .catch(function (err) {
//   //     console.log("error");
//   //     console.log(err);
//   //     return err.json();
//   //   });
// };
