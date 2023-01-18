import GameCard from '@/components/utils/GameCard';
import SectionTitle from '@/components/utils/SectionTitle';

const HomePage = ({ games }) => {
  return (
    <>
      <SectionTitle text='All games' />

      <section className='grid gap-4 grid-cols-2'>
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
