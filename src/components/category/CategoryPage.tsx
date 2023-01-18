import GameCard from '../utils/GameCard';
import SectionTitle from '../utils/SectionTitle';

const CategoryPage = ({ data, category }) => {
  return (
    <>
      <SectionTitle text={category} />

      <section className='grid grid-cols-2 gap-4'>
        {data.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default CategoryPage;
