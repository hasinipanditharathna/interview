import React from "react";
import "./Button.css";

export default class Button extends React.Component {



  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    const className = [
      "component-button",
      this.props.blue ? "blue" : "",
      this.isOperator(this.props.children) ? "" : "operator"
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={() => this.props.handleClick(this.props.children)}>{this.props.children}</button>
      </div>
    );
  }
}
