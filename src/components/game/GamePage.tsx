import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../utils/SectionTitle';
import { useCartContext } from '../context/CartContext';
import { Game } from '../../interfaces/interfaces';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  game: Game;
}

const GamePage = ({ game }: Props) => {
  const [touch, setTouch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { addItemToCart, cartProducts } = useCartContext();

  const handleAdd = (game: Game) => {
    setTouch(true);

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
    <AnimatePresence initial={false}>
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
          } transition duration-300 ease-in-out fixed inset-x-0 bottom-0 flex items-center justify-between h-20 p-4 border-t-2 rounded-t-xl bg-[#111] border-zinc-900`}>
          <div>
            <p className='text-xs font-semibold text-zinc-400'>{game.title}</p>
            <p className='text-2xl font-bold text-zinc-100'>$ {game.price}</p>
          </div>
          {cartProducts.some((el) => el.id === game.id) ? (
            <motion.span
              key='text'
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className='p-4 text-sm font-extrabold text-zinc-300'>
              Added to cart
            </motion.span>
          ) : (
            <motion.button
              key='button'
              onClick={() => handleAdd(game)}
              initial='false'
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5 },
              }}
              className='px-12 py-4 text-sm font-extrabold text-black rounded-lg bg-zinc-100'>
              <span>Buy</span>
            </motion.button>
          )}
        </div>
      </section>
    </AnimatePresence>
  );
};

export default GamePage;
