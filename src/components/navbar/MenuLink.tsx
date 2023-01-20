import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { categoryIcons } from '../utils/categoryIcons';

interface Props {
  category: {
    categoryName: string;
    icon: string;
  };
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const variants = {
  open: { x: 0, transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.5 } },
  closed: { x: -250 },
};

const MenuLink = ({ category, setOpen }: Props) => {
  return (
    <motion.li whileTap={{ scale: 0.95 }} variants={variants}>
      <Link
        href={`/${category.categoryName}`}
        onClick={() => setOpen((open) => !open)}
        className='flex items-center gap-4 py-3'>
        <span className='p-2 text-xl bg-white rounded-lg text-[#111]'>
          {categoryIcons[`${category.categoryName}` as keyof typeof categoryIcons]}
        </span>
        <span className='text-sm font-bold tracking-wider uppercase'>{category.categoryName}</span>
      </Link>
    </motion.li>
  );
};

export default MenuLink;
