export const setCurrentUser = user => {
  return { type: "SET_CURRENT_USER", payload: user };
};

export const toggleCartDropdown = () => {
  return { type: "TOGGLE_CART_DROPDOWN" };
};

export const addItem = item => {
  return { type: "ADD_ITEM", payload: item };
};

export const deleteItem = itemId => {
  return { type: "DELETE_ITEM", payload: itemId };
};

export const removeQuantity = itemId => {
  return { type: "REMOVE_QUANTITY", payload: itemId };
};

// SHOP
export const getCollections = collections => {
  return { type: "GET_COLLECTIONS", payload: collections };
};
