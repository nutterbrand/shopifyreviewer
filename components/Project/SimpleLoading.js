import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import productStyle from "assets/jss/nextjs-material-kit-pro/pages/productStyle.js";
import CompanyLogo from "../../assets/img/blindsgalore.jpg";

const useStyles = makeStyles(productStyle);

export const SimpleLoading = () => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <img className={classes.loadImg} src={CompanyLogo} />
      <h3 className={classes.loadText}>
        Please Wait For a Moment While We Are Loading Your Marketing Analysis...
      </h3>
    </div>
  );
};
