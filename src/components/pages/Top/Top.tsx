import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { getCovidStat } from "../../../reducers/HomeReducer";
import Error from "../../Error/Error";
import Charts from "./Charts/Charts";

const Top = () => {
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
    <div className="container callout callout-info text-center">
      <h2 className="my-3">Most infected countries</h2>
      <div className="w-50 mx-auto text-center position-relative">
        {loading && <Spinner className="position-absolute" />}

        {error && <Error />}

        {data && <Charts />}
      </div>
    </div>
  );
};

export default Top;
