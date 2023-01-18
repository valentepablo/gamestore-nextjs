import GameCard from '../utils/GameCard';
import SectionTitle from '../utils/SectionTitle';

const HomePage = ({ games }) => {
  return (
    <>
      <SectionTitle text='All games' />

      <section className='grid grid-cols-2 gap-4'>
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
