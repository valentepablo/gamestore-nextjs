import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../utils/SectionTitle';
import { useCartContext } from '../context/CartContext';
import { Game } from '../../interfaces/interfaces';
import { motion } from 'framer-motion';

interface Props {
  game: Game;
}

const GamePage = ({ game }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const { addItemToCart } = useCartContext();

  const handleAdd = (game: Game) => {
    addItemToCart(game);
  };

  useEffect(() => {
    const onScroll = () => {
      if (scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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

      <div
        className={`${
          scrolled ? 'translate-y-0' : 'translate-y-full'
        } transition duration-300 ease-in-out fixed inset-x-0 bottom-0 flex items-center justify-between h-20 p-4 border-t-2 rounded-t-xl bg-zinc-100 border-zinc-900`}>
        <div>
          <p className='text-xs font-semibold text-zinc-400'>{game.title}</p>
          <p className='text-2xl text-[#111] font-bold'>$ {game.price}</p>
        </div>
        <motion.button
          whileFocus={{ y: 100, backgroundColor: '#111111' }}
          onClick={() => handleAdd(game)}
          className='px-12 py-4 text-sm font-extrabold bg-black rounded-lg text-zinc-100'>
          <p>Buy</p>
        </motion.button>
      </div>
    </section>
  );
};

export default GamePage;
