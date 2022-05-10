import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllFlavoursReducers } from "./reducers/flavoursReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllFlavoursReducers: getAllFlavoursReducers,
  cartReducer: cartReducer,
  userReducer: userReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};
const commposeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  commposeEnhancers(applyMiddleware(thunk))
);
export default store;
