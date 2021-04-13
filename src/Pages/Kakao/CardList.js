import React, { Component } from "react";
import Card from "./Components/Cards/Card";
import "./CardList.scss";
import CARD_DATA from "./data";

export default class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        {CARD_DATA.map((card, idx) => <Card key={idx} card={card} />)}
      </div>
    );
  }
}
