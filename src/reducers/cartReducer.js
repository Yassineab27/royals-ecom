const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "TOGGLE_CART_DROPDOWN":
      return { cartHidden: !state.cartHidden };
    default:
      return state;
  }
};

export default cartReducer;
