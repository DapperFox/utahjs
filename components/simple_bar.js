import React from "react";
import d3 from "d3";
import NVD3 from "nvd3";

export default class SimpleD3 extends React.Component {

  buildGraph() {
    NVD3.addGraph(() => {
      this.chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .color(d3.scale.category10().range());

        NVD3.utils.windowResize(this.chart.update);

      return this.chart;
    });
  }

  componentDidMount() {
    this.buildGraph();
    this.update()
  }

  componentWillUpdate() {
    this.update()
  }

  update () {
    d3.select(React.findDOMNode(this))
        .datum(this.props.data)
        .transition().duration(500)
        .call(this.chart);


  }

  render() {
    return (
      <div className="simple-bar"></div>
    );
  }
} 
