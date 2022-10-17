import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image1 from '../asssets/Woodendoor.jpg';
import image2 from '../asssets/window.jpg'
import image3 from '../asssets/door frames.jpg'
import image4 from '../asssets/iron frames.gif'
import image5 from '../asssets/WOOD-MATERIAL-FEATURE.jpg'
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
    text: "Wooden Building Material"
  },
]
const servicesImagesRow2 = [
  {
    img: image1
  },
  {
    img: image2
  },

]


const Services = () => {
  return (
    <>
      <div className='mainServices' id='services'>
        <div className="servicesHeading">
          <h2>Services</h2>
        </div>
        <div className="servicesCardRow1">
          {servicesImagesRow1.map((v) => {
          return(
            <div>
              <div className="servicesTextLink">{v?.text}</div>
              <div className="Image">
                <img src={v?.img} class="img" /></div>
            </div>
          )})}
        </div>


      </div>
    </>
  )
}

export default Services