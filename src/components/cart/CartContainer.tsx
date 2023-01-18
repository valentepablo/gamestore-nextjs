import Image from 'next/image';

export type Product = {
  title: string;
  description: string;
  pictureUrl: string;
  price: number;
  stock: number;
  id: string;
};

interface Props {
  products: Product[];
}

const CartContainer = ({ products }: Props) => {
  return (
    <>
      <h2 className='mb-2 text-lg font-bold text-zinc-400'>Shopping Cart</h2>

      <div className='space-y-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='flex items-center gap-4 p-4 bg-[#111] bg-opacity-60 rounded-xl'>
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

            <button className='ml-auto text-xs font-semibold underline text-zinc-500'>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className='my-6 border-t border-zinc-900'></div>
      <h2 className='mb-2 text-lg font-bold text-zinc-400'>Payment Summary</h2>
      <div className='p-4 bg-[#111] bg-opacity-60 rounded-xl flex items-center justify-between'>
        <div>
          <p>Total price:</p>
          <p className='text-xl font-bold text-zinc-300'>
            $ {products.reduce((prev: any, current: any) => prev + current.price, 0)}
          </p>
        </div>
        <button className='px-12 py-4 text-sm font-extrabold text-[#111] bg-white rounded-lg'>
          Pay
        </button>
      </div>
    </>
  );
};

export default CartContainer;
