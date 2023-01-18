import { db } from '../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import Head from 'next/head';
import HomePage from '../components/home/HomePage';

type Game = {
  title: string;
  description: string;
  category: string;
  pictureUrl: string;
  price: number;
  stock: number;
};

interface Props {
  games: Game[];
}

const Home = ({ games }: Props) => {
  return (
    <>
      <Head>
        <title>Gamestore</title>
        <meta name='description' content='Gamestore site developed with Next.js' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage games={games} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await getDocs(collection(db, 'items'));
  const games = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      games,
    },
  };
};
