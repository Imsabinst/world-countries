import { types } from "../../types";

export const addFavouriteCountries = (country) => {
  return {
    type: types.ADD_FAVORITE_COUNTRY,
    payload: country,
  };
};
export const deleteCountry = (countryName) => {
  return {
    type: types.DELETE_COUNTRY,
    payload: countryName,
  };
};
