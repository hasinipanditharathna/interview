import React from "react";
import PropTypes from "prop-types";

import "./DisplayValue.css";

export default class DisplayValue extends React.Component {
  

  render() {
    // let {input} = this.props;
    
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
