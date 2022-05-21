import { useReducer } from 'react';

const initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
  isCartOpen: false
};

const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART'
}

export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case ACTION_TYPES.ADD_TO_CART:
            return {
                ...state,
                cartItems: 
            }

        default:
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }

}

const updateCartItemsReducer = (newCartItems) => {
    
}