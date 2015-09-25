import React from "react";
import { Router, Route, Link } from 'react-router';
import SimpleD3 from "./views/simple_d3";
import AllReact from "./views/all_react";
import Advanced from "./views/advanced";

class Layout extends React.Component {
  render () {
    return (
      <div className="layout">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="#" className="brand-logo teal-text text-accent-2">NUVI</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/simple">Simple</Link></li>
              <li><Link to="/react">All React</Link></li>
              <li><Link to="/advanced">Advanced</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/" component={Layout}>
          <Route path="simple" component={SimpleD3} />
          <Route path="react" component={AllReact} />
          <Route path="advanced" component={Advanced} />
        </Route>
      </Router>
    );
  }
};
App.contextTypes = {
  router: React.PropTypes.func
};

React.render(<App />, document.getElementById("react"));
