import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import { homeIcon, categoryIcons, cartIcon } from '@/components/utils/categoryIcons';
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
              <li className='pt-6 pb-3 flex items-center gap-4'>
                <span className='text-zinc-400 text-lg border-2 rounded-lg p-2 border-zinc-900'>
                  {homeIcon}
                </span>
                <span className='tracking-wider text-sm uppercase font-bold'>Home</span>
              </li>
            </Link>

            {categories.map((category) => (
              <Link
                href={`/${category.categoryName}`}
                onClick={() => setOpen((open) => !open)}
                key={category.categoryName}>
                <li className='py-3 flex items-center gap-4'>
                  <span className='text-zinc-400 text-lg border-2 rounded-lg p-2 border-zinc-900'>
                    {categoryIcons[`${category.categoryName}`]}
                  </span>
                  <span className='tracking-wider text-sm uppercase font-bold'>
                    {category.categoryName}
                  </span>
                </li>
              </Link>
            ))}
          </ul>

          <div className='px-4 pt-4'>
            <Link
              href='/cart'
              className='flex items-center justify-center gap-2 border-2 border-zinc-900 py-4 rounded-lg w-full tracking-wider text-sm uppercase font-bold'>
              <span className='text-lg'>{cartIcon}</span>
              <span>cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
