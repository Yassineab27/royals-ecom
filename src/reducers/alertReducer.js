const INITIAL_STATE = {
  alertInfo: null
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REMOVE_ALERT":
      return { alertInfo: null };
    case "SET_ALERT":
      return { alertInfo: action.payload };
    default:
      return state;
  }
};

export default alertReducer;
