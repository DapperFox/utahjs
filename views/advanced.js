import React from "react";
import { BarChart } from "react-d3-components";

export default class Advanced extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      data: {
        label: 'Forks',
        values: [
          { x: "Angular", y: 1497 },
          { x: "React", y: 4305 }
        ]
      }
    };
    console.log(this.state);
  }

  render () {
    return <BarChart data={ this.state.data } width={ 800 } height={ 500 } />;
  }
}
