import React, { useState } from "react";

import BeerContainer from "../components/BeerContainer";
import header_logo from "../assets/header-logo.svg";
import { verifyCheaperBeer } from "../scripts/isCheapest";

import "../styles/App.css";

const App = () => {
  const [beerA, setBeerA] = useState({
    name: "Cerveja A",
    volume: "",
    value: "",
  });

  const [beerB, setBeerB] = useState({
    name: "Cerveja B",
    volume: "",
    value: "",
  });

  const beerA_handler = (property: string, value: string): any =>
    setBeerA({
      ...beerA,
      [property]: value,
    });

  const beerB_handler = (property: string, value: string): any =>
    setBeerB({
      ...beerB,
      [property]: value,
    });

  const handler_calc_click = () => {
    const result_element = document.getElementById("result")!;

    const result_text = verifyCheaperBeer(beerA, beerB);

    console.log(result_text)

    result_element.innerHTML = result_text ? result_text : "";
  };

  return (
    <div className="main-container">
      <header>
        <img src={header_logo} alt="Logo" className="header-logo" />
        <h1>Beer Price</h1>
      </header>

      <main>
        <h2>Maneira simples de saber qual cerveja é a mais barata.</h2>

        <div className="beer-container">
          <BeerContainer beer={beerA} setBeer={beerA_handler} />
          <BeerContainer beer={beerB} setBeer={beerB_handler} />
        </div>
        <button onClick={handler_calc_click} >Calcular</button>

        <p id="result" />
      </main>

      <footer>
        <p>Created by Rodrigo Jorge - GitHub</p>
      </footer>
    </div>
  );
};

export default App;
