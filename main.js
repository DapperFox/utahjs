import React from "react";
import { Router, Route } from 'react-router';
import SimpleD3 from "./views/simple_d3";
import AllReact from "./views/all_react";
import Advanced from "./views/advanced";


React.render((
  <Router>
    <Route path="/" component={SimpleD3} />
    <Route path="react" component={AllReact} />
    <Route path="advanced" component={Advanced} />
  </Router>), document.getElementById("react"));
