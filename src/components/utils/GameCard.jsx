import Image from 'next/image';
import Link from 'next/link';

const GameCard = ({ pictureUrl, title, category }) => {
  const formattedTitle = title.toLowerCase().split(' ').join('-');
  return (
    <Link href={`/${category}/${formattedTitle}`}>
      <article className='border-zinc-900 border-2 rounded-lg overflow-hidden'>
        <Image src={pictureUrl} width={500} height={500} alt={title} className='' />
        <div className='p-2'>
          <h2 className='text-sm'>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default GameCard;
