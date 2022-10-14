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
    img: image3
  },
  {
    img: image4
  },
  {
    img: image5
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
        <Box
          // pl={{ sm: 1 }} pr={{ sm: 5 }}
          py={{ sm: 5 }}>
          <Grid container rowSpacing={2} 
          columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
          >
            {servicesImagesRow1?.map((v, i) => {
              return (
                <Grid item xs={6} lg={3} md={4} sm={6}>
                  <div className='servicesCard'>
                    <div className="servicesLink">
                      hello
                    </div>
                    <div className="servicesimage">
                    <img src={v?.img} style={{ width: '350px', height: '250px' }} />
                    </div>
                  </div>

                </Grid>
              );
            })}
            {servicesImagesRow2?.map((v, i) => {
              return (
                <Grid item xs={6} lg={3.5} md={4} sm={6}>
                  <img src={v?.img} style={{ width: '350px', height: '250px' }} />
                </Grid>
              );
            })}

          </Grid>
        </Box>

      </div>
    </>
  )
}

export default Services