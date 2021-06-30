import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Bar } from "react-chartjs-2";
import Chats from "./chats";
import { getCovidStat, changeErr } from "../../../reducers/HomeReducer";
import Spinner from "../../Spinner/Spinner";
import { dataHome, optionHome } from "./chart_data";
import Error from "./error";

const selectTopDeath = createSelector(
  // @ts-ignore
  (state) => state.home.data,
  (data) => {
    console.log("calc death data...");
    return data
      ? [...data].sort((a, b) => b.totalDeath - a.totalDeath).slice(1, 16)
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

const dataOpt = {
  indexAxis: "x",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "asdasd",
    },
  },
};
const dat = {
  labels: "ahah",
  datasets: [
    {
      label: "Человек",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
        <Chats data={dat} opt={dataOpt} />
        <Error />
      </div>
    </div>
  );
};

export default Home;
