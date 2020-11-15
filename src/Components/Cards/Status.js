import { Fragment } from "react";
import "./Status.scss";

export default function Status({ status }) {
  return (
    <div className="Status">
      {status === "new" && <span className="new">NEW</span>}
      {status === "theme" && <span className="theme">Theme</span>}
      {status === "good" && <span className="good">Good</span>}
    </div>
  );
}
