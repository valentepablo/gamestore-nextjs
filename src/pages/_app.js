import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import { CartContextProvider } from '@/components/context/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Layout>
  );
}
