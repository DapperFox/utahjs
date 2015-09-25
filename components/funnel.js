import { Component, PropTypes } from "react";

export default class Funnel extends Component {

  constructor () {
    super(...arguments);
    this.gapSize = 20;
  }

  componentDidMount () {
    this.setState({
      width: this.getDOMNode().offsetWidth,
      height: this.getDOMNode().offsetHeight
    });
  }

  render () {
    var size = this.props.data.length;
    var max = this.props.data[0].value;
    return (
      <div className="funnel">
        { this.props.data.map((datum) => { return this.renderVisualization(datum, max); }) }
      </div>
    );
  }

  renderVisualization (datum, max) {
    var height = datum.value/max;
    return <div style={{ height: `${height}px`}} className="funnel-piece"></div>;
  }

};
Funnel.propTypes = {
  data: PropTypes.array.isRequired,
};
