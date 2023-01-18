import Navbar from '../navbar/Navbar';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className={nunito.className}>
      <Navbar />
      <main className='max-w-5xl p-4 mx-auto'>{children}</main>
    </div>
  );
};

export default Layout;
