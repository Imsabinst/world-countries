import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers/index";
import thunk from "redux-thunk";

const appState = {
  allCountries: {
    countries: [],
    errorMessage: "",
    filteredCountries: "",
    singleCountry: null,
  },
  addCountries: {
    favoriteCountries: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  appState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
