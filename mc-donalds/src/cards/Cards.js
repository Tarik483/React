import React, { Component } from "react";
import "./card.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

export default class Cards extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <img src={img1} alt="1"></img>
          <a href="." className="cardButton">Kampanyaları Gör {">"}</a>
        </div>
        <div>
          <img src={img2} alt="2"></img>
          <a href="." className="cardButton">Keşfet {">"}</a>
        </div>
        <div>
          <img src={img3} alt="3"></img>
          <a href="." className="cardButton">Hemen İndir {">"}</a>
        </div>
      </div>
    );
  }
}
