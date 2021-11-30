import React from "react";
import "./Status.scss";

export default function Status({ status }) {
  return <div className="status">{STATUS_MAP[status]}</div>;
}

const STATUS_MAP = {
  new: <span className="new">NEW</span>,
  theme: <span className="theme">Theme</span>,
  good: <span className="good">Good</span>,
};
