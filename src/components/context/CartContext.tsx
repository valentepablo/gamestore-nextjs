import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { Game } from '../../interfaces/interfaces';

interface Props {
  children?: ReactNode;
}

interface CartProps {
  cartProducts: Game[];
  setCartProducts: Dispatch<SetStateAction<Game[]>>;
  addItemToCart: (game: Game) => void;
  removeItemFromCart: (id: string) => void;
}

const CartContext = createContext<CartProps | null>(null);

export const CartContextProvider = ({ children }: Props) => {
  const [cartProducts, setCartProducts] = useState<Game[]>([]);

  const addItemToCart = (game: Game) => {
    setCartProducts([...cartProducts, game]);
  };

  const removeItemFromCart = (id: string) => {
    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext) as CartProps;
