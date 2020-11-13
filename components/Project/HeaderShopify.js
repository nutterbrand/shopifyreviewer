import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';
import productStyle from 'assets/jss/nextjs-material-kit-pro/pages/productStyle.js';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {TwitterShareButton, TwitterIcon} from 'react-share';

const useStyles = makeStyles(productStyle);

export const HeaderShopify = ({isAuthenticated, loginWithRedirect, logout, user}) => {
  const classes = useStyles();
  return (
      <div className={classes.header}>
        <h4>Made with &hearts; for Shopify</h4>
        {user &&
        <div className={classes.user}><img className={classes.userImg} src={user.picture}/><h4>{user.name}</h4></div>}
        <Tooltip id='twitterShare' title="Share to Twitter" placement='left'>
          <TwitterShareButton
              className={classes.twitterShare}
              url='https://twitter.com/metricstory'
              title='Shopify Reviewer'
              via='Checkout #shopifyreviewer it’s helping me find good keywords to put in my Shopify product descriptions'
              hashtag={['#shopifyreviewer']}><TwitterIcon size={36} round={true}/></TwitterShareButton>
        </Tooltip>
        {isAuthenticated ? <LogoutButton logout={logout}/> : <LoginButton loginWithRedirect={loginWithRedirect}/>}
      </div>
  );
};
