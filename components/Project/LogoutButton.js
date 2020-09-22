import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

const LogoutButton = ({logout}) => {
  const classes = useStyles();
  let redirectUrl = 'https://shopifyreviewer.com';
  if (typeof window !== 'undefined') {
    redirectUrl = window.location.origin;
  }

  return <Button variant="contained"
                 className={classes.logoutBtn}
                 disableElevation
                 onClick={() => logout({returnTo: redirectUrl})}>
    Log Out
  </Button>;

};

export default LogoutButton;