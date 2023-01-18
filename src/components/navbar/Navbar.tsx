import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import { homeIcon, categoryIcons, cartIcon } from '../utils/categoryIcons';
import { HiChevronRight } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const categoriesCollection = await getDocs(collection(db, 'categories'));
      setCategories(categoriesCollection.docs.map((doc) => doc.data()));
    };

    getData();
  }, []);
  return (
    <header>
      <nav className='flex justify-between p-4 border-b border-zinc-900'>
        <Link href='/'>
          <Image src='/gamestore-logo.png' width={100} height={100} alt='Brand logo' priority />
        </Link>
        <button
          className='flex items-center font-bold uppercase text-zinc-400'
          onClick={() => setOpen((open) => !open)}>
          <span className='text-sm '>Categories</span>
          <span className={`${open ? 'rotate-180' : 'rotate-0'} text-lg transition`}>
            <HiChevronRight />
          </span>
        </button>

        <div
          className={`${
            open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          } fixed inset-0 bg-black bg-opacity-50 transition duration-200 z-40`}
          onClick={() => setOpen((open) => !open)}></div>

        <div
          className={`${
            open ? 'translate-x-0' : 'translate-x-[-600px]'
          } fixed z-50 bg-black bottom-0 top-0 left-0 w-3/4 transition duration-500 ease-out border-r border-zinc-900`}>
          <div className='p-4 border-b border-zinc-900' onClick={() => setOpen((open) => !open)}>
            <Link href='/'>
              <Image src='/gamestore-logo.png' width={100} height={100} alt='Brand logo' priority />
            </Link>
          </div>

          <ul className='px-4'>
            <Link href='/' onClick={() => setOpen((open) => !open)}>
              <li className='flex items-center gap-4 pt-6 pb-3'>
                <span className='p-2 text-xl rounded-lg bg-white text-[#111]'>{homeIcon}</span>
                <span className='text-sm font-bold tracking-wider uppercase'>Home</span>
              </li>
            </Link>

            {categories.map((category) => (
              <Link
                href={`/${category.categoryName}`}
                onClick={() => setOpen((open) => !open)}
                key={category.categoryName}>
                <li className='flex items-center gap-4 py-3'>
                  <span className='p-2 text-xl bg-white rounded-lg text-[#111]'>
                    {categoryIcons[`${category.categoryName}`]}
                  </span>
                  <span className='text-sm font-bold tracking-wider uppercase'>
                    {category.categoryName}
                  </span>
                </li>
              </Link>
            ))}
          </ul>

          <div className='px-4 pt-4'>
            <Link
              onClick={() => setOpen((open) => !open)}
              href='/cart'
              className='flex items-center justify-center w-full gap-2 py-4 text-sm font-extrabold text-[#111] tracking-wider bg-white rounded-lg'>
              <span className='text-lg'>{cartIcon}</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
