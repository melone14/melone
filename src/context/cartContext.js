import { createContext, useState } from 'react';

import { testProducts } from 'data';

const addCartProduct = (cartItems, productToAdd) => {
  const exisitngCartItem = cartItems.find(
    (cartItem) => cartItem.gid === productToAdd.gid
  );

  if (exisitngCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.gid === productToAdd.gid
        ? { ...cartItem, quantity: ++cartItem.quantity }
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

  const removeProductFromCart = (productToRemove) => {
    setCartProducts(
      cartProducts.filter((product) => product.gid !== productToRemove.gid)
    );
  };

  const value = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    removeProductFromCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
