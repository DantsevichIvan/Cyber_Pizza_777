import { combineReducers } from "redux";
import ProductsReducer from "./reducers/productsReducer";
import CategoriesReducer from "./reducers/categoriesReducer";
import AuthReducer from "./reducers/authReducer";
import CartsReducer from "./reducers/cartsReducer";
import OrderReducer from "./reducers/orderReducer";

export default combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer,
  auth: AuthReducer,
  carts: CartsReducer,
  order: OrderReducer,
});
