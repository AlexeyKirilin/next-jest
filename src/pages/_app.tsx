import Head from 'next/head';
import React from 'react';

import 'styles/global.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Bakery</title>
      <meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        data-n-head="ssr"
        data-hid="description"
        name="description"
        content="We create cRPGs"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
