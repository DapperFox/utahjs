import React from "react";
import d3 from "d3";
import NVD3 from "nvd3";
import shallowEqual from "react/lib/shallowEqual";

export default class SimpleD3 extends React.Component {

  componentDidMount() {
    NVD3.addGraph(() => {
      this.chart = NVD3.models.discreteBarChart();
      this.chart
        .x(function(d) { return d.label })
        .y(function(d) { return d.value });
      this.chart.tooltip.enabled();
      NVD3.utils.windowResize(this.chart.update);
      return this.chart;
    });
    this.update();
  }

  componentWillUpdate() {
    this.update()
  }

  update () {
    NVD3.addGraph(() => {
      d3.select(React.findDOMNode(this))
        .datum(this.props.data)
        .transition().duration(500)
        .call(this.chart);
    });
  }

  render() {
    return (
      <svg className="simple-bar"></svg>
    );
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
} 
