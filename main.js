import React from "react";
import { Router, Route, Link } from 'react-router'

import SimpleGraph from "./SimpleGraph";
import AllReact from "./AllReact";
import Advanced from "./Advanced";

class Main extends React.Component{
  render() {
    return (
      <Router>
        <Route path="/" component={SimpleGraph}>
        <Route path="react" component={AllReact}/>
        <Route path="advanced" component={Advanced}/>
      </Router>
    );
  }
}

React.render(<Main />, document.getElementById("react"));
