import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
