import React, { Component } from "react";
import "./Input.scss";

export default class Input extends Component {
  render() {
    const { type, text } = this.props;

    return (
      <div className="Input">
        <div className="inputWrapper">
          <input type={type} placeholder={text} />
        </div>
      </div>
    );
  }
}
