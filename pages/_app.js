import React from 'react';
import App from 'next/app';
import 'assets/scss/nextjs-material-kit-pro.scss?v=1.0.0';

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
    );
  }
}
