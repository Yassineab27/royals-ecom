export const setCurrentUser = user => {
  return { type: "SET_CURRENT_USER", payload: user };
};

export const toggleCartDropdown = () => {
  return { type: "TOGGLE_CART_DROPDOWN" };
};

export const addItem = item => {
  return { type: "ADD_ITEM", payload: item };
};
