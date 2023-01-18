import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { Product } from '../cart/CartContainer';

interface CartProps {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<never[]>>;
}

const ContextDefault: CartProps = {
  cartProducts: [],
  setCartProducts: () => {},
};

const CartContext = createContext(ContextDefault);

export const CartContextProvider = ({ children }: any) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
