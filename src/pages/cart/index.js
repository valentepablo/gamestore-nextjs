import CartContainer from '../../components/cart/CartContainer';
import { useCartContext } from '@/components/context/CartContext';
import Head from 'next/head';

const Cart = () => {
  const { cartProducts } = useCartContext();
  return (
    <>
      <Head>
        <title>Gamestore - Shopping Cart</title>
        <meta name='description' content='Gamestore site developed with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CartContainer products={cartProducts} />
    </>
  );
};

export default Cart;
