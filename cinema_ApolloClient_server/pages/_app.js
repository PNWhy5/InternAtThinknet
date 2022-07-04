import React, { useState, useCallback } from 'react'
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../src/redux/store'
import client from '../src/configs/initApollo'
import "antd/dist/antd.css";
import "./styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
)
}
export default MyApp