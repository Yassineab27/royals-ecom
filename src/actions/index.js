import { firestore, shopCollections } from "../firebase/firebase.utils";

// USER
export const setCurrentUser = user => {
  return { type: "SET_CURRENT_USER", payload: user };
};

export const setUserError = errorMessage => {
  return { type: "SET_USER_ERROR", payload: errorMessage };
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
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(collectionsSnapshot => {
        // snapshot is an obj that has info about the collection its listening to
        const collections = shopCollections(collectionsSnapshot);
        dispatch({ type: "GET_COLLECTIONS", payload: collections });
      })
      .catch(err => dispatch({ type: "SET_SHOP_ERROR", payload: err.message }));
  };
};

export const getCurrentCollection = collectionParam => {
  return dispatch => {
    dispatch({ type: "RESET_COLLECTION_STATE" });
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(collectionsSnapshot => {
        // snapshot is an obj that has info about the collection its listening to
        const collections = shopCollections(collectionsSnapshot);
        const collection = collections.find(
          collection => collection.routeName === collectionParam
        );
        dispatch({ type: "GET_CURRENT_COLLECTION", payload: collection });
      })
      .catch(err => dispatch({ type: "SET_SHOP_ERROR", payload: err.message }));
  };
};
