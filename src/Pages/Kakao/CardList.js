import React from "react";
import Card from "./Components/Cards/Card";
import CARD_DATA from "./data";
import "./CardList.scss";

export default function CardList() {
  return (
    <div className="cardList">
      {CARD_DATA.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </div>
  );
}
