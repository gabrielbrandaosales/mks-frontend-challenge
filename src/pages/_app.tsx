import { Layout } from '@/layouts';
import { store } from '@/store';
import { GlobalStyles } from '@/styles/globals';
import { defaultTheme } from '@/styles/theme/default';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
