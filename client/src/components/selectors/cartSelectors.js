import { createSelector } from "reselect";

// INPUT SELECTOR (returns a piece of selected cart)
const selectCart = state => state.cart;

// OUTPUT SELECTOR => Memoized selector
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
);
