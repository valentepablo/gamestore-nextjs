import Image from 'next/image';

const HomePage = ({ games }) => {
  console.log(games);
  return (
    <>
      <div className='mb-4 bg-zinc-900 p-4 rounded-lg'>
        <h1 className='text-sm font-bold uppercase text-zinc-400'>All games</h1>
      </div>
      <article className='grid gap-4 grid-cols-2'>
        {games.map((game) => (
          <div key={game.id} className=' border-zinc-900 border-2 rounded-lg overflow-hidden'>
            <Image src={game.pictureUrl} width={500} height={500} alt={game.title} className='' />
            <div className='p-3'>
              <h2 className='text-sm'>{game.title}</h2>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default HomePage;
