import { combineReducers } from "redux";
import { cart } from "./cart";
import { country } from "./country";

const reducers = combineReducers({
  allCountries: country,
  addCountries: cart,
});
export default reducers;
