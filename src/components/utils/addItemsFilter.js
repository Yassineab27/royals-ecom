const addItemsFilter = (cartItems, item) => {
  const duplicateItems = cartItems.find(cartItem => cartItem.id === item.id);

  if (!duplicateItems) {
    return [...cartItems, { ...item, quantity: 1 }];
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === item.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    } else {
      return cartItem;
    }
  });
};

export default addItemsFilter;
