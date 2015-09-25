import React from "react";
import Funnel from "../components/funnel";

export default class AllReact extends React.Component {
  constructor () {
    super(...arguments);
    this.state = {
      data: [
        {value: 100, label: "First"},
        {value: 50, label: "Second"},
        {value: 40, label: "Third"},
        {value: 10, label: "Four"},
      ]
    };
  }
  render () {
    return <Funnel data={ this.state.data } />
  }
  
  componentDidMount () {
    this.timerOne = window.setTimeout(this.updateOne.bind(this), 200);
    this.timerTwo = window.setTimeout(this.updateTwo.bind(this), 5000);
  }

  componentWillUnmount () {
    window.clearTimeout(this.timeOne);
    window.clearTimeout(this.timerTwo);
  }

  updateOne () {
    this.setState(this.state);
  }

  updateTwo () {
    this.setState({
      data: [
        {value: 200, label: "First"},
        {value: 180, label: "Second"},
        {value: 40, label: "Third"},
        {value: 10, label: "Four"},
      ]
    });
  }
}
