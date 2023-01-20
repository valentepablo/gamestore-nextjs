import { motion } from 'framer-motion';

interface Props {
  text: string;
}

const SectionTitle = ({ text }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='mb-4 bg-[#111] p-4 rounded-lg'>
        <h1 className='text-sm font-bold uppercase text-zinc-400'>{text}</h1>
      </motion.div>
    </>
  );
};

export default SectionTitle;
