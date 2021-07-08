import { combineReducers } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer";

export default combineReducers({
  home: HomeReducer,
});
