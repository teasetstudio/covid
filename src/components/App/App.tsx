import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Home, { Top, Countries } from "components/pages";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/top10" exact component={Top} />
      <Route path="/countries" exact component={Countries} />
    </Router>
  );
};

export default App;
