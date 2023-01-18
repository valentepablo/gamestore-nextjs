import { db } from '../../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import GamePage from '../../../components/game/GamePage';

const Game = ({ game }) => {
  return (
    <>
      <Head>
        <title>Gamestore</title>
        <meta name='description' content='Gamestore site developed with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GamePage game={game} />
    </>
  );
};

export default Game;

export const getStaticPaths = async () => {
  const response = await getDocs(collection(db, 'items'));
  const data = response.docs.map((doc) => doc.data());
  const paths = data.map((item) => {
    return {
      params: { category: item.category, id: item.title.toLowerCase().split(' ').join('-') },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await getDocs(collection(db, 'items'));
  const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const game = data.find((game) => game.title.toLowerCase().split(' ').join('-') === params.id);
  return {
    props: {
      game,
    },
  };
};
