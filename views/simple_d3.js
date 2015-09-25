import React from "react";
import SimpleBar from "../components/simple_bar";


export default class SimpleD3 extends React.Component {

  constructor () {
    super(...arguments);
    this.state = {
      data: [{
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
      }],
    };
  }

  componentDidMount () {
    window.setTimeout(this.updateOne.bind(this), 5000);
    window.setTimeout(this.updateTwo.bind(this), 10000);
  }

  updateOne () {
    this.setState(this.state);
  }

  updateTwo () {
    this.setState({
    data: [{
        key: "Forks",
        values: [
          {label: "Angular", value: 3000},
          {label: "React", value: 4305}
        ]
      },{
        key: "Stars",
        values: [
          {label: "Angular", value: 18000},
          {label: "React", value: 28493}
        ]
      }]
    });
  }

  render () {
    return <SimpleBar data={ this.state.data } />
  }

}
