import { combineReducers } from "redux";
import { country } from "./country";
const reducers = combineReducers({
  allCountries: country,
});
export default reducers;
