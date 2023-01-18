import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { CartContextProvider } from '../components/context/CartContext';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Layout>
  );
}
