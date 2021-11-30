import React from "react";
import Item from "./Item";
import Status from "./Status";
import "./Card.scss";

export default function Card(props) {
  const { status, title, desc, items, type, card_img } = props.card;

  return (
    <article className="card">
      <div className="cardImg">
        <img alt="cardImg" src={card_img} />
      </div>
      <div className="cardMain">
        <Status status={status} />
        <h3>{title}</h3>
        <div>
          <p>{desc}</p>
        </div>
        <ul>
          {items?.map((item, idx) => (
            <Item key={idx} item={item} type={type} />
          ))}
        </ul>
      </div>
    </article>
  );
}
