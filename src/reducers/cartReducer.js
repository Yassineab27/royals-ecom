import addItemsFilter from "../components/utils/addItemsFilter";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REMOVE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => {
          if (cartItem.id === action.payload) {
            return cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : { ...cartItem, quantity: 1 };
          }

          return cartItem;
        })
      };
    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload
        )
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemsFilter(state.cartItems, action.payload)
      };
    case "TOGGLE_CART_DROPDOWN":
      return { ...state, cartHidden: !state.cartHidden };
    default:
      return state;
  }
};

export default cartReducer;
