import React from "react";
import SimpleBar from "../components/simple_bar";


export default class SimpleD3 extends React.Component {
  render () {
    return <SimpleBar data={ this.getData() } />
  }

  getData () {
    return [{
      key: "Forks",
      values: [
        {label: "Angular", value: 1497},
        {label: "React", value: 4305}
      ]
    },{
      key: "Stars",
      values: [
        {label: "Angular", value: 5500},
        {label: "React", value: 28493}
      ]
    }];
  }
}
