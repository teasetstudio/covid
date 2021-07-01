import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import hash from "object-hash";
import CountriesApi from "../api/countries";

// REDUCER
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
    gotSameInfo(state) {
      state.loading = false;
    },
    gotErr(state) {
      state.loading = false;
      state.error = true;
    },
    changeErr(state) {
      state.error = !state.error;
    },
  },
  // extraReducers: {
  //   [getCovidStat.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getCovidStat.fulfilled]: (state, action) => {
  //     state.data = action.payload;
  //   },
  //   [getCovidStat.rejected]: (state) => {
  //     state.error = true;
  //   },
  // },
});

export default HomeReducer.reducer;
export const { gettingInfo, gotInfo, gotSameInfo, gotErr, changeErr } =
  HomeReducer.actions;

// async functions
export const getCovidStat = createAsyncThunk(
  "home/getCovidStat",
  async (obj, { dispatch, getState }) => {
    dispatch(gettingInfo());
    CountriesApi.getAll()
      .then((res) => {
        const { home }: any = getState();

        if (hash(home.data) === hash(res.data)) {
          console.log("same");
          dispatch(gotSameInfo());
        } else {
          console.log("new data");
          dispatch(gotInfo(res.data));
        }
      })
      .catch((err) => {
        console.log("Error", err);
        dispatch(gotErr());
      });
  }
);
