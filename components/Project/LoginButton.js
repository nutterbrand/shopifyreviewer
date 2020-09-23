import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from '../../assets/jss/nextjs-material-kit-pro/pages/productStyle';

const useStyles = makeStyles(productStyle);

const LoginButton = ({loginWithRedirect}) => {
  const classes = useStyles();

  return <Button variant="contained"
                 className={classes.loginBtn}
                 disableElevation
                 onClick={loginWithRedirect}>
    Log In To Download CSV
  </Button>;

};

export default LoginButton;