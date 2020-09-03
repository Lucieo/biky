import { productsReducer } from "./reducers";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({ products: productsReducer });
const store = createStore(rootReducer);

export default store;
