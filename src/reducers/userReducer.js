const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_ERROR":
      return { ...state, error: action.payload };
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
