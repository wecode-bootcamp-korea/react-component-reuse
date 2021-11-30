import React from "react";
import "./Item.scss";

export default function Item({ type, item }) {
  const { title, price, img } = item;

  return (
    <li className={"item " + type}>
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
