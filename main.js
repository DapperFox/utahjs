import React from "react";
import Router from "react-router";

class Main extends React.Component{
  render() {
    return (
      <div>
        <h1>Hey there</h1>
      </div>
      );
  }
}

React.render(<Main />, document.getElementById("react"));