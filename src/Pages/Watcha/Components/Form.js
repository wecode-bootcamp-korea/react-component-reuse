import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import "./Form.scss";

export default class Form extends Component {
  render() {
    const { format } = this.props;

    return (
      <div className="Form">
        <header>
          <div className="logo" />
        </header>
        <h2>{format.text}</h2>
        <div>
          {format.data.map((input, idx) => (
            <Input key={idx} type={input.type} text={input.text} />
          ))}
        </div>
        <Button value={format.text} />
        {format.type === "signUp" && (
          <p className="isAlreadyLogin">
            이미 가입하셨나요? <span>로그인</span>
          </p>
        )}
      </div>
    );
  }
}
