import "./App.css";
import "./components/Card.scss";
import Card from "./components/Card";
import React, { useState } from "react";

const cards = [
  {
    tarifPrice: "300",
    tarifSpeed: "10",
    colorTarif: "rgb(166, 201, 195)",
    colorPrice: "rgb(209, 232, 228)",
  },
  {
    tarifPrice: "450",
    tarifSpeed: "50",
    colorTarif: "rgb(160, 175, 128)",
    colorPrice: "rgb(188, 204, 154)",
  },
  {
    tarifPrice: "550",
    tarifSpeed: "100",
    colorTarif: "rgb(141, 84, 95)",
    colorPrice: "rgb(195, 123, 137)",
  },
  {
    tarifPrice: "1000",
    tarifSpeed: "200",
    colorTarif: "rgb(201, 198, 165)",
    colorPrice: "rgb(234, 231, 198)",
  },
];
function App() {
  return (
    <div className="App">
      {cards.map((card) => (
        <Card
          tarifPrice={card.tarifPrice}
          tarifSpeed={card.tarifSpeed}
          isSelected={card.isSelected}
          colorTarif={card.colorTarif}
          colorPrice={card.colorPrice}
        ></Card>
      ))}
    </div>
  );
}

export default App;
//isSelected: "true",
