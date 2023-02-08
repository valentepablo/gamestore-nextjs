import Navbar from '../navbar/Navbar';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={nunito.className}>
      <Navbar />
      <main className='max-w-5xl p-4 mx-auto lg:py-8'>{children}</main>
    </div>
  );
};

export default Layout;
