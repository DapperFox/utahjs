import React from "react";
import Funnel from "../components/funnel";

export default class AllReact extends React.Component {
  render () {
    return <Funnel data={ this.getFunnelData() } />
  }
}
