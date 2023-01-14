import { db, firebaseConfig } from '../../firebase/clientApp';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getApps, initializeApp } from 'firebase/app';

import Head from 'next/head';
import HomePage from '../components/home/HomePage';

export default function Home({ games }) {
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
}

export const getStaticProps = async () => {
  const propsDB = !getApps().length ? db : getFirestore(initializeApp(firebaseConfig));
  const response = await getDocs(collection(db, 'items'));
  const games = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      games,
    },
  };
};
