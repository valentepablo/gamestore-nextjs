import GameCard from '../utils/GameCard';
import SectionTitle from '../utils/SectionTitle';
import { Game } from '../../interfaces/interfaces';

interface Props {
  games: Game[];
}

const HomePage = ({ games }: Props) => {
  return (
    <>
      <SectionTitle text='All games' />

      <section className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
