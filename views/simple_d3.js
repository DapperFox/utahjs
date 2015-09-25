import React from "react";
import SimpleBar from "../components/simple_bar";


export default class SimpleD3 extends React.Component {
  render () {
    return <SimpleBar data={ this.getData() } />
  }

  getData () {
    return [{
      key: "Cumulative Return",
      values: [
        {label: "1", value: 1},
        {label: "2", value: 2}
      ]
    }];
  }
}
