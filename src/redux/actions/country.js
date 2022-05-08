import axios from "axios";
import { types } from "../../types";

export const fetchCountries = () => async (dispatch) => {
  const response = await axios.get("https://restcountries.com/v2/all");
  dispatch({ type: types.GET_COUNTRIES, payload: response.data });
};
