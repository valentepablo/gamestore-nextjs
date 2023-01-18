import { db } from '../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';

import Head from 'next/head';
import CategoryPage from '@/components/category/CategoryPage';

const Category = ({ categoryGames, category }) => {
  return (
    <>
      <Head>
        <title>Gamestore</title>
        <meta name='description' content='Gamestore site developed with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CategoryPage data={categoryGames} category={category} />
    </>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const response = await getDocs(collection(db, 'categories'));
  const data = response.docs.map((doc) => doc.data());
  const paths = data.map((item) => ({
    params: { category: item.categoryName },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const response = await getDocs(collection(db, 'items'));
  const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const categoryGames = data.filter((game) => game.category === category);

  return {
    props: { categoryGames, category },
  };
};
