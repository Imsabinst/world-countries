import { types } from "../../types";

const intialState = {
  countries: [],
  errorMessage: "",
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
  default:
    return state;
  }
};
