import { Dispatch, SetStateAction } from 'react';
import { HiChevronRight } from 'react-icons/hi';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuButton = ({ open, setOpen }: Props) => {
  return (
    <button
      className='flex items-center font-bold uppercase text-zinc-400'
      onClick={() => setOpen((open) => !open)}>
      <span className='text-sm '>Menu</span>
      <span className={`${open ? 'rotate-180' : 'rotate-0'} text-lg transition`}>
        <HiChevronRight />
      </span>
    </button>
  );
};

export default MenuButton;
