import { FaFistRaised, FaCrosshairs, FaFootballBall } from 'react-icons/fa';
import { RiSwordFill } from 'react-icons/ri';
import { GiCampfire } from 'react-icons/gi';
import { HiHome, HiShoppingCart } from 'react-icons/hi';

export const homeIcon = <HiHome />;
export const cartIcon = <HiShoppingCart />;

export const categoryIcons = {
  action: <FaFistRaised />,
  shooter: <FaCrosshairs />,
  sport: <FaFootballBall />,
  adventure: <RiSwordFill />,
  survival: <GiCampfire />,
};
