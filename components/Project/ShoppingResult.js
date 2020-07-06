import React from "react";
import classNames from "classnames";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle";

const useStyles = makeStyles(productStyle);

export const ShoppingResult = (props) => {
  const { product } = props;
  const classes = useStyles();
  return (
    <div
      key={product.position}
      className={classNames(classes.productContainer)}
    >
      <img src={product.thumbnail} className={classNames(classes.productImg)} />
      <div>
        <div className={classes.productKeyword}>
          <b>
            #{product.position}: {product.keyword}
          </b>
        </div>
        <a className={classes.productLink}>{product.source}</a>
        <div className={classes.dollar}>${product.extracted_price}</div>
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
};
