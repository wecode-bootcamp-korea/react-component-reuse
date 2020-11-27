import React, { Component } from "react";
import Form from "./Components/Form";
import "./Modal.scss";

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <Form type="signUp" format={signUpProps} />
        {/* <Form type="signIn" format={signInProps} /> */}
      </div>
    );
  }
}

const signUpProps = [
  {
    type: "name",
  },
  {
    type: "email",
  },
  {
    type: "password",
  },
];

const signInProps = [
  {
    type: "email",
  },
  {
    type: "password",
  },
];
