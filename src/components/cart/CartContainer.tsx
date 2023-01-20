import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Game } from '../../interfaces/interfaces';
import { useCartContext } from '../context/CartContext';
import CartProduct from './CartProduct';
// @ts-ignore
import useMeasure from 'react-use-measure';

interface Props {
  products: Game[];
}

const CartContainer = ({ products }: Props) => {
  const { cartProducts } = useCartContext();

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <ResizablePanel>
        <h2 className='mb-2 text-lg font-bold'>Shopping Cart</h2>
        <div>
          {cartProducts.length > 0 ? (
            <div className='space-y-4'>
              {products.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <>
              <p className='text-sm text-zinc-500'>
                You don&apos;t have any{' '}
                <Link href='/' className='font-semibold text-zinc-400'>
                  products
                </Link>{' '}
                in the cart yet.
              </p>
            </>
          )}
        </div>
      </ResizablePanel>

      <div className='my-6 border-t border-zinc-900'></div>
      <div>
        <h2 className='mb-2 text-lg font-bold'>Payment Summary</h2>
        <div className='p-4 bg-[#111] bg-opacity-60 rounded-xl flex items-center justify-between'>
          <div>
            <p>Total price:</p>
            <p className='text-xl font-bold text-zinc-300'>
              $ {products.reduce((prev: any, current: any) => prev + current.price, 0)}
            </p>
          </div>
          <button
            disabled={cartProducts.length > 0 ? false : true}
            className='disabled:bg-zinc-600 transition duration-200 px-12 py-4 text-sm font-extrabold text-[#111] bg-white rounded-lg'>
            Pay
          </button>
        </div>
      </div>
    </MotionConfig>
  );
};

export default CartContainer;

const ResizablePanel = ({ children }: any) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={{ height }} className='relative'>
      <AnimatePresence initial={false}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div ref={ref} className={`${height ? 'absolute' : 'relative'} w-full`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
