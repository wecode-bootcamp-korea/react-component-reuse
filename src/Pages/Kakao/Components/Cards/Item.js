import React, { Component } from "react";
import "./Item.scss";

export default class Item extends Component {
  render() {
    const { type, item } = this.props;
    const { title, price, img } = item;

    return (
      <li className={"Item " + type}>
        <img alt="item" src={img} />
        <div className="content">
          <div>
            <p>{title}</p>
            <p className="price">{price.toLocaleString()}원</p>
          </div>
          <button className="button" />
        </div>
      </li>
    );
  }
}
