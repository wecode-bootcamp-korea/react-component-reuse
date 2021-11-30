import React from "react";
import "./FormLayout.scss";

export default function FormLayout(props) {
  return (
    <div className="formLayout">
      <header>
        <div className="logo" />
      </header>
      {props.children}
    </div>
  );
}
