import axios from "axios";
import { types } from "../../types";

export const fetchCountries = () => {
  return {
    type: types.GET_COUNTRIES,
  };
};
export const fetchCountriesSuccess = (countries) => {
  return {
    type: types.GET_COUNTRIES_SUCCESS,
    payload: countries,
  };
};
export const fetchCountriesFailure = (error) => {
  return {
    type: types.GET_COUNTRIES__FAILURE,
    payload: error,
  };
};
export const searchCountries = (countryName) => {
  return {
    type: types.SEARCH_COUNTRY,
    payload: countryName,
  };
};

export const fetchCountriesDetails = () => {
  return async (dispatch) => {
    dispatch(fetchCountries());
    try {
      const req = await axios.get("https://restcountries.com/v3.1/all");
      const res = await req.data;
      return dispatch(fetchCountriesSuccess(res));
    } catch (error) {
      dispatch(fetchCountriesFailure(error));
    }
  };
};
