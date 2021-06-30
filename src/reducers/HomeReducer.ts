import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CountriesApi from "../api/countries";

interface IState {
  data: any;
  loading: boolean;
  error: boolean;
}
const initialState: IState = {
  data: null,
  loading: true,
  error: false,
};

const HomeReducer = createSlice({
  name: "home",
  initialState,
  reducers: {
    gettingInfo(state) {
      state.loading = true;
      state.error = false;
    },
    gotInfo(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    gotErr(state) {
      state.loading = false;
      state.error = true;
    },
    changeErr(state) {
      state.error = !state.error;
    },
  },
});

export default HomeReducer.reducer;
export const { gettingInfo, gotInfo, gotErr, changeErr } = HomeReducer.actions;

// async functions
export const getCovidStat = createAsyncThunk(
  "home/getCovidStat",
  async (obj, { dispatch }) => {
    dispatch(gettingInfo());
    CountriesApi.getAll()
      .then((res) => {
        console.log("res", res);
        dispatch(gotInfo(res.data));
      })
      .catch((err) => {
        console.log("Error", err);
        dispatch(gotErr());
      });
  }
);
