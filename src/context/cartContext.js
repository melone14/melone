import { createContext, useState } from 'react';

import { testProducts } from 'data';

export const cartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(testProducts);
  const value = { products, setProducts };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
