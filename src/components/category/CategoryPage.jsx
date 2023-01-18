import GameCard from '@/components/utils/GameCard';
import SectionTitle from '@/components/utils/SectionTitle';

const CategoryPage = ({ data, category }) => {
  return (
    <>
      <SectionTitle text={category} />

      <section className='grid gap-4 grid-cols-2'>
        {data.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </section>
    </>
  );
};

export default CategoryPage;
