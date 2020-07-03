import React from "react";

import "../styles/BeerContainer.css";

interface beer {
  name: string;
  volume: string;
  value: string;
}

interface props {
  beer: beer;
  setBeer: (property: string, value: string) => {};
}

const BeerContainer = ({ beer, setBeer }: props) => (
  <div className="single-beer-container">
    <h3>{beer.name}</h3>
    <br />
    <div className="beer-input">
      <p>Volume: </p>
      <input
        value={beer.volume}
        onChange={({ target }) => setBeer("volume", target.value)}
        placeholder="ml"
      />
    </div>
    <div className="beer-input">
      <p>Valor: </p>
      <input
        value={beer.value}
        onChange={({ target }) => setBeer("value", target.value)}
        placeholder="R$"
      />
    </div>
  </div>
);

export default BeerContainer;
