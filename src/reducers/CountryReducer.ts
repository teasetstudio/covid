import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// REDUCER
interface IState {
  info: any;
}
const initialState: IState = {
  info: null,
};

const CountryReducer = createSlice({
  name: "country",
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export default CountryReducer.reducer;
export const { setInfo } = CountryReducer.actions;
