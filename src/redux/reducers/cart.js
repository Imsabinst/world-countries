import { types } from "../../types";

const intialState = {
  favoriteCountries: [],
};

export const cart = (state = intialState, { type, payload }) => {
  switch (type) {
  case types.ADD_FAVORITE_COUNTRY:
    return {
      ...state,
      favoriteCountries: [...state.favoriteCountries, payload],
    };
  case types.DELETE_COUNTRY:
    let newArray = state.favoriteCountries.filter(
      (item) => item.name.common !== payload
    );
    return {
      ...state,
      favoriteCountries: newArray,
    };
  default:
    return state;
  }
};
