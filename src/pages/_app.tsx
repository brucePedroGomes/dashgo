import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SiderbarDrawerProvider } from '../contexts/SiderbarDrawerContext';
import { makeServer } from '../services/mirage';
import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
