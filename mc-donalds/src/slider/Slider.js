import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./style.css";

const Slider = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src="../../public/img/1.jpg" alt="1"></img>
        </div>
      </Carousel>
      
    </div>
  )
}

export default Slider



