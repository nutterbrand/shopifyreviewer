import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const useStyles = makeStyles(productStyle);

export const HeaderShopify = ({isAuthenticated, loginWithRedirect, logout, user}) => {
  const classes = useStyles();
  return (
      <div className={classes.header}>
        <h4>Made with &hearts; for Shopify</h4>
        {user &&
        <div className={classes.user}><img className={classes.userImg} src={user.picture}/><h4>{user.name}</h4></div>}
        {isAuthenticated ? <LogoutButton logout={logout}/> : <LoginButton loginWithRedirect={loginWithRedirect}/>}
      </div>
  );
};
