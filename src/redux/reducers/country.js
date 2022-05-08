import { types } from "../../types";

const intialState = {
  countries: [],
};

export const country = (state = intialState, { type, payload }) => {
  switch (type) {
  case types.GET_COUNTRIES:
    return { ...state, countries: payload };
  default:
    return state;
  }
};
