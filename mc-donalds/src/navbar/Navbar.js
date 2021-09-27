import React, { Component } from "react";
import "./nav.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <a href="localhost://3000">
            <img
              className="logo"
              src="https://img2.pngindir.com/20180403/aww/kisspng-fast-food-mcdonald-s-logo-golden-arches-restaurant-mcdonalds-5ac3bf23df0da8.6342440115227778919136.jpg"
              alt="logo"
            ></img>
          </a>
        </div>

        <ul className="ul">
          <li>
            <a href=".">McDONALD'S LEZZETLERİ</a>
          </li>
          <li>
            <a href=".">KAMPANYALAR</a>
          </li>
          <li>
            <a href=".">HAKKIMIZDA</a>
          </li>
          <li>
            <a href=".">Mc DONALDS'IN SIRRI</a>
          </li>
          <li>
            <a href=".">RESTORANLAR</a>
          </li>
        </ul>
        <ul className="ul2">
          <li>
            <a href="."><i className="fas fa-search fa-2x white" id="search"></i></a>
          </li>
          <li className="phone"><i class="fas fa-phone-alt fa-1x yellow" id="call"></i><a href=".">444 62 62</a></li>
          <li className="order"><a href=".">Sipariş Ver</a></li>
        </ul>
      </nav>
    );
  }
}
