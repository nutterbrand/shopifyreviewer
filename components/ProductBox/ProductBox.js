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

import ProductElement from "../ProductElement/ProductElement";

const useStyles = makeStyles(productStyle);

// export default function Pagination(props) {
//   const { pages, color, className } = props;
//   const classes = useStyles();
//   const paginationClasses = classNames(classes.pagination, className);
//   return (
//     <ul className={paginationClasses}>
//       {pages.map((prop, key) => {
//         const paginationLink = classNames({
//           [classes.paginationLink]: true,
//           [classes[color]]: prop.active,
//           [classes.disabled]: prop.disabled,
//         });
//         return (
//           <li className={classes.paginationItem} key={key}>
//             {prop.onClick !== undefined ? (
//               <Button
//                 onClick={prop.onClick}
//                 className={paginationLink}
//                 disabled={prop.disabled}
//               >
//                 {prop.text}
//               </Button>
//             ) : (
//               <Button
//                 onClick={() => alert("you've clicked " + prop.text)}
//                 className={paginationLink}
//                 disabled={prop.disabled}
//               >
//                 {prop.text}
//               </Button>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

export default function ProductBox(props) {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();

  const { data } = props;
  // item.map((value, index) => {
  //   console.log(value);
  // });

  if (!data) return <div>Loading...</div>;
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(data[1].thumbnail);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <GridContainer>
      {/* {
        data.length > 0 && (
          data.map((value, index) => {
            console.log(value.title);
            if (index < 4) {
              // return <ProductElement element={value} />;
              return ( */}
      {data && (
        <div className={classes.relatedProducts}>
          <GridContainer>
            <GridItem sm={6} md={3}>
              <Card product>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={data[0].thumbnail} alt="cardProduct" />
                  </a>
                </CardHeader>
                <CardBody>
                  <h6
                    className={classNames(
                      classes.cardCategory,
                      classes.textRose
                    )}
                  >
                    {data[0].keyword}
                  </h6>
                  <h4 className={classes.cardTitle}>{data[0].source}</h4>
                  <div className={classes.cardDescription}>{data[0].title}</div>
                </CardBody>
                <CardFooter className={classes.justifyContentBetween}>
                  <div className={classes.price}>
                    <h4>${data[0].extracted_price}</h4>
                  </div>
                  <div className={classes.stats}>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon color="rose" simple>
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem sm={6} md={3}>
              <Card product>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={data[1].thumbnail} alt="cardProduct3" />
                  </a>
                </CardHeader>
                <CardBody>
                  <h6 className={classes.cardCategory}>Popular</h6>
                  <h4 className={classes.cardTitle}>{data[1].source}</h4>
                  <div className={classes.cardDescription}>{data[1].title}</div>
                </CardBody>
                <CardFooter className={classes.justifyContentBetween}>
                  <div className={classes.price}>
                    <h4>${data[1].extracted_price}</h4>
                  </div>
                  <div className={classes.stats}>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon link>
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem sm={6} md={3}>
              <Card product>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={data[2].thumbnail} alt="cardProduct4" />
                  </a>
                </CardHeader>
                <CardBody>
                  <h6 className={classes.cardCategory}>Popular</h6>
                  <h4 className={classes.cardTitle}>{data[0].source}</h4>
                  <div className={classes.cardDescription}>
                    Balenciaga{"'"}s black textured-leather wallet is finished
                    with the label{"'"}s iconic {"'"}Giant{"'"} studs. This is
                    where you can...
                  </div>
                </CardBody>
                <CardFooter className={classes.justifyContentBetween}>
                  <div className={classes.price}>
                    <h4>$590</h4>
                  </div>
                  <div className={classes.stats}>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon color="rose" simple>
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem sm={6} md={3}>
              <Card product>
                <CardHeader image>
                  <a href="#pablo">
                    <img src={cardProduct2} alt="cardProduct2" />
                  </a>
                </CardHeader>
                <CardBody>
                  <h6
                    className={classNames(
                      classes.cardCategory,
                      classes.textRose
                    )}
                  >
                    Trending
                  </h6>
                  <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                  <div className={classes.cardDescription}>
                    Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been crafted
                    in Italy from hard-wearing red textured-leather.
                  </div>
                </CardBody>
                <CardFooter className={classes.justifyContentBetween}>
                  <div className={classes.price}>
                    <h4>$1,459</h4>
                  </div>
                  <div className={classes.stats}>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon link>
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      )}
      {/* )
        //);
      }
      })} */}
    </GridContainer>
  );
}
