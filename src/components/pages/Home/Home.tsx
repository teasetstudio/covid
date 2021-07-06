import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { getCovidStat } from "../../../reducers/HomeReducer";
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
    <div className="container text-center callout callout-info">
      {error && <Error />}
      <div className="d-flex justify-content-center flex-wrap-reverse my-5">
        <div className="w-50 text-center position-relative">
          {loading && <Spinner className="position-absolute" />}

          {data && <Charts />}
        </div>

        <div className="mx-3">
          <h1 className="mb-5">World Total Info</h1>

          {data && (
            <>
              <p className="my-5">
                Last update <span>{data[0].lastUpdate}</span>
              </p>
              <p>Total Cases:</p>
              <h2 className="display-3">
                {data[0].totalCases.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0,
                })}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
