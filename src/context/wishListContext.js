import { createContext, useState } from 'react';

import { testBasketProducts } from 'data';

const toggleWishListProduct = (wishListProducts, productToadd) => {
  const arleadyLiked = wishListProducts.find(
    (product) => product.gid === productToadd.gid
  );

  if (arleadyLiked) {
    return wishListProducts.filter(
      (product) => product.gid !== productToadd.gid
    );
  }
  return [...wishListProducts, productToadd];
};

const helperRemoveProduct = (wishListProducts, productToRemove) => {
  const arleadyLiked = wishListProducts.find(
    (product) => product.gid === productToRemove.gid
  );

  if (arleadyLiked) {
    return wishListProducts.filter(
      (product) => product.gid !== productToRemove.gid
    );
  }
  return wishListProducts;
};

export const wishListContext = createContext({
  wishListProducts: [],
  addProductToWishList: () => {},
});

export const WishListContextProvider = ({ children }) => {
  const [wishListProducts, setWishListProducts] = useState(testBasketProducts);

  const addProductToWishList = (wishListProducts, productToAdd) => {
    setWishListProducts(toggleWishListProduct(wishListProducts, productToAdd));
  };

  const removeProduct = (wishListProducts, productToRemove) => {
    console.log(productToRemove);
    setWishListProducts(helperRemoveProduct(wishListProducts, productToRemove));
  };

  const value = {
    wishListProducts,
    setWishListProducts,
    addProductToWishList,
    removeProduct,
  };

  return (
    <wishListContext.Provider value={value}>
      {children}
    </wishListContext.Provider>
  );
};
