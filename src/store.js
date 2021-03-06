import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducers,
  productListReducers,

} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart:cartReducers

});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialStage = {
  cart: {cartItems :cartItemsFromStorage}
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialStage,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
