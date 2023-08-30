import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);




  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const cartItemCount = cartItems.length;


  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemCount,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

