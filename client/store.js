import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/productsReducer";
import CategoriesReducer from "./reducers/categoriesReducer";
import AuthReducer from "./reducers/authReducer";
import CartsReducer from "./reducers/cartsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const admin = createStore(
  combineReducers({
    products: ProductsReducer,
    categories: CategoriesReducer,
    auth: AuthReducer,
    carts: CartsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default admin;
