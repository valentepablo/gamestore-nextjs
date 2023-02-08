import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

interface Props {
  pictureUrl: string;
  title: string;
  category: string;
}

const GameCard = ({ pictureUrl, title, category }: Props) => {
  const formattedTitle = title.toLowerCase().split(' ').join('-');
  return (
    <Link href={`/${category}/${formattedTitle}`}>
      <article className='relative h-full overflow-hidden border-2 rounded-lg border-zinc-900'>
        <Image src={pictureUrl} width={500} height={500} alt={title} />
        <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black'>
          <h2 className='absolute text-sm font-semibold text-center text-white inset-x-2 bottom-2'>
            <Balancer>{title}</Balancer>
          </h2>
        </div>
      </article>
    </Link>
  );
};

export default GameCard;
