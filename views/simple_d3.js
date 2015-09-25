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
      }],
    };
  }

  componentDidMount () {
    this.timerOne = window.setTimeout(this.updateOne.bind(this), 5000);
    this.timerTwo = window.setTimeout(this.updateTwo.bind(this), 10000);
  }

  componentWillUnmount () {
    window.clearTimeout(this.timerOne);
    window.clearTimeout(this.timerTwo);
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
      }]
    });
  }

  render () {
    return <SimpleBar data={ this.state.data } />
  }

}
