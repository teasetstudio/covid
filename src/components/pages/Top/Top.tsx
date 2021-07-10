import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { getCovidStat } from "reducers/HomeReducer";
import { RootState } from "reducers/store";
import Error from "components/Error/Error";
import Charts from "./Charts/Charts";

const Top = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidStat());
  }, [dispatch]);

  const data = useSelector((state: RootState) => state.home.data);
  const loading = useSelector((state: RootState) => state.home.loading);
  const error = useSelector((state: RootState) => state.home.error);

  return (
    <div className="container callout callout-info text-center">
      <h2 className="my-3">Most infected countries</h2>
      <div className="w-50 mx-auto text-center position-relative">
        {loading && <Spinner color="secondary" className="position-absolute" />}

        {error && <Error />}

        {data && <Charts />}
      </div>
    </div>
  );
};

export default Top;
