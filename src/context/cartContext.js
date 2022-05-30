import { createContext, useState } from 'react';

import { testProducts } from 'data';

const addCartProduct = (cartItems, productToAdd) => {
  const exisitngCartItem = cartItems.find(
    (cartItem) => cartItem.gid === productToAdd.gid
  );

  if (exisitngCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.gid === productToAdd.gid
        ? { ...cartItem, quantity: cartItem.quantity++ }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const cartContext = createContext({
  cartProducts: [],
  addProductToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(testProducts);

  const addProductToCart = (productToAdd) => {
    setCartProducts(addCartProduct(cartProducts, productToAdd));
  };

  const value = { cartProducts, setCartProducts, addProductToCart };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
