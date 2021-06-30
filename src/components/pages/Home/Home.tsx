import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Bar } from "react-chartjs-2";
import Chats from "./chats";
import { getCovidStat, changeErr } from "../../../reducers/HomeReducer";
import Spinner from "../../Spinner/Spinner";
import { dataHome, optionHome } from "./chart_data";

const selectTopDeath = createSelector(
  // @ts-ignore
  (state) => state.home.data,
  (data) => {
    console.log("calc death data...");
    return data
      ? dataHome(
          [...data].sort((a, b) => b.totalDeath - a.totalDeath).slice(1, 16),
          "totalDeath"
        )
      : null;
  }
);

// const selectTopCases = createSelector(
//   // @ts-ignore
//   (state) => state.home.data,
//   (data) => {
//     console.log("calc cases data...");
//     return data
//       ? [...data].sort((a, b) => b.totalCases - a.totalCases).slice(1, 16)
//       : null;
//   }
// );

const dataOpt = optionHome("Total Death");

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidStat());
  }, [dispatch]);

  const topTenDeath = useSelector(selectTopDeath);
  // const topTenCases = useSelector(selectTopCases);
  // @ts-ignore
  const data = useSelector((state) => state.home.data);
  // @ts-ignore
  const loading = useSelector((state) => state.home.loading);
  // @ts-ignore
  const error = useSelector((state) => state.home.error);

  return (
    <div className="container callout callout-info">
      Corona virus danger
      <div className="w-50 mx-auto text-center position-relative">
        {loading && <Spinner />}
        <Chats data={topTenDeath} opt={dataOpt} />
        <button type="button" onClick={() => dispatch(changeErr())}>
          error
        </button>
        {error && !loading && <p>НЕкаЯ ошибка((</p>}
      </div>
    </div>
  );
};

export default Home;
