import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../../firebase/clientApp';
import { collection, CollectionReference, getDocs } from 'firebase/firestore';
import { homeIcon, cartIcon } from '../utils/categoryIcons';
import MenuButton from './MenuButton';
import Logo from './Logo';
import MenuLink from './MenuLink';
import { motion } from 'framer-motion';

type CategoryItem = {
  categoryName: string;
  icon: string;
};

type CategoryList = CategoryItem[];

const variants = {
  open: { x: 0, transition: { duration: 0.2, staggerChildren: 0.05, delayChildren: 0.2 } },
  closed: { x: -250 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryList>();

  useEffect(() => {
    const getData = async () => {
      const categoriesCollection = await getDocs(
        collection(db, 'categories') as CollectionReference<CategoryItem>
      );
      const allCategories = categoriesCollection.docs.map((doc) => doc.data());
      setCategories(allCategories);
    };

    getData();
  }, []);
  return (
    <header>
      <nav className='flex justify-between p-4 border-b border-zinc-900'>
        <Logo />
        {/* DESKTOP MENU */}
        <ul className='items-center hidden gap-8 lg:flex'>
          {categories?.map((category) => (
            <Link
              key={category.categoryName}
              href={`/${category.categoryName}`}
              className='text-sm font-bold tracking-wider uppercase transition hover:text-white'>
              {category.categoryName}
            </Link>
          ))}
        </ul>
        <Link href='/cart'>
          <button className='hidden lg:flex items-center justify-center gap-2 py-4 px-8 text-sm font-extrabold text-[#111] tracking-wider bg-white hover:bg-zinc-200 transition rounded-lg'>
            <span className='text-lg'>{cartIcon}</span>
            <span>Cart</span>
          </button>
        </Link>
        {/* DESKTOP MENU */}
        <MenuButton open={open} setOpen={setOpen} />
        <div
          className={`${
            open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          } fixed inset-0 bg-black bg-opacity-50 transition duration-200 z-40`}
          onClick={() => setOpen((open) => !open)}></div>
        {/* MOBILE MENU */}
        <div
          className={`${
            open ? 'translate-x-0' : 'translate-x-[-100%]'
          } fixed z-50 bg-black bottom-0 top-0 left-0 w-3/4 transition duration-500 ease-out border-r border-zinc-900`}>
          <div className='p-4 border-b border-zinc-900' onClick={() => setOpen((open) => !open)}>
            <Logo />
          </div>

          <motion.ul
            // initial={`${!open && 'closed'}`}
            // animate={`${open && 'open'}`}
            initial={false}
            animate={open ? 'open' : 'closed'}
            variants={variants}
            className='px-4'>
            <motion.li whileTap={{ scale: 0.95 }}>
              <Link
                href='/'
                onClick={() => setOpen((open) => !open)}
                className='flex items-center gap-4 pt-6 pb-3'>
                <span className='p-2 text-xl rounded-lg bg-white text-[#111]'>{homeIcon}</span>
                <span className='text-sm font-bold tracking-wider uppercase'>Home</span>
              </Link>
            </motion.li>

            {categories?.map((category) => (
              <MenuLink category={category} setOpen={setOpen} key={category.categoryName} />
            ))}
          </motion.ul>

          <div className='px-4 pt-4'>
            <Link href='/cart'>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen((open) => !open)}
                className='flex items-center justify-center w-full gap-2 py-4 text-sm font-extrabold text-[#111] tracking-wider bg-white rounded-lg'>
                <span className='text-lg'>{cartIcon}</span>
                <span>Cart</span>
              </motion.button>
            </Link>
          </div>
        </div>
        {/* MOBILE MENU */}
      </nav>
    </header>
  );
};

export default Navbar;
