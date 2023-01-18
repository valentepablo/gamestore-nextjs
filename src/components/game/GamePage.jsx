import Image from 'next/image';
import { HiChevronLeft, HiChevronRight, HiMinusSm, HiPlusSm } from 'react-icons/hi';
import SectionTitle from '../utils/SectionTitle';

const GamePage = ({ game }) => {
  console.log(game);
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
      <p className='mt-2'>{game.description}</p>

      <p className='mt-4 text-2xl text-zinc-500'>$ {game.price}</p>

      <div className='flex items-center justify-between mt-4 bg-[#111] h-14 px-3 rounded-lg'>
        <p className='text-sm'>Quantity: 1</p>
        <div className='flex items-center gap-4'>
          <button className='p-2 bg-black rounded-lg'>
            <HiMinusSm />
          </button>
          <button className='p-2 bg-black rounded-lg'>
            <HiPlusSm />
          </button>
        </div>
      </div>
      <button className='w-full mt-4 text-sm font-black text-[#111] uppercase bg-gray-200 rounded-lg h-14'>
        Buy now
      </button>
    </section>
  );
};

export default GamePage;
