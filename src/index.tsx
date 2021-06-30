import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore({ reducer });

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
