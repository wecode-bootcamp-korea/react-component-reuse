import React from "react";
import "./Input.scss";

export default function Input({ type, text }) {
  return (
    <div className="input">
      <div className="inputWrapper">
        <input name={type} type={type} placeholder={text} />
      </div>
    </div>
  );
}
