const INITIAL_STATE = {
  collections: null,
  currentCollection: null,
  error: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RESET_COLLECTION_STATE":
      return {
        ...state,
        currentCollection: null
      };
    case "SET_SHOP_ERROR":
      return { ...state, error: action.payload };
    case "GET_CURRENT_COLLECTION":
      return { ...state, currentCollection: action.payload };
    case "GET_COLLECTIONS":
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
