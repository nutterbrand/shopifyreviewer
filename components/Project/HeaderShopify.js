import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";

const useStyles = makeStyles(productStyle);

export const HeaderShopify = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h4>Made with &hearts; for Shopify</h4>
    </div>
  );
};
