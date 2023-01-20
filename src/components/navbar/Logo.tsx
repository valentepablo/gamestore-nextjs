import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/gamestore-logo.png' width={100} height={100} alt='Brand logo' priority />
    </Link>
  );
};

export default Logo;
