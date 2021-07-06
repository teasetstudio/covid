import { combineReducers } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer";
import CountryReducer from "./CountryReducer";

export default combineReducers({
  home: HomeReducer,
  country: CountryReducer,
});
