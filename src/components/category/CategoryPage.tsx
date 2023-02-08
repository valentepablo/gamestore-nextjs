import { Game } from '../../interfaces/interfaces';
import GameCard from '../utils/GameCard';
import SectionTitle from '../utils/SectionTitle';

interface Props {
  data: Game[];
  category: string;
}

const CategoryPage = ({ data, category }: Props) => {
  return (
    <>
      <SectionTitle text={category} />

      <section className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {data.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default CategoryPage;
