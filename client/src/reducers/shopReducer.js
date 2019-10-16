const INITIAL_STATE = {
  collections: null,
  currentCollection: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CURRENT_COLLECTION":
      return { ...state, currentCollection: action.payload };
    case "GET_COLLECTIONS":
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
