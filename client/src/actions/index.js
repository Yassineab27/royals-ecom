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

export const addItem = (userId, item) => {
  return async dispatch => {
    try {
      const response = await axios.patch(`/users/${userId}/addItem`, item);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setCurrentUser(response.data));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

export const deleteItem = (userId, itemId) => {
  return async dispatch => {
    try {
      const response = await axios.patch(
        `/users/${userId}/deleteItem/${itemId}`
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setCurrentUser(response.data));
      dispatch(setAlert("Item Removed Successfully", "success"));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

export const removeQuantity = (userId, itemId) => {
  return async dispatch => {
    try {
      const response = await axios.patch(
        `/users/${userId}/removeQuantity/${itemId}`
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setCurrentUser(response.data));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};

// CART
export const toggleCartDropdown = () => {
  return { type: "TOGGLE_CART_DROPDOWN" };
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

// STRIPE
export const StripeOnToken = (token, priceForStripe) => {
  try {
    axios.post("/payment", { token, priceForStripe });
    history.push("/checkout/confirmation");
  } catch (err) {
    setAlert(
      "An Issue has occured. Please make sure your credit card is valid.",
      "danger"
    );
  }
};

// CHECKOUT CONFIRMATION
export const userCheckoutConfirmation = userId => {
  return async dispatch => {
    try {
      const response = await axios.patch(
        `/users/${userId}/checkoutConfirmation`
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setCurrentUser(response.data));
    } catch (err) {
      dispatch(setAlert(err.response.data.error, "danger"));
    }
  };
};
