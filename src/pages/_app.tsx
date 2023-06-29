import Head from 'next/head';
import React from 'react';
import { wrapper } from 'store';

import 'styles/global.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Bakery</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(App);
