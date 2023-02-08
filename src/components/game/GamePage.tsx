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
  const [isIdle, setIsIdle] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { addItemToCart, cartProducts } = useCartContext();

  const handleAdd = (game: Game) => {
    setIsIdle(false);
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
      <div className='grid-cols-3 lg:grid'>
        <div className='col-span-2 lg:mr-8'>
          <Image
            src={game.pictureUrl}
            width={500}
            height={500}
            alt={game.title}
            priority
            className='w-full border-2 border-[#111] rounded-lg'
          />
        </div>
        <div className='col-span-1 mb-20 lg:mb-0'>
          <Subtitle text='category' />
          <TextInfo text={game.category} />

          <Subtitle text='description' />
          <TextInfo text={game.description} />

          <div className='hidden lg:block'>
            <Subtitle text='price' />
            <TextInfo text={`$ ${game.price}`} />

            <AnimatePresence mode='wait'>
              {cartProducts.some((el) => el.id === game.id) ? (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  className='p-4 text-sm font-extrabold lg:block lg:text-center text-zinc-300'>
                  Added to cart
                </motion.span>
              ) : (
                <motion.button
                  key='button'
                  onClick={() => handleAdd(game)}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }}
                  className='px-12 py-4 text-sm font-extrabold text-black rounded-lg lg:w-full bg-zinc-100'>
                  <span>Buy</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div
        className={`${
          scrolled ? 'translate-y-0' : 'translate-y-full'
        } transition duration-300 ease-in-out fixed inset-x-0 bottom-0 flex lg:hidden items-center justify-between h-20 p-4 border-t-2 rounded-t-xl bg-[#111] border-zinc-900`}>
        <div>
          <p className='text-xs font-semibold text-zinc-400'>{game.title}</p>
          <p className='text-2xl font-bold text-zinc-100'>$ {game.price}</p>
        </div>

        <AnimatePresence mode='wait'>
          {cartProducts.some((el) => el.id === game.id) ? (
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              className='p-4 text-sm font-extrabold text-zinc-300'>
              Added to cart
            </motion.span>
          ) : (
            <motion.button
              key='button'
              onClick={() => handleAdd(game)}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className='px-12 py-4 text-sm font-extrabold text-black rounded-lg bg-zinc-100'>
              <span>Buy</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GamePage;

const Subtitle = ({ text }: { text: string }) => {
  return <h2 className='mt-4 text-lg font-bold uppercase lg:mt-0 text-zinc-400'>{text}</h2>;
};

const TextInfo = ({ text }: { text: string | number }) => {
  return <p className='mb-4 lg:mb-8 first-letter:capitalize'>{text}</p>;
};
