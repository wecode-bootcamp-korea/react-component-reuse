import { Component } from "react";
import Item from "./Item";
import Status from "./Status";
import "./Card.scss";

export default class Card extends Component {
  render() {
    const { status, title, desc, items, type, card_img } = this.props.card;

    return (
      <article className="Card">
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
            {items &&
              items.map((item, idx) => {
                return <Item key={idx} item={item} type={type} />;
              })}
          </ul>
        </div>
      </article>
    );
  }
}
