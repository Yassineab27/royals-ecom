const INITIAL_STATE = {
  cartHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return { cartHidden: !state.cartHidden };
    default:
      return state;
  }
};

export default cartReducer;
