import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectCartItems = createSelector(
  [selectCurrentUser],
  currentUser => (currentUser ? currentUser.items : [])
);

export const selectItemsCount = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectItemsTotalPrice = createSelector(
  [selectCartItems],
  items => items.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
