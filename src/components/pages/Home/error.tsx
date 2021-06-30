import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeErr } from "../../../reducers/HomeReducer";

const Error = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const loading = useSelector((state) => state.home.loading);
  // @ts-ignore
  const error = useSelector((state) => state.home.error);

  return (
    <div>
      <button type="button" onClick={() => dispatch(changeErr())}>
        error
      </button>
      {error && !loading && <p>НЕкаЯ ошибка((</p>}
    </div>
  );
};

export default Error;
