import React, { Component } from "react";
import "./footer.css";
import logo from "./logo.png";
import mc from "./mc.jpg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="logoo">
            <a href=".">
              <img src={logo} alt="logo" className="mc_logo"></img>
            </a>
          </div>
          <div className="information">
            <ul className="informationList">
              <li>
                <a href=".">Gizlilik ve Veri Güvenliği Politikası</a>
              </li>
              <li>
                <a href=".">Kullanım Koşulları</a>
              </li>
              <li>
                <a href=".">Bilgi Toplumu Hizmetleri</a>
              </li>
              <li>
                <a href=".">Bize Ulaşın</a>
              </li>
              <li className="phonee">
                <i className="fas fa-phone-alt fa-2x"></i>
                <h3>444 62 62</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>
              <i className="fas fa-share-alt fa-2x" id="share"></i>
            </li>
            <li>
              <h4 className="h4">Sosyal Medyada McDonald's</h4>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-pinterest-p fa-2x"></i>
              </a>
            </li>
            <li>
              <a href=".">
                <i className="fab fa-google-plus-g fa-2x"></i>
              </a>
            </li>
          </ul>
          <ul className="downloadUl">
            <li>
              <img src={mc} alt="mc" id="download"></img>
            </li>
            <li>
              <h5>McDonald's Uygulamasını İndirin</h5>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
