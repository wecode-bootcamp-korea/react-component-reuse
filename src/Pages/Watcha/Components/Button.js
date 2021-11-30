import React from "react";
import "./Button.scss";

export default function Button(props) {
  return <div className="button">{props.value}</div>;
}
