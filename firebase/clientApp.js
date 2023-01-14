import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyAOGN45vCuaYbF1-KDJI-Tq3mPiUuo3-LU',
  authDomain: 'gamestore-ac7bc.firebaseapp.com',
  projectId: 'gamestore-ac7bc',
  storageBucket: 'gamestore-ac7bc.appspot.com',
  messagingSenderId: '22510284574',
  appId: '1:22510284574:web:c29742c087f8fd7f87630f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
