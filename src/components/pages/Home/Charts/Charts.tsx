import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
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

const selectTopCases = createSelector(
  // @ts-ignore
  (state) => state.home.data,
  (data) => {
    console.log("calc cases data...");
    return data
      ? dataHome(
          [...data].sort((a, b) => b.totalCases - a.totalCases).slice(1, 16),
          "totalCases"
        )
      : null;
  }
);

const Charts = React.memo(() => {
  const topTenDeath = useSelector(selectTopDeath);
  const topTenCases = useSelector(selectTopCases);

  const deathOpt = optionHome("Total Death");
  const casesOpt = optionHome("Total Cases");

  return (
    <div>
      <Bar data={topTenDeath} options={deathOpt} type />
      <br />
      <Bar data={topTenCases} options={casesOpt} type />
    </div>
  );
});

export default Charts;
