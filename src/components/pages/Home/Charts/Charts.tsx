import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../reducers/store";
import dataHome from "./chart_data";

const selectWorld = createSelector(
  (state: RootState) => state.home.data,
  (data) => {
    console.log("calc world data...");
    return data ? dataHome(data[0]) : null;
  }
);

const Charts = React.memo(() => {
  const worldData = useSelector(selectWorld);

  return (
    <div>
      <Pie data={worldData} type />
    </div>
  );
});

export default Charts;
