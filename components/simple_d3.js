import React from "react";
import d3 from "d3";
import NVD3 from "nvd3";

class SimpleD3 extends React.Component {
  buildGraph(component) {
    NVD3.addGraph(function() {
    var chart = NVD3.models.lineChart()
      .useInteractiveGuideline(true);

    chart.xAxis
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

    chart.yAxis
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

    d3.select(component)
      .datum(data())
      .transition().duration(500)
      .call(chart);

    NVD3.utils.windowResize(chart.update);

    return chart;
    });
  }
  componentDidMount() {
    buildGraph(React.getDOMNode(this));
  }

  componentWillUpdate() {

  }

  render() {
    return (
      <div id="simple-d3"></div>
      );
  }
}