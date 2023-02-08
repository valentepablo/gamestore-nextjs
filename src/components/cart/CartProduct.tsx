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
    product && (
      <div className='flex items-center gap-4 p-4 bg-[#111] rounded-xl'>
        <Image
          src={product.pictureUrl}
          width={100}
          height={100}
          alt={product.title}
          className='object-cover w-16 rounded-lg lg:w-32 aspect-square'
        />
        <div>
          <p className='text-zinc-400 lg:text-xl'>{product.title}</p>
          <p className='font-bold text-zinc-300 lg:text-xl'>${product.price}</p>
        </div>

        <button
          onClick={() => handleRemove(product.id!)}
          className='ml-auto text-xs font-bold underline transition hover:text-red-500 lg:text-sm text-zinc-500'>
          Remove
        </button>
      </div>
    )
  );
};

export default CartProduct;
