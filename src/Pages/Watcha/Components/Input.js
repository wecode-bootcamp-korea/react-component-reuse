import React, { Component } from "react";
import "./Input.scss";

export default class Input extends Component {
  render() {
    const { type } = this.props;
    const mapper = {
      name: "이름",
      password: "비밀번호",
      email: "이메일",
    };

    return (
      <div className="Input">
        <div className="inputWrapper">
          <input type={type} placeholder={mapper[type]} />
        </div>
      </div>
    );
  }
}
