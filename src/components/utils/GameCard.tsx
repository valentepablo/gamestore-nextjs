import Image from 'next/image';
import Link from 'next/link';

interface Props {
  pictureUrl: string;
  title: string;
  category: string;
}

const GameCard = ({ pictureUrl, title, category }: Props) => {
  const formattedTitle = title.toLowerCase().split(' ').join('-');
  return (
    <Link href={`/${category}/${formattedTitle}`}>
      <article className='overflow-hidden border-2 rounded-lg border-zinc-900'>
        <Image src={pictureUrl} width={500} height={500} alt={title} className='' />
        <div className='p-2'>
          <h2 className='text-sm'>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default GameCard;
