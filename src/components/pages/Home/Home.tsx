import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovidStat } from "../../../reducers/HomeReducer";
import Spinner from "../../Spinner/Spinner";
import Error from "../../Error/Error";
import Charts from "./Charts/Charts";

const Home = () => {
  return <div className="container callout callout-info">World Statistics</div>;
};

export default Home;
