import React from "react";
import Funnel from "../components/funnel";

export default class AllReact extends React.Component {
  constructor () {
    super(...arguments);
    this.state = {
      data: [
        {value: 100, label: "New Session"},
        {value: 50, label: "Add To Cart"},
        {value: 40, label: "Checkout"},
        {value: 10, label: "Complete Purchase"},
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
        {value: 180, label: "New Session"},
        {value: 160, label: "Add To Cart"},
        {value: 40, label: "Checkout"},
        {value: 12, label: "Complete Purchase"},
      ]
    });
  }
}
