import React from 'react';
import App from 'next/app';
import {Auth0Provider} from '@auth0/auth0-react';
import 'assets/scss/nextjs-material-kit-pro.scss?v=1.0.0';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    let redirectUrl = 'https://shopifyreviewer.com';
    if (typeof window !== 'undefined') {
      redirectUrl = window.location.origin;
    }
    return (
        <Auth0Provider
            domain="keywordshere.auth0.com"
            clientId="JAPhwiupGDRBFmxud2NKLHqP4oX1nuDD"
            redirectUri={redirectUrl}
        >
          <Component {...pageProps} />
        </Auth0Provider>
    );
  }
}
