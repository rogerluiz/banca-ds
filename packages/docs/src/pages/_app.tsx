import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { globalStyles } from '@banca-ds/ui';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/layout';

config.autoAddCss = false;

library.add(fab, fas);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
