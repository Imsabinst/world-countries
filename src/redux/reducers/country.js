import { types } from "../../types";

const intialState = {
  countries: [],
  errorMessage: "",
  filteredCountries: "",
  singleCountry: null,
};

export const country = (state = intialState, { type, payload }) => {
  //  console.log("this is reducer", payload);
  switch (type) {
  case types.GET_COUNTRIES:
    return { ...state };

  case types.GET_COUNTRIES_SUCCESS:
    return { ...state, countries: payload };

  case types.GET_COUNTRIES__FAILURE:
    return { ...state, errorMessage: payload };

  case types.SEARCH_COUNTRY:
    // const newArray = state.countries.filter((item)=> item.name.common.toLowerCase().match(payload))
    // console.log('-------', newArray)
    return {
      ...state,
      filteredCountries: payload,
    };
  case types.SINGLE_COUNTRY:
    return { ...state, singleCountry: payload };
  default:
    return state;
  }
};
