import Image from 'next/image';
import { Game } from '../../interfaces/interfaces';
import { useCartContext } from '../context/CartContext';

interface Props {
  product: Game;
}

const CartProduct = ({ product }: Props) => {
  const { removeItemFromCart } = useCartContext();

  const handleRemove = (id: string) => {
    removeItemFromCart(id);
  };

  return (
    <div className='flex items-center gap-4 p-4 bg-[#111] bg-opacity-60 rounded-xl'>
      <Image
        src={product.pictureUrl}
        width={100}
        height={100}
        alt={product.title}
        className='object-cover w-16 rounded-lg aspect-square'
      />
      <div>
        <p className='text-zinc-400'>{product.title}</p>
        <p className='font-bold text-zinc-300'>${product.price}</p>
      </div>

      <button
        onClick={() => handleRemove(product.id)}
        className='ml-auto text-xs font-semibold underline text-zinc-500'>
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
