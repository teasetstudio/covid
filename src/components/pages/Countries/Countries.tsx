import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Error from "components/Error/Error";
import { getCovidStat } from "reducers/HomeReducer";
import { RootState } from "reducers/store";
import TableHeader from "./TableHeader/TableHeader";
import useSortableData from "./useSortableData";
import "./countries.scss";

// RESELECT FUNCTION (GET REDUX DATA and filter/sort it)
const selectCountries = createSelector(
  (state: RootState) => state.home.data,
  (state: RootState) => state.home.search,
  (data, search) => {
    console.log("calc countries data...");
    return (
      data &&
      [...data]
        .filter(
          (d) =>
            d.country && d.country.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.country.localeCompare(b.country))
    );
  }
);

// NICE NUMBER DISPLAY
function niceNum(num: number) {
  return num.toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });
}

// Countries COMPONENT
const Countries = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector(selectCountries);
  const error = useSelector((state: RootState) => state.home.error);

  // SORTING COMPONENT
  const { sortedItems, requestSort, sortConfig } = useSortableData(reduxData);

  const data = sortedItems || reduxData;

  useEffect(() => {
    dispatch(getCovidStat());
  }, [dispatch]);

  return (
    <div className="container">
      {error && <Error />}

      <TableHeader requestSort={requestSort} sortConfig={sortConfig} />

      <ul className="list-group list-group-flush text-center">
        {data &&
          data.map((i) => (
            <li
              className="d-flex justify-content-between list-group-item"
              key={i.country ? i.country : "aa"}
            >
              <b className="w-25 text-left">{i.country}</b>
              <span className="w-25">
                {i.totalCases ? niceNum(i.totalCases) : "N/D"}
              </span>
              <span className="w-25">
                {i.totalDeath ? niceNum(i.totalDeath) : "N/D"}
              </span>
              <span className="w-25 text-right">
                {i.totalRecovered ? niceNum(i.totalRecovered) : "N/D"}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
