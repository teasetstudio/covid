import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Spinner } from "reactstrap";
import { getCovidStat } from "../../../reducers/HomeReducer";
import useSortableData from "./useSortableData";
import Error from "../../Error/Error";
import sortImg from "./sort-down.svg";
import "./countries.scss";

// RESELECT FUNCTION (GET REDUX DATA and sort it)
const selectCountries = createSelector(
  // @ts-ignore
  (state) => state.home.data,
  (data) => {
    console.log("calc countries data...");
    return data && [...data].sort((a, b) => b.totalCases - a.totalCases);
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
  // @ts-ignore
  const reduxData: any[] = useSelector(selectCountries);

  // SORTING COMPONENT
  const { sortedItems, requestSort, sortConfig } = useSortableData(reduxData);

  const data = sortedItems || reduxData;

  // @ts-ignore
  const loading = useSelector((state) => state.home.loading);
  // @ts-ignore
  const error = useSelector((state) => state.home.error);

  useEffect(() => {
    dispatch(getCovidStat());
  }, [dispatch]);

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return "d-none";
    }
    return sortConfig.key === name ? sortConfig.direction : "d-none";
  };

  return (
    <div className="container">
      {error && <Error />}

      <div
        className="alert alert-dark d-flex justify-content-between align-items-center text-center mt-4 mb-2 position-relative"
        role="alert"
      >
        <span className="w-25 text-start">Country</span>
        <span className="w-25">
          <button
            type="button"
            onClick={() => requestSort("totalCases")}
            className="btn btn-outline-dark position-relative"
          >
            Cases
            <img
              className={getClassNamesFor("totalCases")}
              height="25"
              src={sortImg}
              alt=""
            />
          </button>
        </span>
        <span className="w-25">
          <button
            type="button"
            onClick={() => requestSort("totalDeath")}
            className="btn btn-outline-dark position-relative"
          >
            Death
            <img
              className={getClassNamesFor("totalDeath")}
              height="25"
              src={sortImg}
              alt=""
            />
          </button>
        </span>
        <span className="w-25 text-end">
          <button
            type="button"
            onClick={() => requestSort("totalRecovered")}
            className="btn btn-outline-dark position-relative"
          >
            Recovered
            <img
              className={getClassNamesFor("totalRecovered")}
              height="25"
              src={sortImg}
              alt=""
            />
          </button>
        </span>

        {loading && <Spinner className="position-absolute" />}
      </div>

      <ul className="list-group list-group-flush text-center">
        {data &&
          data.map((i: any) => (
            <li
              className="d-flex justify-content-between list-group-item"
              key={i.country ? i.country : "aa"}
            >
              <b className="w-25 text-start">{i.country}</b>
              <span className="w-25">
                {i.totalCases ? niceNum(i.totalCases) : "N/D"}
              </span>
              <span className="w-25">
                {i.totalDeath ? niceNum(i.totalDeath) : "N/D"}
              </span>
              <span className="w-25 text-end">
                {i.totalRecovered ? niceNum(i.totalRecovered) : "N/D"}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
