interface Props {
  text: string;
}

const SectionTitle = ({ text }: Props) => {
  return (
    <div className='mb-4 bg-[#111] p-4 rounded-lg'>
      <h1 className='text-sm font-bold uppercase text-zinc-400'>{text}</h1>
    </div>
  );
};

export default SectionTitle;
