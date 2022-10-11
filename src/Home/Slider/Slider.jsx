 import React from "react";
import "./Slider.css"
import { Carousel } from "antd";
import Banner3 from "../../asssets/banner3.png";
import Banner2 from "../../asssets/banner2.png";
import Banner from "../../asssets/banner.png";

const sliderData = [
  {
    img: Banner,
  },
  {
    img: Banner2,
  },
  {
    img: Banner3,
  }
];

const Slider = () => {
  return (
    <>
      <Carousel autoplay>
        {sliderData?.map((v, i) => {
          return (
            <div>
              <img src={v?.img} className="img_carousel" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
