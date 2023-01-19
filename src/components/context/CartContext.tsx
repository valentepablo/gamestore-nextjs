import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Game } from '../../interfaces/interfaces';

interface Props {
  children?: ReactNode;
}

interface CartProps {
  cartProducts: Game[];
  setCartProducts: Dispatch<SetStateAction<Game[]>>;
  addItemToCart: (game: Game) => void;
}

const CartContext = createContext<CartProps | null>(null);

export const CartContextProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<Game[]>([]);

  const addItemToCart = (game: Game) => {
    setCartProducts([...cartProducts, game]);
  };

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext) as CartProps;
