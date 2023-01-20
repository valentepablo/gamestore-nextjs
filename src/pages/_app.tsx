import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { CartContextProvider } from '../components/context/CartContext';
import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CartContextProvider>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </CartContextProvider>
    </Layout>
  );
}
