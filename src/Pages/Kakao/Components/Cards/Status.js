import { Component } from "react";
import "./Status.scss";

export default class Status extends Component {
  render() {
    const { status } = this.props

    return (
      <div className="Status">
        {STATUS_MAP[status]}
      </div>
    )
  }
}

const STATUS_MAP = {
  new: <span className="new">NEW</span>,
  theme: <span className="theme">Theme</span>,
  good: <span className="good">Good</span>
}