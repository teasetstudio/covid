import { combineReducers } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer";
import CountriesReducer from "./CountriesReducer";

export default combineReducers({
  home: HomeReducer,
  countries: CountriesReducer,
});
