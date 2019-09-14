import { createSelector } from "reselect";

// INPUT SELECTOR (returns a piece of selected cart)
const selectCart = state => state.cart;

// OUTPUT SELECTOR => Memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
);
