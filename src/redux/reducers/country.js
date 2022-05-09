import { types } from "../../types";

const intialState = {
  countries: [],
  errorMessage: "",
  favoriteCountries: [],
};

export const country = (state = intialState, { type, payload }) => {
  console.log("this is reducer", payload);
  switch (type) {
  case types.GET_COUNTRIES:
    return { ...state };
  case types.GET_COUNTRIES_SUCCESS:
    return { ...state, countries: payload };
  case types.GET_COUNTRIES__FAILURE:
    return { ...state, errorMessage: payload };
  case types.ADD_FAVORITE_COUNTRY:
    return { ...state, favoriteCountries: payload };
  default:
    return state;
  }
};
