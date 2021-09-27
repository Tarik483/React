import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";
import img12 from "./12.jpg";
import img13 from "./13.jpg";
import img14 from "./14.jpg";
import img15 from "./15.jpg";
import img16 from "./16.jpg";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel showArrows={false}  showThumbs={false} className="carousel" infiniteLoop autoPlay>
          <div className="image">
            <img src={img1} alt="1" />
          </div>
          <div className="image">
            <img src={img2} alt="2" />
          </div>
          <div className="image">
            <img src={img3} alt="3" />
          </div>
          <div className="image">
            <img src={img4} alt="4" />
          </div>
          <div className="image">
            <img src={img5} alt="5" />
          </div>
          <div className="image">
            <img src={img6} alt="6" />
          </div>
          <div className="image">
            <img src={img7} alt="7" />
          </div>
          <div className="image">
            <img src={img8} alt="8" />
          </div>
          <div className="image">
            <img src={img9} alt="9" />
          </div>
          <div className="image">
            <img src={img10} alt="10" />
          </div>
          <div className="image">
            <img src={img11} alt="11" />
          </div>
          <div className="image">
            <img src={img12} alt="12" />
          </div>
          <div className="image">
            <img src={img13} alt="13" />
          </div>
          <div className="image">
            <img src={img14} alt="14" />
          </div>
          <div className="image">
            <img src={img15} alt="15" />
          </div>
          <div className="image">
            <img src={img16} alt="16" />
          </div>
        </Carousel>
      </div>
    );
  }
}
