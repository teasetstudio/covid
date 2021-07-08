import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { changeErr } from "../../reducers/HomeReducer";
import { RootState } from "../../reducers/store";

const Error = () => {
  console.log("error");
  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.home.loading);
  const error = useSelector((state: RootState) => state.home.error);

  return (
    <>
      {error && !loading && (
        <Alert color="danger" className="text-center">
          <p>НЕкаЯ ошибка, данные не получены((</p>
          <button type="button" onClick={() => dispatch(changeErr())}>
            error
          </button>
        </Alert>
      )}
    </>
  );
};

export default Error;
