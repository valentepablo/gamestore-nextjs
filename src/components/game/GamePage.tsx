import Image from 'next/image';
// import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import SectionTitle from '../utils/SectionTitle';
import { useCartContext } from '../context/CartContext';
import { Game } from '../../interfaces/interfaces';

interface Props {
  game: Game;
}

const GamePage = ({ game }: Props) => {
  const { addItemToCart } = useCartContext();

  const handleAdd = (game: Game) => {
    addItemToCart(game);
  };

  return (
    <section>
      <SectionTitle text={game.title} />

      <Image
        src={game.pictureUrl}
        width={500}
        height={500}
        alt={game.title}
        priority
        className='border-2 border-[#111] rounded-lg'
      />

      <h2 className='mt-4 text-sm font-bold uppercase text-zinc-400'>Description</h2>
      <p className='mt-2 mb-20'>{game.description}</p>

      {/* <div className='flex items-center justify-between mt-4 bg-[#111] h-14 px-3 rounded-lg'>
        <p className='text-sm'>Quantity: 1</p>
        <div className='flex items-center gap-4'>
          <button className='p-2 bg-black rounded-lg'>
            <HiMinusSm />
          </button>
          <button className='p-2 bg-black rounded-lg'>
            <HiPlusSm />
          </button>
        </div>
      </div> */}
      <div className='fixed inset-x-0 bottom-0 flex items-center justify-between h-20 p-4 border-t-2 rounded-t-xl bg-zinc-100 border-zinc-900'>
        <div>
          <p className='text-xs font-semibold text-zinc-400'>{game.title}</p>
          <p className='text-2xl text-[#111] font-bold'>$ {game.price}</p>
        </div>
        <button
          onClick={() => handleAdd(game)}
          className='px-12 py-4 text-sm font-extrabold bg-black rounded-lg text-zinc-100'>
          Buy
        </button>
      </div>
    </section>
  );
};

export default GamePage;
