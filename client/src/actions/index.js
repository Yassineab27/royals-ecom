import axios from "axios";
import history from "../history";

// AUTH
export const registerUser = user => {
  return async dispatch => {
    try {
      const response = await axios.post("/auth/register", user);
      dispatch(setCurrentUser(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/");
      dispatch(setAlert("You were registered successfully", "success"));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

export const loginUser = user => {
  return async dispatch => {
    try {
      const response = await axios.post("/auth/login", user);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setCurrentUser(response.data));
      dispatch(setAlert("You were Logged in successfully", "success"));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

export const logoutUser = () => {
  localStorage.clear();
  history.push("/shop");
  return { type: "SET_CURRENT_USER", payload: null };
};

// USER
export const setCurrentUser = user => {
  return { type: "SET_CURRENT_USER", payload: user };
};

// CART
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
export const getCollections = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/collections");
      dispatch({ type: "GET_COLLECTIONS", payload: response.data });
    } catch (err) {
      dispatch(setAlert(err.message.data.error, "danger"));
    }
  };
};

export const getCurrentCollection = collectionId => {
  return async dispatch => {
    try {
      dispatch({ type: "GET_CURRENT_COLLECTION", payload: null });
      const response = await axios.get(`/collections/${collectionId}`);
      dispatch({ type: "GET_CURRENT_COLLECTION", payload: response.data });
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

// ALERT
export const setAlert = (alert, color) => {
  return { type: "SET_ALERT", payload: { msg: alert, type: color } };
};

export const removeAlert = () => {
  return { type: "REMOVE_ALERT" };
};
