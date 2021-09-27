import React, { Component } from "react";
import "./follow.css";
export default class Follow extends Component {
  render() {
    return (
      <div className="followus">
        <div className="container">
          <div className="row">
            <h2>BİZİ TAKİP EDİN</h2>
          </div>
          <div className="social">
            <div className="sbox">
              <i className="fab fa-facebook-f fa-3x" id="fb"></i>
              <h3>/McDonaldsTurkiye</h3>
            </div>
            <div className="sbox2">
              <i className="fab fa-twitter fa-3x" id="tw"></i>
              <h3>@McDonaldsTR</h3>
            </div>
            <div className="sbox3">
              <i className="fab fa-instagram fa-3x" id="in"></i>
              <h3>@mcdonaldsturkiye</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
