import React from 'react'
import image1 from '../asssets/Woodendoor.jpg';
import image2 from '../asssets/window.jpg'
import image3 from '../asssets/door frames.jpg'
import image4 from '../asssets/iron frames.jpg'
import image5 from '../asssets/WOOD-MATERIAL-FEATURE.jpg'
import Product from '../products/Productanotherpage'
import { Link } from "react-router-dom";
import "./Services.css"


const servicesImagesRow1 = [
  {
    img: image3,
    text: "Door Frames"
  },
  {
    img: image4,
    text: "Iron Frames"
  },
  {
    img: image5,
    text: "Building Material"
  },
]
const servicesImagesRow2 = [
  {
    img: image1,
    text: "Door"
  },
  {
    img: image2,
    text: "Window"
  },
]


const Services = () => {
  return (
    <>
      <div className='mainServices' id='services'>
        <div className="servicesHeading">
          <h2>SERVICES</h2>
          <div className="bar"></div>
        </div>
        <div className="servicesCardRow1">
          {servicesImagesRow1.map((v, i) => {
            return (
              <div key={i}>
                <div className="servicesTextLink"><Link to="/productpage" className='linktext'>{v?.text}</Link></div>
                <div className="Image">
                  <img src={v?.img} className="img" /></div>
              </div>
            )
          })}
        </div>
        <div className="servicesCardRow2">
          {servicesImagesRow2.map((v, index) => {
            return (
              <div key={index}>
                <div className="servicesTextLink"><Link to="/productpage" className='linktext'>{v?.text}</Link></div>
                <div className="Image">
                  <img src={v?.img} className="imgRow2" /></div>
              </div>
            )
          })}
        </div>


      </div>
    </>
  )
}

export default Services