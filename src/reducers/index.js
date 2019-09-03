import { combineReducers } from "redux";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import shopReducer from "./shopReducer";
import menuMainReducer from "./menuMainReducer";
import menuSecReducer from "./menuSecReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shopData: shopReducer,
  menuMainData: menuMainReducer,
  menuSecData: menuSecReducer
});

export default rootReducer;
