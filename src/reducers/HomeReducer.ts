import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import hash from "object-hash";
import CountriesApi from "api/countries";
import { Tdata } from "types";

// REDUCER
interface IState {
  data: Tdata[] | null;
  loading: boolean;
  search: string;
  error: boolean;
}
const initialState: IState = {
  data: null,
  loading: true,
  search: "",
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
    setSearch(state, { payload }) {
      state.search = payload;
    },
    changeErr(state) {
      state.error = !state.error;
    },
  },
});

export default HomeReducer.reducer;
export const {
  gettingInfo,
  gotInfo,
  gotSameInfo,
  gotErr,
  setSearch,
  changeErr,
} = HomeReducer.actions;

// async functions
export const getCovidStat = createAsyncThunk(
  "home/getCovidStat",
  async (obj, { dispatch, getState }) => {
    dispatch(gettingInfo());
    CountriesApi.getAll()
      .then((res) => {
        const { home }: any = getState();

        if (hash(home.data) === hash(res.data)) {
          console.log("got same data");
          dispatch(gotSameInfo());
        } else {
          console.log("got new data");
          dispatch(gotInfo(res.data));
        }
      })

      .catch((err) => {
        console.log("Error", err);
        dispatch(gotErr());
      });
  }
);
