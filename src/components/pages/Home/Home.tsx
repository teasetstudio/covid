import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovidStat } from "../../../reducers/HomeReducer";
import Spinner from "../../Spinner/Spinner";
import Error from "../../Error/Error";
import Charts from "./Charts/Charts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidStat());
  }, [dispatch]);

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

        {error && <Error />}

        {data && <Charts />}
      </div>
    </div>
  );
};

export default Home;
