import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { CartContextProvider } from '../components/context/CartContext';
import { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <CartContextProvider>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.asPath}
            initial='initialState'
            animate='animateState'
            exit='exitState'
            variants={{
              initialState: {},
              animateState: {
                opacity: 1,
                transition: { duration: 0.1 },
              },
              exitState: {
                opacity: 0,
                transition: { duration: 0.2 },
              },
            }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </CartContextProvider>
    </Layout>
  );
}
