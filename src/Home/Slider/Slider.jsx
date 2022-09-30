import React from "react";
import "./Slider.css"
import { Carousel } from "antd";
import Door from "../../asssets/Door.jpg";
import Window from "../../asssets/doors_design.jpg";
import DoorCatolgue from "../../asssets/Doors.jpeg";
import WindowImages from "../../asssets/Window.jpg";

const sliderData = [
  {
    img: Door,
  },
  {
    img: WindowImages,
  },
  {
    img: Window,
  },
  {
    img: DoorCatolgue,
  },
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
