import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import "./Form.scss";

export default class Form extends Component {
  render() {
    const { type, format } = this.props;
    const table = {
      signUp: "회원가입",
      signIn: "로그인",
    };

    return (
      <div className="Form">
        <header>
          <div className="logo" />
        </header>
        <h2>{table[type]}</h2>
        <div>
          {format.map((input, idx) => {
            return <Input key={idx} type={input.type} />;
          })}
        </div>
        <Button value={table[type]} />
        {type === "signUp" && (
          <p className="isAlreadyLogin">
            이미 가입하셨나요? <span>로그인</span>
          </p>
        )}
      </div>
    );
  }
}
